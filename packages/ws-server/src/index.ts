import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { db, rooms as roomsTable, roomMembers, roomMessages, users } from '@location-messenger/db'
import { eq, and, isNull } from 'drizzle-orm'

// 클라이언트 정보 타입
interface ClientInfo {
  ws: any
  userId: string
  roomCode?: string
  lastLocation?: { lat: number; lng: number; accuracy?: number; speed?: number }
}

// 연결된 클라이언트 관리
const clients = new Map<string, ClientInfo>()

// 룸별 클라이언트 관리
const rooms = new Map<string, Set<string>>() // roomCode -> Set of ws.id

// 메시지 타입
type WSMessage = 
  | { type: 'join'; userId: string }
  | { type: 'join_room'; userId: string; roomCode: string }
  | { type: 'leave_room'; userId: string; roomCode: string }
  | { type: 'location_update'; userId: string; lat: number; lng: number; accuracy?: number; speed?: number }
  | { type: 'room_chat'; roomCode: string; senderId: string; content: string }
  | { type: 'set_destination'; roomCode: string; lat: number; lng: number; name?: string }

const app = new Elysia()
  .use(cors())
  .get('/health', () => ({ 
    status: 'ok', 
    connections: clients.size,
    rooms: rooms.size 
  }))
  .ws('/ws', {
    open(ws) {
      console.log('Client connected:', ws.id)
    },
    
    message(ws, msg: WSMessage) {
      switch (msg.type) {
        case 'join':
          handleJoin(ws, msg)
          break
        case 'join_room':
          handleJoinRoom(ws, msg)
          break
        case 'leave_room':
          handleLeaveRoom(ws, msg)
          break
        case 'location_update':
          handleLocationUpdate(ws, msg)
          break
        case 'room_chat':
          handleRoomChat(ws, msg)
          break
        case 'set_destination':
          handleSetDestination(ws, msg)
          break
      }
    },
    
    close(ws) {
      const client = clients.get(ws.id)
      if (client) {
        console.log(`User ${client.userId} disconnected`)
        
        // 룸에서 나간 것을 알림
        if (client.roomCode) {
          broadcastToRoom(client.roomCode, {
            type: 'user_left_room',
            userId: client.userId,
            roomCode: client.roomCode
          }, ws.id)
          
          // 룸에서 제거
          const roomClients = rooms.get(client.roomCode)
          if (roomClients) {
            roomClients.delete(ws.id)
            if (roomClients.size === 0) {
              rooms.delete(client.roomCode)
            }
          }
        }
        
        clients.delete(ws.id)
      }
    }
  })
  .listen(process.env.PORT || 3000)

console.log(`🦊 WebSocket server running at http://localhost:${app.server?.port}`)

// ==================== 핸들러 함수들 ====================

function handleJoin(ws: any, msg: { type: 'join'; userId: string }) {
  clients.set(ws.id, { ws, userId: msg.userId })
  console.log(`User ${msg.userId} joined. Total: ${clients.size}`)
}

async function handleJoinRoom(ws: any, msg: { type: 'join_room'; userId: string; roomCode: string }) {
  const client = clients.get(ws.id)
  if (!client) {
    clients.set(ws.id, { ws, userId: msg.userId, roomCode: msg.roomCode })
  } else {
    client.roomCode = msg.roomCode
  }
  
  // 룸에 클라이언트 추가
  if (!rooms.has(msg.roomCode)) {
    rooms.set(msg.roomCode, new Set())
  }
  rooms.get(msg.roomCode)!.add(ws.id)
  
  const room = await db.query.rooms.findFirst({
    where: eq(roomsTable.code, msg.roomCode),
    with: {
      members: {
        where: isNull(roomMembers.leftAt),
        with: { user: true },
      },
    },
  })
  
  if (room) {
    ws.send({
      type: 'room_info',
      room: {
        code: room.code,
        name: room.name,
        destinationLat: room.destinationLat,
        destinationLng: room.destinationLng,
        destinationName: room.destinationName,
        members: room.members.map((m) => ({
          userId: m.userId,
          user: m.user,
        })),
      },
    })
    
    const user = await db.query.users.findFirst({ where: eq(users.id, msg.userId) })
    broadcastToRoom(msg.roomCode, {
      type: 'user_joined_room',
      userId: msg.userId,
      user,
      roomCode: msg.roomCode
    }, ws.id)
  }
  
  console.log(`User ${msg.userId} joined room ${msg.roomCode}. Room size: ${rooms.get(msg.roomCode)?.size}`)
}

