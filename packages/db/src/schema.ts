import {
  pgTable,
  text,
  boolean,
  doublePrecision,
  timestamp,
  uniqueIndex,
  index,
  pgEnum,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// ==================== Enums ====================

export const friendshipStatusEnum = pgEnum('FriendshipStatus', [
  'PENDING',
  'ACCEPTED',
  'BLOCKED',
])

export const messageTypeEnum = pgEnum('MessageType', [
  'TEXT',
  'LOCATION_SHARE',
  'SYSTEM',
])

// ==================== Tables ====================

export const users = pgTable('users', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text('email').unique(),
  name: text('name'),
  avatar: text('avatar'),
  characterType: text('characterType').notNull().default('boy_casual'),
  characterColor: text('characterColor').notNull().default('#FF6B6B'),
  locationSharingEnabled: boolean('locationSharingEnabled').notNull().default(true),
  isAnonymous: boolean('isAnonymous').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow().$onUpdateFn(() => new Date()),
})

export const locations = pgTable(
  'locations',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    latitude: doublePrecision('latitude').notNull(),
    longitude: doublePrecision('longitude').notNull(),
    accuracy: doublePrecision('accuracy'),
    isActive: boolean('isActive').notNull().default(true),
    timestamp: timestamp('timestamp').notNull().defaultNow(),
  },
  (table) => [
    index('locations_userId_idx').on(table.userId),
    index('locations_timestamp_idx').on(table.timestamp),
  ],
)

export const friendships = pgTable(
  'friendships',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    requesterId: text('requesterId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    addresseeId: text('addresseeId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    status: friendshipStatusEnum('status').notNull().default('PENDING'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow().$onUpdateFn(() => new Date()),
  },
  (table) => [
    uniqueIndex('friendships_requesterId_addresseeId_key').on(table.requesterId, table.addresseeId),
    index('friendships_requesterId_idx').on(table.requesterId),
    index('friendships_addresseeId_idx').on(table.addresseeId),
  ],
)

export const groups = pgTable(
  'groups',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    name: text('name').notNull(),
    description: text('description'),
    creatorId: text('creatorId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow().$onUpdateFn(() => new Date()),
  },
  (table) => [
    index('groups_creatorId_idx').on(table.creatorId),
  ],
)

export const groupMembers = pgTable(
  'group_members',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    groupId: text('groupId')
      .notNull()
      .references(() => groups.id, { onDelete: 'cascade' }),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    joinedAt: timestamp('joinedAt').notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('group_members_groupId_userId_key').on(table.groupId, table.userId),
    index('group_members_groupId_idx').on(table.groupId),
    index('group_members_userId_idx').on(table.userId),
  ],
)

export const messages = pgTable(
  'messages',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    content: text('content').notNull(),
    type: messageTypeEnum('type').notNull().default('TEXT'),
    senderId: text('senderId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    groupId: text('groupId').references(() => groups.id, { onDelete: 'cascade' }),
    receiverId: text('receiverId').references(() => users.id, { onDelete: 'cascade' }),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
  },
  (table) => [
    index('messages_senderId_idx').on(table.senderId),
    index('messages_groupId_idx').on(table.groupId),
    index('messages_receiverId_idx').on(table.receiverId),
    index('messages_createdAt_idx').on(table.createdAt),
  ],
)

export const rooms = pgTable(
  'rooms',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    code: text('code').notNull().unique(),
    name: text('name'),
    destinationLat: doublePrecision('destinationLat'),
    destinationLng: doublePrecision('destinationLng'),
    destinationName: text('destinationName'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow().$onUpdateFn(() => new Date()),
    expiresAt: timestamp('expiresAt'),
  },
  (table) => [
    index('rooms_code_idx').on(table.code),
    index('rooms_createdAt_idx').on(table.createdAt),
  ],
)

export const roomMembers = pgTable(
  'room_members',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    roomId: text('roomId')
      .notNull()
      .references(() => rooms.id, { onDelete: 'cascade' }),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    joinedAt: timestamp('joinedAt').notNull().defaultNow(),
    leftAt: timestamp('leftAt'),
  },
  (table) => [
    uniqueIndex('room_members_roomId_userId_key').on(table.roomId, table.userId),
    index('room_members_roomId_idx').on(table.roomId),
    index('room_members_userId_idx').on(table.userId),
  ],
)

