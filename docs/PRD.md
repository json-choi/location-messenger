# Yogiya - Product Requirements Document

> Location Sharing Messenger for Real-time Group Meet-ups
> Last Updated: 2026-04-02

---

## 1. Product Vision

**"친구들과 만날 때, 서로 묻지 않아도 어디쯤인지 알 수 있는 앱"**

Yogiya(여기야)는 친구들과의 만남을 재미있게 만드는 엔터테인먼트 위치 공유 앱입니다.

### 핵심 사용 시나리오
1. 친구들과 약속을 잡고 **어디서 볼지 정한다** (목적지 설정)
2. 이동하면서 **서로 어디쯤인지 지도로 확인한다** (실시간 위치 공유)
3. **매번 "어디야?" 카톡 없이** ETA로 도착 시간을 확인한다
4. 이동 중에 **채팅하며** 소통한다
5. 모두 도착하면 자동으로 **위치 공유가 종료**된다

### 엔터테인먼트 요소
- 귀여운 캐릭터 아바타가 지도 위에서 실시간으로 움직임
- 캐릭터가 걷는 방향에 따라 8방향 애니메이션
- 이동 속도에 따라 idle/walking 전환

---

## 2. Current Status Analysis

### 2.1 구현 완료된 핵심 기능

| 기능 | 상태 | 설명 |
|------|------|------|
| 온보딩 (캐릭터 선택 + 이름) | DONE | 6종 캐릭터, 이름 입력, 익명 유저 생성 |
| 방 생성 | DONE | 6자리 코드, 목적지 설정 가능 |
| 딥링크 방 참여 | DONE | yogiya://room/CODE로 초대 |
| 실시간 위치 공유 | DONE | 포그라운드(5s) + 백그라운드(10s) 추적 |
| 지도 위 캐릭터 표시 | DONE | 8방향 + idle/walking 애니메이션 |
| 방 내 채팅 | DONE | 드래그 가능한 채팅 패널, DB 저장 |
| 목적지 설정/삭제 | DONE | 지도 롱프레스, 100m 반경 원 표시 |
| ETA 표시 | DONE | 거리(km) + 예상 시간 |
| 도착 감지 | DONE | 전원 1m 이내 → 알림 + 자동 종료 |
| 방 링크 공유 | DONE | Share API로 초대 링크 공유 |
| 친구 추가/삭제 | DONE | 사용자 ID로 요청 |
| 1:1 채팅 | DONE | DM 화면, 메시지 DB 저장 |
| 프로필 편집 | DONE | 이름, 캐릭터 변경 |

### 2.2 개선이 필요한 부분

| 항목 | 현재 상태 | 문제점 |
|------|----------|--------|
| 친구 추가 UX | 사용자 ID 직접 입력 | UUID를 공유해야 하는 비현실적 UX |
| 프로필 변경 동기화 | 로컬 state만 변경 | 서버에 PATCH 호출 안 함, 앱 재시작 시 원복 |
| 캐릭터 컬러 선택 | 온보딩에서 #3B82F6 하드코딩 | 8가지 프리셋 컬러 선택 UI 없음 |
| WebSocket 재연결 | connect 1회만 시도 | 네트워크 끊김 시 자동 재연결 없음 |
| 방 목록/히스토리 | 없음 | 방 나가면 다시 찾을 방법 없음 |
| 오프라인 처리 | 없음 | 네트워크 없을 때 빈 화면 |
| 위치 권한 거부 처리 | Alert만 표시 | 권한 거부 후 재요청 가이드 없음 |
| 채팅 알림 | 없음 | 앱이 백그라운드일 때 메시지 알림 없음 |

### 2.3 미구현 기능

| 기능 | 우선순위 | DB 스키마 | 설명 |
|------|----------|-----------|------|
| 친구 코드/QR 공유 | HIGH | 별도 필드 필요 | 짧은 코드로 친구 추가 |
| 푸시 알림 | HIGH | X | 방 초대, 메시지, 위치 도착 알림 |
| OAuth 로그인 | MEDIUM | O (authProvider 존재) | 카카오/구글 소셜 로그인 |
| 그룹 채팅 | MEDIUM | O (groups, group_members) | 방 밖에서의 그룹 채팅 |
| 즐겨찾기 장소 | LOW | X | 자주 가는 목적지 저장 |
| 방 만료/자동정리 | LOW | O (expiresAt 존재) | 일정 시간 후 방 자동 삭제 |
| 읽음 확인 | LOW | X | 메시지 읽음 표시 |
| 아바타 이미지 업로드 | LOW | O (avatar 존재) | 커스텀 프로필 이미지 |
| 친구 위치 공유 (방 밖) | LOW | O (types 존재) | 방 없이 친구 위치 확인 |

