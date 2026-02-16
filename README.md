# Location Messenger 🗺️

위치 기반 캐릭터 메신저 앱

## 아키텍처

```
┌─────────────────┐     WebSocket      ┌──────────────────┐
│   Expo Mobile   │◄──────────────────►│ Railway:Elysia  │
│   (React Native)│                     │  (WS Server)     │
└────────┬────────┘                     └────────┬─────────┘
         │                                       │
         │ REST API                              │
         ▼                                       ▼
┌─────────────────┐                     ┌──────────────────┐
│ Vercel: Hono   │                     │Prisma PostgreSQL │
│  (API Server)   │                     │    (Database)    │
└─────────────────┘                     └──────────────────┘
```

## 기술 스택

| 레이어 | 기술 | 배포 |
|--------|------|------|
| Mobile | Expo 54 + React Native | EAS Build |
| REST API | Hono | Vercel (Pro) |
| WebSocket | Bun + Elysia | Railway |
| Database | Prisma PostgreSQL | Prisma Cloud |

## 시작하기

```bash
# 의존성 설치
bun install

# DB 스키마 적용
bun run db:push

# WebSocket 서버 실행
bun run dev:ws

# REST API 실행
bun run dev:api

# 모바일 앱 실행
bun run dev:mobile
```

## 프로젝트 구조

```
location-messenger/
├── apps/
│   └── mobile/              — Expo 앱
├── packages/
│   ├── ws-server/           — WebSocket (Railway)
│   ├── api/                 — REST API (Vercel)
│   ├── db/                  — Prisma 스키마
│   └── shared/              — 공유 타입
└── package.json
```

## 환경 변수

### packages/db/.env
```
DATABASE_URL="postgres://..."
```

### packages/ws-server/.env
```
PORT=3000
DATABASE_URL="postgres://..."
```
