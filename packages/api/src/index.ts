import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { db, users, locations, friendships, rooms, roomMembers, roomMessages, messages } from '@location-messenger/db'
import { eq, and, or, desc, lt, isNull } from 'drizzle-orm'

const app = new Hono().basePath('/api')

app.use('*', cors())

app.onError((err, c) => {
  console.error('API Error:', err)
  return c.json({ error: err.message || 'Internal Server Error' }, 500)
})

app.get('/health', (c) => c.json({ status: 'ok' }))

const createUserSchema = z.object({
  name: z.string().optional(),
  characterType: z.string().default('cat'),
  characterColor: z.string().default('#FF6B6B'),
})

app.post('/users/anonymous', zValidator('json', createUserSchema), async (c) => {
  const data = c.req.valid('json')

  try {
    const [user] = await db
      .insert(users)
      .values({
        name: data.name || `익명${Math.random().toString(36).substring(2, 6)}`,
        characterType: data.characterType,
        characterColor: data.characterColor,
        isAnonymous: true,
        email: null,
      })
      .returning()

    return c.json({ user })
  } catch (error) {
    console.error('Failed to create user:', error)
    return c.json({ error: 'Failed to create user' }, 500)
  }
})

app.get('/users/:id', async (c) => {
  const id = c.req.param('id')

  const user = await db.query.users.findFirst({
    where: eq(users.id, id),
    with: {
      locations: {
        orderBy: desc(locations.timestamp),
        limit: 1,
      },
    },
  })

  if (!user) {
    return c.json({ error: 'User not found' }, 404)
  }

  return c.json({ user })
})

app.patch('/users/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()

  const [user] = await db
    .update(users)
    .set(body)
    .where(eq(users.id, id))
    .returning()

  return c.json({ user })
})

const createRoomSchema = z.object({
  userId: z.string(),
  name: z.string().optional(),
  destinationLat: z.number().optional(),
  destinationLng: z.number().optional(),
  destinationName: z.string().optional(),
})

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

app.post('/rooms', zValidator('json', createRoomSchema), async (c) => {
  const data = c.req.valid('json')

  let code = generateRoomCode()
  let attempts = 0
  while (true) {
    const existing = await db.query.rooms.findFirst({ where: eq(rooms.code, code) })
    if (!existing) break
    code = generateRoomCode()
    attempts++
    if (attempts > 10) {
      return c.json({ error: 'Failed to generate unique code' }, 500)
    }
  }

  const [room] = await db
    .insert(rooms)
    .values({
      code,
      name: data.name,
      destinationLat: data.destinationLat,
      destinationLng: data.destinationLng,
      destinationName: data.destinationName,
    })
    .returning()

  await db.insert(roomMembers).values({ roomId: room.id, userId: data.userId })

  const roomWithMembers = await db.query.rooms.findFirst({
    where: eq(rooms.id, room.id),
    with: {
      members: {
        with: { user: true },
      },
    },
  })

  return c.json({ room: roomWithMembers })
})

app.get('/rooms/code/:code', async (c) => {
  const code = c.req.param('code').toUpperCase()

  const room = await db.query.rooms.findFirst({
    where: eq(rooms.code, code),
    with: {
      members: {
        where: isNull(roomMembers.leftAt),
        with: {
          user: {
            with: {
              locations: {
                orderBy: desc(locations.timestamp),
                limit: 1,
              },
            },
          },
        },
      },
      messages: {
        orderBy: desc(roomMessages.createdAt),
        limit: 50,
      },
    },
  })

  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }

  return c.json({ room })
})