### Architecture

```
apps/mobile (Expo + React Native)  ←→  packages/ws-server (Elysia WebSocket)
                                    ←→  packages/api (Hono REST)
                                    ←→  packages/db (Drizzle + PostgreSQL)
                                         packages/shared (Types & Utils)
```

---

## 2. packages/shared

공유 타입, 상수, 유틸리티. 모든 패키지에서 import합니다.

### 2.1 Character System

| Constant | Value |
|----------|-------|
| CHARACTER_TYPES | `boy_casual`, `boy_hiphop`, `boy_formal`, `girl_school`, `girl_casual`, `girl_career` |
| CHARACTER_COLORS | `#FF6B6B`, `#4ECDC4`, `#45B7D1`, `#96CEB4`, `#FFEAA7`, `#DDA0DD`, `#98D8C8`, `#F7DC6F` |
| CharacterDirection | `south`, `south-east`, `east`, `north-east`, `north`, `north-west`, `west`, `south-west` |
| CharacterAnimation | `idle`, `walking` |

### 2.2 Core Types

```typescript
User {
  id, email?, name, avatar?, characterType, characterColor,
  locationSharingEnabled, online?, lastLocation?,
  authProvider?, authId?, createdAt?
}

UserLocation { lat, lng, accuracy?, timestamp, direction?, isMoving? }

RoomInfo {
  code, name?, destinationLat?, destinationLng?, destinationName?,
  members: RoomMember[]
}

RoomMember { userId, user: User, joinedAt?, lastLocation? }

RoomMessage { id, roomId, senderId, content, type: MessageType, createdAt, sender? }

MapMarker {
  id, userId, lat, lng, characterType, characterColor,
  name?, isOnline, lastSeen?, direction?, isMoving?
}

Message { id, content, type: MessageType, senderId, receiverId?, groupId?, createdAt, sender? }

MessageType = "TEXT" | "LOCATION_SHARE" | "SYSTEM"
FriendshipStatus = "PENDING" | "ACCEPTED" | "BLOCKED"
```

### 2.3 WebSocket Message Types

| Type (Inbound) | Payload | Purpose |
|----------------|---------|---------|
| `join` | userId | Client registers |
| `join_room` | userId, roomCode | Join room |
| `leave_room` | userId, roomCode | Leave room |
| `location_update` | lat, lng, accuracy?, speed? | Send location |
| `room_chat` | roomCode, content | Send message to room |
| `set_destination` | roomCode, lat, lng, name? | Set destination |
| `chat` | to, content | Direct message |

| Type (Outbound) | Payload | Purpose |
|-----------------|---------|---------|
| `room_info` | RoomInfo | Sent on room join |
| `room_location_update` | userId, lat, lng, accuracy?, speed?, timestamp | Location broadcast |
| `user_joined_room` | userId, user | New member joined |
| `user_left_room` | userId | Member left |
| `room_chat` | senderId, content, timestamp | Chat message broadcast |
| `destination_updated` | lat, lng, name? | Destination changed |
| `friend_location` | userId, lat, lng, accuracy? | Friend location update |
| `friend_status` | userId, isOnline, isSharing? | Status update |

### 2.4 Utility Functions

| Function | Signature | Description |
|----------|-----------|-------------|
| `calculateDistance` | `(lat1, lng1, lat2, lng2) → km` | Haversine formula |
| `calculateETA` | `(distanceKm, speedMps) → seconds` | ETA calculation |
| `formatETA` | `(seconds) → string` | Korean formatted ("N분", "N시간 N분") |

---

## 3. packages/db

PostgreSQL database via Drizzle ORM.

### 3.1 Tables

#### users
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| email | TEXT | UNIQUE, nullable |
| name | TEXT | nullable |
| avatar | TEXT | nullable |
| characterType | TEXT | DEFAULT 'boy_casual' |
| characterColor | TEXT | DEFAULT '#FF6B6B' |
| locationSharingEnabled | BOOLEAN | DEFAULT true |
| isAnonymous | BOOLEAN | DEFAULT false |
| createdAt | TIMESTAMP | DEFAULT NOW |
| updatedAt | TIMESTAMP | DEFAULT NOW, auto-update |

