import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'

// 연결된 클라이언트 관리
const clients = new Map<string, { ws: any; userId: string; lastLocation?: { lat: number; lng: number } }>()

// 메시지 타입
type WSMessage = 
  | { type: 'join'; userId: string }
  | { type: 'location_update'; userId: string; lat: number; lng: number; accuracy?: number }
  | { type: 'chat'; from: string; to: string; content: string }
  | { type: 'group_chat'; from: string; groupId: string; content: string }

const app = new Elysia()
  .use(cors())
  .get('/health', () => ({ status: 'ok', connections: clients.size }))
  .ws('/ws', {
    open(ws) {
      console.log('Client connected')
    },
    
    message(ws, msg: WSMessage) {
      switch (msg.type) {
        case 'join':
          // 유저 등록
          clients.set(ws.id, { ws, userId: msg.userId })
          console.log(`User ${msg.userId} joined. Total: ${clients.size}`)
          
          // 다른 유저들에게 새 유저 알림
          broadcast(ws, { type: 'user_joined', userId: msg.userId }, msg.userId)
          break
          
        case 'location_update':
          // 위치 업데이트 저장
          const client = clients.get(ws.id)
          if (client) {
            client.lastLocation = { lat: msg.lat, lng: msg.lng }
            
            // 친구들에게 위치 브로드캐스트
            broadcast(ws, {
              type: 'friend_location',
              userId: msg.userId,
              lat: msg.lat,
              lng: msg.lng,
              accuracy: msg.accuracy
            })
          }
          break
          
        case 'chat':
          // 1:1 채팅
          const receiver = findClientByUserId(msg.to)
          if (receiver) {
            receiver.ws.send({
              type: 'chat',
              from: msg.from,
              content: msg.content,
              timestamp: Date.now()
            })
          }
          break
          
        case 'group_chat':
          // 그룹 채팅
          broadcast(ws, {
            type: 'group_chat',
            from: msg.from,
            groupId: msg.groupId,
            content: msg.content,
            timestamp: Date.now()
          }, msg.from)
          break
      }
    },
    
    close(ws) {
      const client = clients.get(ws.id)
      if (client) {
        console.log(`User ${client.userId} disconnected`)
        broadcast(ws, { type: 'user_left', userId: client.userId }, client.userId)
        clients.delete(ws.id)
      }
    }
  })
  .listen(process.env.PORT || 3000)

console.log(`🦊 WebSocket server running at http://localhost:${app.server?.port}`)

// 헬퍼 함수들
function broadcast(ws: any, msg: any, excludeUserId?: string) {
  for (const [id, client] of clients) {
    if (client.userId !== excludeUserId) {
      try {
        client.ws.send(msg)
      } catch (e) {
        // 연결 끊긴 클라이언트 무시
      }
    }
  }
}

function findClientByUserId(userId: string) {
  for (const [id, client] of clients) {
    if (client.userId === userId) return client
  }
  return null
}
