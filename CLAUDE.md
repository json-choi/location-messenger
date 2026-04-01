# Yogiya Project Instructions

## PRD-Driven Development

- Product Requirements Document: `docs/PRD.md`
- 모든 기능 구현 전에 PRD를 먼저 확인하고, 변경 시 PRD를 함께 업데이트합니다.
- 새 기능 추가 시 PRD에 요구사항을 먼저 작성하고 Status를 PLANNED으로 표시합니다.

## TDD Workflow (Test-First)

새 기능 구현 순서:

1. **PRD 업데이트** — `docs/PRD.md`에 기능 요구사항 추가 (Status: PLANNED)
2. **E2E 테스트 작성** — `apps/mobile/e2e/`에 Maestro flow 작성 + testID 정의
3. **구현** — shared → db → api → ws-server → mobile 순서로
4. **PRD 완료 표시** — Status를 IMPLEMENTED로 변경

## Package Structure

- `packages/shared` — Types, constants, utilities (모든 패키지에서 import)
- `packages/db` — Drizzle ORM + PostgreSQL schema
- `packages/api` — Hono REST API (Bun, deployed to Vercel)
- `packages/ws-server` — Elysia WebSocket server (Bun, deployed to Railway)
- `apps/mobile` — Expo SDK 55 + React Native 0.83 mobile app

## Tech Stack

- Runtime: Bun
- Mobile: Expo SDK 55, React Native 0.83, React 19.2
- Styling: NativeWind v4 + TailwindCSS 3, gluestack-ui
- Animation: react-native-reanimated, @shopify/react-native-skia
- Maps: react-native-maps (Google Maps)
- DB: PostgreSQL + Drizzle ORM
- API: Hono + Zod 4
- WebSocket: Elysia
- E2E Testing: Maestro

## Conventions

- Commit messages in Korean
- Conversations in Korean
- Code comments only where logic isn't self-evident
- testID naming: `snake_case` (e.g., `onboarding_screen`, `tab_map`)