export const roomMessages = pgTable(
  'room_messages',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    roomId: text('roomId')
      .notNull()
      .references(() => rooms.id, { onDelete: 'cascade' }),
    senderId: text('senderId').notNull(),
    content: text('content').notNull(),
    type: messageTypeEnum('type').notNull().default('TEXT'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
  },
  (table) => [
    index('room_messages_roomId_idx').on(table.roomId),
    index('room_messages_createdAt_idx').on(table.createdAt),
  ],
)

// ==================== Relations ====================

export const usersRelations = relations(users, ({ many }) => ({
  locations: many(locations),
  sentFriendships: many(friendships, { relationName: 'requester' }),
  receivedFriendships: many(friendships, { relationName: 'addressee' }),
  groupMemberships: many(groupMembers),
  createdGroups: many(groups),
  sentMessages: many(messages, { relationName: 'sender' }),
  receivedMessages: many(messages, { relationName: 'receiver' }),
  roomMemberships: many(roomMembers),
}))

export const locationsRelations = relations(locations, ({ one }) => ({
  user: one(users, { fields: [locations.userId], references: [users.id] }),
}))

export const friendshipsRelations = relations(friendships, ({ one }) => ({
  requester: one(users, {
    fields: [friendships.requesterId],
    references: [users.id],
    relationName: 'requester',
  }),
  addressee: one(users, {
    fields: [friendships.addresseeId],
    references: [users.id],
    relationName: 'addressee',
  }),
}))

export const groupsRelations = relations(groups, ({ one, many }) => ({
  creator: one(users, { fields: [groups.creatorId], references: [users.id] }),
  members: many(groupMembers),
  messages: many(messages),
}))

export const groupMembersRelations = relations(groupMembers, ({ one }) => ({
  group: one(groups, { fields: [groupMembers.groupId], references: [groups.id] }),
  user: one(users, { fields: [groupMembers.userId], references: [users.id] }),
}))

export const messagesRelations = relations(messages, ({ one }) => ({
  sender: one(users, {
    fields: [messages.senderId],
    references: [users.id],
    relationName: 'sender',
  }),
  receiver: one(users, {
    fields: [messages.receiverId],
    references: [users.id],
    relationName: 'receiver',
  }),
  group: one(groups, { fields: [messages.groupId], references: [groups.id] }),
}))

export const roomsRelations = relations(rooms, ({ many }) => ({
  members: many(roomMembers),
  messages: many(roomMessages),
}))

export const roomMembersRelations = relations(roomMembers, ({ one }) => ({
  room: one(rooms, { fields: [roomMembers.roomId], references: [rooms.id] }),
  user: one(users, { fields: [roomMembers.userId], references: [users.id] }),
}))

export const roomMessagesRelations = relations(roomMessages, ({ one }) => ({
  room: one(rooms, { fields: [roomMessages.roomId], references: [rooms.id] }),
}))

// ==================== Inferred Types ====================

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type Location = typeof locations.$inferSelect
export type NewLocation = typeof locations.$inferInsert
export type Friendship = typeof friendships.$inferSelect
export type NewFriendship = typeof friendships.$inferInsert
export type Group = typeof groups.$inferSelect
export type NewGroup = typeof groups.$inferInsert
export type GroupMember = typeof groupMembers.$inferSelect
export type NewGroupMember = typeof groupMembers.$inferInsert
export type Message = typeof messages.$inferSelect
export type NewMessage = typeof messages.$inferInsert
export type Room = typeof rooms.$inferSelect
export type NewRoom = typeof rooms.$inferInsert
export type RoomMember = typeof roomMembers.$inferSelect
export type NewRoomMember = typeof roomMembers.$inferInsert
export type RoomMessage = typeof roomMessages.$inferSelect
export type NewRoomMessage = typeof roomMessages.$inferInsert
export type FriendshipStatus = 'PENDING' | 'ACCEPTED' | 'BLOCKED'
export type MessageType = 'TEXT' | 'LOCATION_SHARE' | 'SYSTEM'