#### locations
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| userId | TEXT | FK → users.id CASCADE |
| latitude | FLOAT8 | NOT NULL |
| longitude | FLOAT8 | NOT NULL |
| accuracy | FLOAT8 | nullable |
| isActive | BOOLEAN | DEFAULT true |
| timestamp | TIMESTAMP | DEFAULT NOW |

#### friendships
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| requesterId | TEXT | FK → users.id CASCADE |
| addresseeId | TEXT | FK → users.id CASCADE |
| status | ENUM | PENDING / ACCEPTED / BLOCKED |
| createdAt / updatedAt | TIMESTAMP | |
| **UNIQUE** | | (requesterId, addresseeId) |

#### rooms
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| code | TEXT | UNIQUE |
| name | TEXT | nullable |
| destinationLat | FLOAT8 | nullable |
| destinationLng | FLOAT8 | nullable |
| destinationName | TEXT | nullable |
| expiresAt | TIMESTAMP | nullable |
| createdAt / updatedAt | TIMESTAMP | |

#### room_members
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| roomId | TEXT | FK → rooms.id CASCADE |
| userId | TEXT | FK → users.id CASCADE |
| joinedAt | TIMESTAMP | DEFAULT NOW |
| leftAt | TIMESTAMP | nullable |
| **UNIQUE** | | (roomId, userId) |

#### room_messages
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| roomId | TEXT | FK → rooms.id CASCADE |
| senderId | TEXT | NOT NULL |
| content | TEXT | NOT NULL |
| type | ENUM | TEXT / LOCATION_SHARE / SYSTEM |
| createdAt | TIMESTAMP | DEFAULT NOW |

#### messages (Direct Messages)
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| content | TEXT | NOT NULL |
| type | ENUM | TEXT / LOCATION_SHARE / SYSTEM |
| senderId | TEXT | FK → users.id CASCADE |
| receiverId | TEXT | FK → users.id CASCADE, nullable |
| groupId | TEXT | FK → groups.id CASCADE, nullable |
| createdAt | TIMESTAMP | DEFAULT NOW |

#### groups (Schema exists, UI not implemented)
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| name | TEXT | NOT NULL |
| description | TEXT | nullable |
| creatorId | TEXT | FK → users.id CASCADE |

#### group_members (Schema exists, UI not implemented)
| Column | Type | Constraints |
|--------|------|-------------|
| id | TEXT | PK, auto-UUID |
| groupId | TEXT | FK → groups.id CASCADE |
| userId | TEXT | FK → users.id CASCADE |
| **UNIQUE** | | (groupId, userId) |

---

## 4. packages/api

Hono REST API server (Bun runtime, deployed to Vercel).

### 4.1 Endpoints

#### Health
| Method | Path | Response |
|--------|------|----------|
| GET | `/api/health` | `{ status: "ok" }` |

#### Users
| Method | Path | Body | Response | Status |
|--------|------|------|----------|--------|
| POST | `/api/users/anonymous` | `{ name?, characterType?, characterColor? }` | `{ user }` | IMPLEMENTED |
| GET | `/api/users/:id` | - | `{ user }` (with last location) | IMPLEMENTED |
| PATCH | `/api/users/:id` | Partial User | `{ user }` | IMPLEMENTED |

#### Rooms
| Method | Path | Body | Response | Status |
|--------|------|------|----------|--------|
| POST | `/api/rooms` | `{ userId, name?, destinationLat?, destinationLng?, destinationName? }` | `{ room }` | IMPLEMENTED |
| GET | `/api/rooms/code/:code` | - | `{ room }` (members + messages) | IMPLEMENTED |
| POST | `/api/rooms/:code/join` | `{ userId }` | `{ room, member, rejoined }` | IMPLEMENTED |
| POST | `/api/rooms/:code/leave` | `{ userId }` | `{ success }` | IMPLEMENTED |
| PATCH | `/api/rooms/:code/destination` | `{ lat, lng, name? }` | `{ room }` | IMPLEMENTED |

#### Room Messages
| Method | Path | Body | Response | Status |
|--------|------|------|----------|--------|
| POST | `/api/rooms/:code/messages` | `{ senderId, content, type? }` | `{ message }` | IMPLEMENTED |
| GET | `/api/rooms/:code/messages` | Query: limit, before | `{ messages }` | IMPLEMENTED |

#### Locations
| Method | Path | Body | Response | Status |
|--------|------|------|----------|--------|
| POST | `/api/locations/:userId` | `{ latitude, longitude, accuracy? }` | `{ location }` | IMPLEMENTED |
| GET | `/api/locations/:userId` | - | `{ location }` | IMPLEMENTED |