app.post('/rooms/:code/join', async (c) => {
  const code = c.req.param('code').toUpperCase()
  const body = await c.req.json()
  const { userId } = body

  const room = await db.query.rooms.findFirst({ where: eq(rooms.code, code) })

  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }

  const existingMember = await db.query.roomMembers.findFirst({
    where: and(eq(roomMembers.roomId, room.id), eq(roomMembers.userId, userId)),
  })

  if (existingMember) {
    const [member] = await db
      .update(roomMembers)
      .set({ leftAt: null })
      .where(eq(roomMembers.id, existingMember.id))
      .returning()
    return c.json({ room, member, rejoined: true })
  }

  const [member] = await db
    .insert(roomMembers)
    .values({ roomId: room.id, userId })
    .returning()

  return c.json({ room, member, rejoined: false })
})

app.post('/rooms/:code/leave', async (c) => {
  const code = c.req.param('code').toUpperCase()
  const body = await c.req.json()
  const { userId } = body

  const room = await db.query.rooms.findFirst({ where: eq(rooms.code, code) })

  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }

  await db
    .update(roomMembers)
    .set({ leftAt: new Date() })
    .where(and(eq(roomMembers.roomId, room.id), eq(roomMembers.userId, userId)))

  return c.json({ success: true })
})

const sendMessageSchema = z.object({
  senderId: z.string(),
  content: z.string(),
  type: z.enum(['TEXT', 'LOCATION_SHARE', 'SYSTEM']).default('TEXT'),
})

app.post('/rooms/:code/messages', zValidator('json', sendMessageSchema), async (c) => {
  const code = c.req.param('code').toUpperCase()
  const data = c.req.valid('json')

  const room = await db.query.rooms.findFirst({ where: eq(rooms.code, code) })

  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }

  const [message] = await db
    .insert(roomMessages)
    .values({
      roomId: room.id,
      senderId: data.senderId,
      content: data.content,
      type: data.type,
    })
    .returning()

  return c.json({ message })
})

app.get('/rooms/:code/messages', async (c) => {
  const code = c.req.param('code').toUpperCase()
  const limit = parseInt(c.req.query('limit') || '50')
  const before = c.req.query('before')

  const room = await db.query.rooms.findFirst({ where: eq(rooms.code, code) })

  if (!room) {
    return c.json({ error: 'Room not found' }, 404)
  }

  const msgs = await db
    .select()
    .from(roomMessages)
    .where(
      and(
        eq(roomMessages.roomId, room.id),
        before ? lt(roomMessages.createdAt, new Date(before)) : undefined,
      ),
    )
    .orderBy(desc(roomMessages.createdAt))
    .limit(limit)

  return c.json({ messages: msgs.reverse() })
})

const updateLocationSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  accuracy: z.number().optional(),
})

app.post('/locations/:userId', zValidator('json', updateLocationSchema), async (c) => {
  const userId = c.req.param('userId')
  const data = c.req.valid('json')

  await db
    .update(locations)
    .set({ isActive: false })
    .where(and(eq(locations.userId, userId), eq(locations.isActive, true)))

  const [location] = await db
    .insert(locations)
    .values({
      userId,
      latitude: data.latitude,
      longitude: data.longitude,
      accuracy: data.accuracy,
    })
    .returning()

  return c.json({ location })
})

app.get('/locations/:userId', async (c) => {
  const userId = c.req.param('userId')

  const location = await db.query.locations.findFirst({
    where: and(eq(locations.userId, userId), eq(locations.isActive, true)),
    orderBy: desc(locations.timestamp),
  })

  return c.json({ location })
})

app.patch('/rooms/:code/destination', async (c) => {
  const code = c.req.param('code').toUpperCase()
  const body = await c.req.json()
  const { lat, lng, name } = body

  const [room] = await db
    .update(rooms)
    .set({ destinationLat: lat, destinationLng: lng, destinationName: name })
    .where(eq(rooms.code, code))
    .returning()

  return c.json({ room })
})

const addFriendSchema = z.object({
  requesterId: z.string(),
  addresseeId: z.string(),
})

