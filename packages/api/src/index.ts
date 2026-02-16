import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono().basePath('/api')

app.use('*', cors())

// Health check
app.get('/health', (c) => c.json({ status: 'ok' }))

// ==================== Users ====================
const userSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  avatar: z.string().optional(),
  characterType: z.string().default('cat'),
  characterColor: z.string().default('#FF6B6B')
})

app.get('/users', async (c) => {
  // TODO: Prisma로 구현
  return c.json({ users: [] })
})

app.post('/users', zValidator('json', userSchema), async (c) => {
  const data = c.req.valid('json')
  // TODO: Prisma로 구현
  return c.json({ user: data, id: 'temp-id' })
})

app.get('/users/:id', async (c) => {
  const id = c.req.param('id')
  // TODO: Prisma로 구현
  return c.json({ user: { id } })
})

// ==================== Friends ====================
app.get('/friends/:userId', async (c) => {
  const userId = c.req.param('userId')
  // TODO: Prisma로 구현
  return c.json({ friends: [] })
})

app.post('/friends/request', async (c) => {
  const body = await c.req.json()
  // TODO: Prisma로 구현
  return c.json({ status: 'pending' })
})

// ==================== Locations ====================
app.get('/locations/:userId', async (c) => {
  const userId = c.req.param('userId')
  // TODO: WebSocket 서버에서 실시간으로 관리, DB는 히스토리용
  return c.json({ location: null })
})

// ==================== Messages ====================
app.get('/messages/direct/:userId/:friendId', async (c) => {
  // TODO: Prisma로 구현
  return c.json({ messages: [] })
})

app.get('/messages/group/:groupId', async (c) => {
  // TODO: Prisma로 구현
  return c.json({ messages: [] })
})

// Vercel용 export
export default app

// 타입 추론용
export type AppType = typeof app