#### Friends
| Method | Path | Body | Response | Status |
|--------|------|------|----------|--------|
| POST | `/api/friends/request` | `{ requesterId, addresseeId }` | `{ friendship }` | IMPLEMENTED |
| POST | `/api/friends/accept/:requesterId` | `{ addresseeId }` | `{ friendship }` | IMPLEMENTED |
| POST | `/api/friends/reject/:requesterId` | `{ addresseeId }` | `{ success }` | IMPLEMENTED |
| GET | `/api/friends/pending/:userId` | - | `{ requests }` | IMPLEMENTED |
| GET | `/api/friends/:userId` | - | `{ friends }` | IMPLEMENTED |
| DELETE | `/api/friends/:userId/:friendId` | - | `{ success }` | IMPLEMENTED |

#### Direct Messages
| Method | Path | Body | Response | Status |
|--------|------|------|----------|--------|
| POST | `/api/messages/direct/:receiverId` | `{ senderId, content, type? }` | `{ message }` | IMPLEMENTED |
| GET | `/api/messages/direct/:userId/:friendId` | Query: limit, before | `{ messages }` | IMPLEMENTED |

#### Chats
| Method | Path | Response | Status |
|--------|------|----------|--------|
| GET | `/api/chats/:userId` | `{ chats }` (DM + rooms sorted by last msg) | IMPLEMENTED |

---

## 5. packages/ws-server

Elysia WebSocket server (Bun runtime, deployed to Railway).

### 5.1 REST Endpoints

| Method | Path | Body | Response |
|--------|------|------|----------|
| GET | `/health` | - | `{ status, connections, rooms }` |
| POST | `/location` | `{ userId, roomCode, lat, lng, accuracy?, speed? }` | `{ success }` |

### 5.2 WebSocket Flow

```
Client → join(userId)
Client → join_room(userId, roomCode)
Server → room_info(RoomInfo)               // to joiner
Server → user_joined_room(userId, user)     // to others

Client → location_update(lat, lng, ...)
Server → room_location_update(...)          // to others in room

Client → room_chat(roomCode, content)
Server → room_chat(senderId, content, ts)   // to all in room (saved to DB)

Client → set_destination(roomCode, lat, lng, name?)
Server → destination_updated(lat, lng, name?) // to all in room

Client → leave_room(userId, roomCode)
Server → user_left_room(userId)             // to others
```

### 5.3 In-Memory State

- `clients: Map<wsId, ClientInfo>` — WebSocket connections
- `rooms: Map<roomCode, Set<wsId>>` — Room membership

---

## 6. apps/mobile

Expo SDK 55 + React Native 0.83 mobile app.

### 6.1 Screens

| Route | Screen | testID | Status |
|-------|--------|--------|--------|
| `/` | Splash/Redirect | - | IMPLEMENTED |
| `/onboarding` | Character + Name selection | `onboarding_screen` | IMPLEMENTED |
| `/(tabs)/map` | Map + Room + Chat | `map_screen` | IMPLEMENTED |
| `/(tabs)/friends` | Friends list | `friends_screen` | IMPLEMENTED |
| `/(tabs)/chats` | Chat list (DM + rooms) | `chats_screen` | IMPLEMENTED |
| `/(tabs)/profile` | Profile + Settings | `profile_screen` | IMPLEMENTED |
| `/chat/[id]` | Direct message chat | - | IMPLEMENTED |
| `/room/[code]` | Room join (via deeplink) | `room_join_screen` | IMPLEMENTED |

### 6.2 Components

| Component | Location | Purpose | Status |
|-----------|----------|---------|--------|
| CharacterMarker | components/ | Animated map marker with name tag | IMPLEMENTED |
| CharacterSprite | components/ | Skia-based sprite animation (idle/walking, 8 directions) | IMPLEMENTED |
| ChatBubble | components/ | Message bubble (mine/theirs) with timestamp | IMPLEMENTED |
| SmartMap | components/ | Auto-selects Naver (Korea) or Google Maps | IMPLEMENTED |
| UI (gluestack) | components/ui/ | Button, Input, Box, VStack, HStack, Text, Heading, Spinner, Pressable | IMPLEMENTED |

### 6.3 Contexts (State Management)

#### UserContext
| State | Type | Description |
|-------|------|-------------|
| user | User \| null | Current user |
| isLoading | boolean | Loading state |
| currentRoom | RoomInfo \| null | Active room |