app.post('/friends/request', zValidator('json', addFriendSchema), async (c) => {
  const data = c.req.valid('json')

  const existing = await db.query.friendships.findFirst({
    where: and(
      eq(friendships.requesterId, data.requesterId),
      eq(friendships.addresseeId, data.addresseeId),
    ),
  })

  if (existing) {
    return c.json({ error: 'Friend request already exists', friendship: existing }, 400)
  }

  const [friendship] = await db
    .insert(friendships)
    .values({
      requesterId: data.requesterId,
      addresseeId: data.addresseeId,
      status: 'PENDING',
    })
    .returning()

  const friendshipWithAddressee = await db.query.friendships.findFirst({
    where: eq(friendships.id, friendship.id),
    with: { addressee: true },
  })

  return c.json({ friendship: friendshipWithAddressee })
})

app.post('/friends/accept/:requesterId', async (c) => {
  const requesterId = c.req.param('requesterId')
  const body = await c.req.json()
  const { addresseeId } = body

  const [friendship] = await db
    .update(friendships)
    .set({ status: 'ACCEPTED' })
    .where(
      and(
        eq(friendships.requesterId, requesterId),
        eq(friendships.addresseeId, addresseeId),
      ),
    )
    .returning()

  const friendshipWithUsers = await db.query.friendships.findFirst({
    where: eq(friendships.id, friendship.id),
    with: { requester: true, addressee: true },
  })

  const existing = await db.query.friendships.findFirst({
    where: and(
      eq(friendships.requesterId, addresseeId),
      eq(friendships.addresseeId, requesterId),
    ),
  })

  if (existing) {
    await db
      .update(friendships)
      .set({ status: 'ACCEPTED' })
      .where(eq(friendships.id, existing.id))
  } else {
    await db.insert(friendships).values({
      requesterId: addresseeId,
      addresseeId: requesterId,
      status: 'ACCEPTED',
    })
  }

  return c.json({ friendship: friendshipWithUsers })
})

app.post('/friends/reject/:requesterId', async (c) => {
  const requesterId = c.req.param('requesterId')
  const body = await c.req.json()
  const { addresseeId } = body

  await db
    .delete(friendships)
    .where(
      and(
        eq(friendships.requesterId, requesterId),
        eq(friendships.addresseeId, addresseeId),
      ),
    )

  return c.json({ success: true })
})

app.get('/friends/pending/:userId', async (c) => {
  const userId = c.req.param('userId')

  const requests = await db.query.friendships.findMany({
    where: and(eq(friendships.addresseeId, userId), eq(friendships.status, 'PENDING')),
    with: { requester: true },
  })

  return c.json({ requests })
})

app.get('/friends/:userId', async (c) => {
  const userId = c.req.param('userId')

  const friendshipList = await db.query.friendships.findMany({
    where: and(
      or(
        eq(friendships.requesterId, userId),
        eq(friendships.addresseeId, userId),
      ),
      eq(friendships.status, 'ACCEPTED'),
    ),
    with: {
      requester: {
        with: {
          locations: {
            where: eq(locations.isActive, true),
            orderBy: desc(locations.timestamp),
            limit: 1,
          },
        },
      },
      addressee: {
        with: {
          locations: {
            where: eq(locations.isActive, true),
            orderBy: desc(locations.timestamp),
            limit: 1,
          },
        },
      },
    },
  })

  const friends = friendshipList.map((f) => {
    const friend = f.requesterId === userId ? f.addressee : f.requester
    return {
      id: f.id,
      userId: friend.id,
      name: friend.name,
      characterType: friend.characterType,
      characterColor: friend.characterColor,
      locationSharingEnabled: friend.locationSharingEnabled,
      lastLocation: friend.locations[0]
        ? {
            lat: friend.locations[0].latitude,
            lng: friend.locations[0].longitude,
            accuracy: friend.locations[0].accuracy,
            timestamp: friend.locations[0].timestamp.getTime(),
          }
        : null,
    }
  })

  return c.json({ friends })
})

