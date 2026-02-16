import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CharacterType, CHARACTER_EMOJIS } from '@location-messenger/shared'

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
    <View style={[styles.container, isMine ? styles.containerMine : styles.containerOther]}>
      {!isMine && showSender && senderName && (
        <View style={styles.senderInfo}>
          {emoji && <Text style={styles.senderEmoji}>{emoji}</Text>}
          <Text style={[styles.senderName, senderColor && { color: senderColor }]}>
            {senderName}
          </Text>
        </View>
      )}
      <View
        style={[
          styles.bubble,
          isMine ? styles.bubbleMine : styles.bubbleOther,
        ]}
      >
        <Text style={[styles.message, isMine ? styles.messageMine : styles.messageOther]}>
          {content}
        </Text>
      </View>
      {timestamp && (
        <Text style={[styles.time, isMine ? styles.timeMine : styles.timeOther]}>
          {formatTime(timestamp)}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginHorizontal: 12,
    maxWidth: '80%',
  },
  containerMine: {
    alignSelf: 'flex-end',
  },
  containerOther: {
    alignSelf: 'flex-start',
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 4,
  },
  senderEmoji: {
    fontSize: 14,
    marginRight: 4,
  },
  senderName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },
  bubbleMine: {
    backgroundColor: '#007AFF',
    borderBottomRightRadius: 4,
  },
  bubbleOther: {
    backgroundColor: '#E9E9EB',
    borderBottomLeftRadius: 4,
  },
  message: {
    fontSize: 16,
    lineHeight: 22,
  },
  messageMine: {
    color: '#FFFFFF',
  },
  messageOther: {
    color: '#000000',
  },
  time: {
    fontSize: 11,
    marginTop: 4,
  },
  timeMine: {
    textAlign: 'right',
    color: '#999',
  },
  timeOther: {
    textAlign: 'left',
    color: '#999',
    marginLeft: 4,
  },
})