| Method | Description |
|--------|-------------|
| onboard(name, type, color) | Create user + navigate to map |
| logout() | Clear storage + reset state |
| updateCharacter(type, color) | Update character appearance |
| toggleLocationSharing(enabled) | Toggle location sharing |
| updateProfile(name) | Update display name |
| setCurrentRoom(room) | Set/clear active room |
| verifyUser() | Check if user still exists on server |

#### WebSocketContext
| State | Type | Description |
|-------|------|-------------|
| isConnected | boolean | WS connection status |
| onlineStatus | Map | Friend online status |
| friendLocations | Map | Friend locations |
| roomInfo | RoomInfo \| null | Current room state |
| roomMessages | RoomChatMessage[] | Room chat messages |

| Method | Description |
|--------|-------------|
| connect(userId) | Open WS + join |
| disconnect() | Close WS |
| joinRoom(userId, roomCode) | Join room via WS |
| leaveRoom(userId, roomCode) | Leave room via WS |
| sendLocation(lat, lng, accuracy?, speed?) | Broadcast location |
| sendRoomChat(roomCode, content) | Send room message |
| sendChat(to, content) | Send direct message |

#### LocationContext
| State | Type | Description |
|-------|------|-------------|
| currentLocation | LocationObject \| null | GPS position |
| isTracking | boolean | Background tracking active |

| Method | Description |
|--------|-------------|
| requestPermission() | Request foreground + background perms |
| startRoomTracking(roomCode) | Start foreground (5s/5m) + background (10s/5m) tracking |
| stopRoomTracking() | Stop all tracking |

### 6.4 Design System

**Theme:** Dark (Zinc palette)
- Background: #09090B (base), #111113 (surface), #18181B (elevated)
- Text: #FAFAFA (primary), #A1A1AA (secondary), #71717A (muted)
- Accent: #3B82F6 (blue), #60A5FA (light), #2563EB (dark)
- Status: #22C55E (success), #F59E0B (warning), #EF4444 (error)

---

## 7. Known Gaps / Not Implemented

| Feature | DB Schema | API | WS | Mobile UI |
|---------|-----------|-----|----|-----------|
| Group Chat | O (groups, group_members) | X | X | X |
| Push Notifications | X | X | X | X |
| User Auth (OAuth) | O (authProvider, authId) | X | X | X |
| Room Expiration | O (expiresAt) | X | X | X |
| Message Read Receipts | X | X | X | X |
| User Avatar Upload | O (avatar field) | X | X | X |
| Friend Location on Map | O (shared types) | O | O | Partial (room only) |
| Offline Message Queue | X | X | X | X |
| Room History / Rejoin | Partial | O (rejoin) | X | X |

---

## 8. E2E Test Flows (Maestro)

| Flow | File | Tests |
|------|------|-------|
| Onboarding | `e2e/onboarding.yaml` | Name input → Character select → Start → Navigate to map |
| Tab Navigation | `e2e/tab-navigation.yaml` | Map → Friends → Chats → Profile → Map |
| Room Join | `e2e/room-join.yaml` | Deep link → Name input → Join → Map with room |

### Running E2E Tests

```bash
# Install Maestro
curl -Ls "https://get.maestro.mobile.dev" | bash

# Run all flows
bun run test:e2e

# Run specific flow in continuous mode
maestro test --continuous e2e/onboarding.yaml
```

---

## 9. TDD Workflow

이 PRD를 기반으로 기능을 구현할 때 다음 플로우를 따릅니다:

### Step 1: PRD 업데이트
1. `docs/PRD.md`에 새 기능 요구사항을 추가합니다
2. Status를 `PLANNED`으로 표시합니다

### Step 2: E2E 테스트 작성 (Red)
1. `e2e/` 디렉토리에 새 Maestro flow를 작성합니다
2. 필요한 `testID`를 정의합니다
3. 테스트는 실패합니다 (기능 미구현)

### Step 3: 구현 (Green)
1. 필요한 패키지부터 구현합니다: shared → db → api/ws-server → mobile
2. testID를 컴포넌트에 추가합니다
3. E2E 테스트가 통과할 때까지 구현합니다

### Step 4: PRD 업데이트
1. Status를 `IMPLEMENTED`로 변경합니다
2. 변경된 API/WS 스펙을 문서에 반영합니다

### Example: 새 기능 추가

```bash
# 1. PRD에 기능 추가
# docs/PRD.md 수정

# 2. E2E 테스트 작성
# e2e/new-feature.yaml 생성

# 3. 구현
# shared → db → api → ws-server → mobile 순서로

# 4. 테스트 실행
bun run test:e2e

# 5. PRD 상태 업데이트
```
