import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { prisma } from '@location-messenger/db'

const app = new Hono().basePath('/api')

app.use('*', cors())

// Health check
app.get('/health', (c) => c.json({ status: 'ok' }))

// ==================== Users ====================
const createUserSchema = z.object({
  name: z.string().optional(),
  characterType: z.string().default('cat'),
  characterColor: z.string().default('#FF6B6B'),
})

// 익명 사용자 생성
app.post('/users/anonymous', zValidator('json', createUserSchema), async (c) => {
  const data = c.req.valid('json')
  
  const user = await prisma.users.create({
    data: {
      name: data.name || `익명${Math.random().toString(36).substring(2, 6)}`,
      characterType: data.characterType,
      characterColor: data.characterColor,
      isAnonymous: true,
      email: null,
    }
  })
  
  return c.json({ user })
})

// 사용자 조회
app.get('/users/:id', async (c) => {
  const id = c.req.param('id')
  
  const user = await prisma.users.findUnique({
    where: { id },
    include: {
      locations: {
        orderBy: { timestamp: 'desc' },
        take: 1,
      }
    }
  })
  
  if (!user) {
    return c.json({ error: 'User not found' }, 404)
  }
  
  return c.json({ user })
})

// 사용자 정보 업데이트
app.patch('/users/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()
  
  const user = await prisma.users.update({
    where: { id },
    data: body
  })
  
  return c.json({ user })
})

// ==================== Rooms ====================
const createRoomSchema = z.object({
  userId: z.string(),
  name: z.string().optional(),
  destinationLat: z.number().optional(),
  destinationLng: z.number().optional(),
  destinationName: z.string().optional(),
})

// 랜덤 코드 생성 (6자리)
function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // 혼동되는 문자 제외
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// 채팅방 생성
app.post('/rooms', zValidator('json', createRoomSchema), async (c) => {
  const data = c.req.valid('json')
  
  // 고유한 코드 생성 (중복 체크)
  let code = generateRoomCode()
  let attempts = 0
  while (await prisma.rooms.findUnique({ where: { code } })) {
    code = generateRoomCode()
    attempts++
    if (attempts > 10) {
      return c.json({ error: 'Failed to generate unique code' }, 500)
    }
  }
  
  const room = await prisma.rooms.create({
    data: {
      code,
      name: data.name,
      destinationLat: data.destinationLat,
      destinationLng: data.destinationLng,
      destinationName: data.destinationName,
      members: {
        create: {
          userId: data.userId,
        }
      }
    },
    include: {
      members: {
        include: {
          user: true
        }
      }
    }
  })
  
  return c.json({ room })
})

// 코드로 채팅방 조회
app.get('/rooms/code/:code', async (c) => {
  const code = c.req.param('code').toUpperCase()
  
  const room = await prisma.rooms.findUnique({
    where: { code },
    include: {
      members: {
        where: { leftAt: null },
        include: {
          user: {
            include: {
              locations: {
                orderBy: { timestamp: 'desc' },
                take: 1,
              }
            }
          }
        }
      },
      messages: {
        orderBy: { createdAt: 'desc' },
        take: 50,
      }
    }
  })
  
  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }
  
  return c.json({ room })
})

// 채팅방 참여
app.post('/rooms/:code/join', async (c) => {
  const code = c.req.param('code').toUpperCase()
  const body = await c.req.json()
  const { userId } = body
  
  const room = await prisma.rooms.findUnique({
    where: { code }
  })
  
  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }
  
  // 이미 참여 중인지 확인
  const existingMember = await prisma.room_members.findUnique({
    where: {
      roomId_userId: {
        roomId: room.id,
        userId
      }
    }
  })
  
  if (existingMember) {
    // 이미 참여 중이면 leftAt 초기화
    const member = await prisma.room_members.update({
      where: { id: existingMember.id },
      data: { leftAt: null }
    })
    return c.json({ room, member, rejoined: true })
  }
  
  // 새로 참여
  const member = await prisma.room_members.create({
    data: {
      roomId: room.id,
      userId
    }
  })
  
  return c.json({ room, member, rejoined: false })
})

// 채팅방 나가기
app.post('/rooms/:code/leave', async (c) => {
  const code = c.req.param('code').toUpperCase()
  const body = await c.req.json()
  const { userId } = body
  
  const room = await prisma.rooms.findUnique({
    where: { code }
  })
  
  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }
  
  await prisma.room_members.update({
    where: {
      roomId_userId: {
        roomId: room.id,
        userId
      }
    },
    data: { leftAt: new Date() }
  })
  
  return c.json({ success: true })
})

// ==================== Room Messages ====================
const sendMessageSchema = z.object({
  senderId: z.string(),
  content: z.string(),
  type: z.enum(['TEXT', 'LOCATION_SHARE', 'SYSTEM']).default('TEXT'),
})

// 메시지 전송
app.post('/rooms/:code/messages', zValidator('json', sendMessageSchema), async (c) => {
  const code = c.req.param('code').toUpperCase()
  const data = c.req.valid('json')
  
  const room = await prisma.rooms.findUnique({
    where: { code }
  })
  
  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }
  
  const message = await prisma.room_messages.create({
    data: {
      roomId: room.id,
      senderId: data.senderId,
      content: data.content,
      type: data.type,
    }
  })
  
  return c.json({ message })
})

// 메시지 조회
app.get('/rooms/:code/messages', async (c) => {
  const code = c.req.param('code').toUpperCase()
  const limit = parseInt(c.req.query('limit') || '50')
  const before = c.req.query('before') // cursor for pagination
  
  const room = await prisma.rooms.findUnique({
    where: { code }
  })
  
  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }
  
  const messages = await prisma.room_messages.findMany({
    where: {
      roomId: room.id,
      ...(before ? { createdAt: { lt: new Date(before) } } : {})
    },
    orderBy: { createdAt: 'desc' },
    take: limit,
  })
  
  return c.json({ messages: messages.reverse() })
})

// ==================== Locations ====================
const updateLocationSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  accuracy: z.number().optional(),
})

// 위치 업데이트
app.post('/locations/:userId', zValidator('json', updateLocationSchema), async (c) => {
  const userId = c.req.param('userId')
  const data = c.req.valid('json')
  
  // 이전 위치 비활성화
  await prisma.locations.updateMany({
    where: { userId, isActive: true },
    data: { isActive: false }
  })
  
  // 새 위치 저장
  const location = await prisma.locations.create({
    data: {
      userId,
      latitude: data.latitude,
      longitude: data.longitude,
      accuracy: data.accuracy,
    }
  })
  
  return c.json({ location })
})

// 사용자 현재 위치 조회
app.get('/locations/:userId', async (c) => {
  const userId = c.req.param('userId')
  
  const location = await prisma.locations.findFirst({
    where: { userId, isActive: true },
    orderBy: { timestamp: 'desc' }
  })
  
  return c.json({ location })
})

// ==================== Destination / ETA ====================
// 목표지점 설정
app.patch('/rooms/:code/destination', async (c) => {
  const code = c.req.param('code').toUpperCase()
  const body = await c.req.json()
  const { lat, lng, name } = body
  
  const room = await prisma.rooms.update({
    where: { code },
    data: {
      destinationLat: lat,
      destinationLng: lng,
      destinationName: name,
    }
  })
  
  return c.json({ room })
})

// Vercel용 export
export default app

// 타입 추론용
export type AppType = typeof app