function handleLeaveRoom(ws: any, msg: { type: 'leave_room'; userId: string; roomCode: string }) {
  const client = clients.get(ws.id)
  if (client) {
    client.roomCode = undefined
  }
  
  const roomClients = rooms.get(msg.roomCode)
  if (roomClients) {
    roomClients.delete(ws.id)
    if (roomClients.size === 0) {
      rooms.delete(msg.roomCode)
    }
  }
  
  broadcastToRoom(msg.roomCode, {
    type: 'user_left_room',
    userId: msg.userId,
    roomCode: msg.roomCode
  }, ws.id)
  
  console.log(`User ${msg.userId} left room ${msg.roomCode}`)
}

function handleLocationUpdate(ws: any, msg: { type: 'location_update'; userId: string; lat: number; lng: number; accuracy?: number; speed?: number }) {
  const client = clients.get(ws.id)
  if (client) {
    client.lastLocation = { 
      lat: msg.lat, 
      lng: msg.lng, 
      accuracy: msg.accuracy,
      speed: msg.speed 
    }
    
    // 룸에 있으면 룸 멤버들에게 위치 브로드캐스트
    if (client.roomCode) {
      broadcastToRoom(client.roomCode, {
        type: 'room_location_update',
        userId: msg.userId,
        lat: msg.lat,
        lng: msg.lng,
        accuracy: msg.accuracy,
        speed: msg.speed,
        timestamp: Date.now()
      }, ws.id)
    }
  }
}

async function handleRoomChat(ws: any, msg: { type: 'room_chat'; roomCode: string; senderId: string; content: string }) {
  const room = await db.query.rooms.findFirst({ where: eq(roomsTable.code, msg.roomCode) })
  if (room) {
    await db.insert(roomMessages).values({
      roomId: room.id,
      senderId: msg.senderId,
      content: msg.content,
      type: 'TEXT',
    })
  }

  const outMsg = {
    type: 'room_chat',
    roomCode: msg.roomCode,
    senderId: msg.senderId,
    content: msg.content,
    timestamp: Date.now(),
  }

  try {
    ws.send(outMsg)
  } catch (e) {}

  broadcastToRoom(msg.roomCode, outMsg, ws.id)
}

async function handleSetDestination(ws: any, msg: { type: 'set_destination'; roomCode: string; lat: number; lng: number; name?: string }) {
  await db
    .update(roomsTable)
    .set({ destinationLat: msg.lat, destinationLng: msg.lng, destinationName: msg.name })
    .where(eq(roomsTable.code, msg.roomCode))

  broadcastToRoom(msg.roomCode, {
    type: 'destination_updated',
    roomCode: msg.roomCode,
    lat: msg.lat,
    lng: msg.lng,
    name: msg.name,
  })
}

// ==================== 헬퍼 함수들 ====================

function broadcastToRoom(roomCode: string, msg: any, excludeWsId?: string) {
  const roomClients = rooms.get(roomCode)
  if (!roomClients) return
  
  for (const wsId of roomClients) {
    if (wsId !== excludeWsId) {
      const client = clients.get(wsId)
      if (client) {
        try {
          client.ws.send(msg)
        } catch (e) {
          // 연결 끊긴 클라이언트 무시
        }
      }
    }
  }
}