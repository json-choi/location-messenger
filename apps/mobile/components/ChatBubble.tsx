import { CharacterType, CHARACTER_EMOJIS } from '@location-messenger/shared'
import React from 'react'
import { Text, View } from 'react-native'

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
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const period = hours >= 12 ? '오후' : '오전'
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
  return `${period} ${displayHours}:${minutes.toString().padStart(2, '0')}`
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
  const emoji = senderCharacter ? CHARACTER_EMOJIS[senderCharacter] : null

  return (
    <View className={`my-1 mx-3 max-w-[80%] ${isMine ? 'self-end' : 'self-start'}`}>
      {!isMine && showSender && senderName && (
        <View className="flex-row items-center mb-1 ml-1">
          {emoji && <Text className="text-base mr-1">{emoji}</Text>}
          <Text
            className="text-xs font-semibold text-typography-600"
            style={senderColor ? { color: senderColor } : undefined}
          >
            {senderName}
          </Text>
        </View>
      )}
      <View
        className={`px-4 py-3 rounded-2xl ${
          isMine
            ? 'bg-secondary-500 rounded-br-sm'
            : 'bg-background-100 rounded-bl-sm'
        }`}
      >
        <Text
          className={`text-sm leading-snug ${
            isMine ? 'text-typography-0' : 'text-typography-900'
          }`}
        >
          {content}
        </Text>
      </View>
      {timestamp && (
        <Text
          className={`text-[10px] mt-1 text-typography-400 ${isMine ? 'text-right' : 'text-left ml-1'}`}
        >
          {formatTime(timestamp)}
        </Text>
      )}
    </View>
  )
}
