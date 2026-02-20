import { CharacterType } from '@yogiya/shared'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CharacterSprite from './CharacterSprite'

interface ChatBubbleProps {
  content: string
  isMine: boolean
  timestamp?: number
  senderName?: string
  senderCharacter?: CharacterType
  senderColor?: string
  showSender?: boolean
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  const h = date.getHours()
  const m = date.getMinutes()
  const period = h >= 12 ? '오후' : '오전'
  const dh = h > 12 ? h - 12 : h === 0 ? 12 : h
  return `${period} ${dh}:${m.toString().padStart(2, '0')}`
}

export default function ChatBubble({
  content,
  isMine,
  timestamp,
  senderName,
  senderCharacter,
  senderColor,
  showSender = false,
}: ChatBubbleProps) {
  return (
    <View style={[s.wrap, isMine ? s.wrapMine : s.wrapTheirs]}>
      {!isMine && showSender && senderName && (
        <View style={s.senderRow}>
          {senderCharacter && (
            <View style={s.senderAvatar}>
              <CharacterSprite type={senderCharacter} size={16} />
            </View>
          )}
          <Text style={[s.senderName, senderColor ? { color: senderColor } : undefined]}>
            {senderName}
          </Text>
        </View>
      )}
      <View style={isMine ? s.bubbleMine : s.bubbleTheirs}>
        <Text style={isMine ? s.textMine : s.textTheirs}>{content}</Text>
      </View>
      {timestamp && (
        <Text style={[s.time, isMine ? s.timeMine : s.timeTheirs]}>
          {formatTime(timestamp)}
        </Text>
      )}
    </View>
  )
}

const s = StyleSheet.create({
  wrap: { marginVertical: 2, marginHorizontal: 16, maxWidth: '80%' },
  wrapMine: { alignSelf: 'flex-end' },
  wrapTheirs: { alignSelf: 'flex-start' },
  senderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 3, marginLeft: 2 },
  senderAvatar: { width: 16, height: 16, borderRadius: 8, overflow: 'hidden', backgroundColor: '#18181B', marginRight: 4 },
  senderName: { fontSize: 11, fontWeight: '600', color: '#71717A' },
  bubbleMine: {
    backgroundColor: '#2563EB',
    borderRadius: 18,
    borderBottomRightRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  bubbleTheirs: {
    backgroundColor: '#18181B',
    borderRadius: 18,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: '#27272A',
  },
  textMine: { fontSize: 14, lineHeight: 20, color: '#FFFFFF' },
  textTheirs: { fontSize: 14, lineHeight: 20, color: '#F4F4F5' },
  time: { fontSize: 10, marginTop: 3, color: '#3F3F46' },
  timeMine: { textAlign: 'right' },
  timeTheirs: { textAlign: 'left', marginLeft: 2 },
})