app.delete('/friends/:userId/:friendId', async (c) => {
  const userId = c.req.param('userId')
  const friendId = c.req.param('friendId')

  await db
    .delete(friendships)
    .where(
      or(
        and(eq(friendships.requesterId, userId), eq(friendships.addresseeId, friendId)),
        and(eq(friendships.requesterId, friendId), eq(friendships.addresseeId, userId)),
      ),
    )

  return c.json({ success: true })
})

const sendDirectMessageSchema = z.object({
  senderId: z.string(),
  content: z.string(),
  type: z.enum(['TEXT', 'LOCATION_SHARE', 'SYSTEM']).default('TEXT'),
})

app.post('/messages/direct/:receiverId', zValidator('json', sendDirectMessageSchema), async (c) => {
  const receiverId = c.req.param('receiverId')
  const data = c.req.valid('json')

  const [message] = await db
    .insert(messages)
    .values({
      senderId: data.senderId,
      receiverId,
      content: data.content,
      type: data.type,
    })
    .returning()

  const messageWithSender = await db.query.messages.findFirst({
    where: eq(messages.id, message.id),
    with: { sender: true },
  })

  return c.json({ message: messageWithSender })
})

app.get('/messages/direct/:userId/:friendId', async (c) => {
  const userId = c.req.param('userId')
  const friendId = c.req.param('friendId')
  const limit = parseInt(c.req.query('limit') || '50')
  const before = c.req.query('before')

  const msgs = await db.query.messages.findMany({
    where: and(
      or(
        and(eq(messages.senderId, userId), eq(messages.receiverId, friendId)),
        and(eq(messages.senderId, friendId), eq(messages.receiverId, userId)),
      ),
      before ? lt(messages.createdAt, new Date(before)) : undefined,
    ),
    orderBy: desc(messages.createdAt),
    limit,
    with: { sender: true },
  })

  return c.json({ messages: msgs.reverse() })
})

app.get('/chats/:userId', async (c) => {
  const userId = c.req.param('userId')

  const directMessages = await db.query.messages.findMany({
    where: or(eq(messages.senderId, userId), eq(messages.receiverId, userId)),
    orderBy: desc(messages.createdAt),
    with: {
      sender: true,
      receiver: true,
    },
  })

  const chatMap = new Map<string, {
    id: string
    type: 'direct'
    friend: { id: string; name: string | null; characterType: string; characterColor: string }
    lastMessage: { content: string; timestamp: number; senderId: string }
    unreadCount: number
  }>()

  for (const msg of directMessages) {
    const friendId = msg.senderId === userId ? msg.receiverId : msg.senderId
    const friend = msg.senderId === userId ? msg.receiver : msg.sender

    if (!friendId || !friend) continue

    if (!chatMap.has(friendId)) {
      chatMap.set(friendId, {
        id: friendId,
        type: 'direct',
        friend: {
          id: friend.id,
          name: friend.name,
          characterType: friend.characterType,
          characterColor: friend.characterColor,
        },
        lastMessage: {
          content: msg.content,
          timestamp: msg.createdAt.getTime(),
          senderId: msg.senderId,
        },
        unreadCount: 0,
      })
    }
  }

  const userRooms = await db.query.roomMembers.findMany({
    where: and(eq(roomMembers.userId, userId), isNull(roomMembers.leftAt)),
    with: {
      room: {
        with: {
          messages: {
            orderBy: desc(roomMessages.createdAt),
            limit: 1,
          },
        },
      },
    },
  })

  const groupChats = userRooms.map((rm) => ({
    id: rm.room.code,
    type: 'room' as const,
    name: rm.room.name || `방 ${rm.room.code}`,
    lastMessage: rm.room.messages[0]
      ? {
          content: rm.room.messages[0].content,
          timestamp: rm.room.messages[0].createdAt.getTime(),
          senderId: rm.room.messages[0].senderId,
        }
      : null,
  }))

  return c.json({
    chats: [...chatMap.values(), ...groupChats].sort(
      (a, b) => (b.lastMessage?.timestamp || 0) - (a.lastMessage?.timestamp || 0),
    ),
  })
})

export default app

export type AppType = typeof app
