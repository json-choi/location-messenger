export type WSMessage =
  | { type: 'join'; userId: string }
  | { type: 'location_update'; userId: string; lat: number; lng: number; accuracy?: number }
  | { type: 'chat'; from: string; to: string; content: string; timestamp: number }
  | { type: 'group_chat'; from: string; groupId: string; content: string; timestamp: number }
  | { type: 'friend_location'; userId: string; lat: number; lng: number; accuracy?: number }
  | { type: 'user_joined'; userId: string }
  | { type: 'user_left'; userId: string }
  | { type: 'friend_status'; userId: string; online: boolean; locationSharingEnabled: boolean }

export const CHARACTER_TYPES = ['cat', 'dog', 'rabbit', 'bear', 'fox', 'panda'] as const
export type CharacterType = typeof CHARACTER_TYPES[number]

export const CHARACTER_EMOJIS: Record<CharacterType, string> = {
  cat: '🐱',
  dog: '🐕',
  rabbit: '🐰',
  bear: '🐻',
  fox: '🦊',
  panda: '🐼'
}

export const CHARACTER_NAMES: Record<CharacterType, string> = {
  cat: '고양이',
  dog: '강아지',
  rabbit: '토끼',
  bear: '곰돌이',
  fox: '여우',
  panda: '판다'
}

export const CHARACTER_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'
] as const

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  characterType: CharacterType
  characterColor: string
  locationSharingEnabled: boolean
  online?: boolean
  lastLocation?: UserLocation
}

export interface UserLocation {
  lat: number
  lng: number
  accuracy?: number
  timestamp: number
}

export interface Friend {
  id: string
  user: User
  status: FriendshipStatus
  createdAt: string
}

export type FriendshipStatus = 'PENDING' | 'ACCEPTED' | 'BLOCKED'

export interface FriendWithLocation extends Friend {
  isOnline: boolean
  location?: UserLocation
}

export interface Location {
  lat: number
  lng: number
  accuracy?: number
  timestamp: number
}

export interface Message {
  id: string
  content: string
  type: MessageType
  senderId: string
  receiverId?: string
  groupId?: string
  createdAt: string
  sender?: User
}

export type MessageType = 'TEXT' | 'LOCATION_SHARE' | 'SYSTEM'

export interface ChatRoom {
  id: string
  type: 'direct' | 'group'
  name?: string
  participants: User[]
  lastMessage?: Message
  unreadCount: number
}

export interface CreateFriendRequestInput {
  requesterId: string
  addresseeId: string
}

export interface UpdateUserInput {
  name?: string
  characterType?: CharacterType
  characterColor?: string
  locationSharingEnabled?: boolean
}

export interface SendMessageInput {
  content: string
  type: MessageType
  senderId: string
  receiverId?: string
  groupId?: string
}

export interface LocationSubscription {
  userId: string
  isSharing: boolean
  lastUpdate?: number
}

export interface MapMarker {
  id: string
  userId: string
  lat: number
  lng: number
  characterType: CharacterType
  characterColor: string
  name?: string
  isOnline: boolean
  lastSeen?: number
}
