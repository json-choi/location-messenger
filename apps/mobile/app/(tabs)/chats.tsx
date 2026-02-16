import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useUser, useWebSocket } from '../../contexts'
import { CHARACTER_EMOJIS } from '@location-messenger/shared'

interface MockChatRoom {
  id: string
  type: 'direct' | 'group'
  name: string
  avatar?: string
  characterType: 'cat' | 'dog' | 'rabbit' | 'bear' | 'fox' | 'panda'
  characterColor: string
  lastMessage?: {
    content: string
    timestamp: number
    senderName?: string
  }
  unreadCount: number
  participants: string[]
}

function formatTime(timestamp: number): string {
  const now = new Date()
  const date = new Date(timestamp)
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const period = hours >= 12 ? '오후' : '오전'
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
    return `${period} ${displayHours}:${minutes.toString().padStart(2, '0')}`
  } else if (diffDays === 1) {
    return '어제'
  } else if (diffDays < 7) {
    const days = ['일', '월', '화', '수', '목', '금', '토']
    return days[date.getDay()] + '요일'
  } else {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`
  }
}

export default function ChatsScreen() {
  const { user } = useUser()
  const { isConnected, onlineStatus } = useWebSocket()
  const router = useRouter()
  const [chatRooms, setChatRooms] = useState<MockChatRoom[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadChatRooms()
  }, [])

  const loadChatRooms = async () => {
    setIsLoading(true)
    // Mock data - in real app, fetch from API
    setChatRooms([
      {
        id: '1',
        type: 'direct',
        name: '민수',
        characterType: 'cat',
        characterColor: '#FF6B6B',
        lastMessage: {
          content: '내일 뭐해?',
          timestamp: Date.now() - 1000 * 60 * 30,
        },
        unreadCount: 2,
        participants: ['1', user?.id || ''],
      },
      {
        id: '2',
        type: 'direct',
        name: '지영',
        characterType: 'dog',
        characterColor: '#4ECDC4',
        lastMessage: {
          content: 'ㅋㅋㅋ 진짜?',
          timestamp: Date.now() - 1000 * 60 * 60 * 2,
        },
        unreadCount: 0,
        participants: ['2', user?.id || ''],
      },
      {
        id: '3',
        type: 'group',
        name: '스터디 그룹',
        characterType: 'bear',
        characterColor: '#96CEB4',
        lastMessage: {
          content: '현우: 다음 주 회의는 화요일이에요',
          timestamp: Date.now() - 1000 * 60 * 60 * 24,
          senderName: '현우',
        },
        unreadCount: 5,
        participants: ['1', '2', '3', user?.id || ''],
      },
      {
        id: '4',
        type: 'direct',
        name: '현우',
        characterType: 'rabbit',
        characterColor: '#45B7D1',
        lastMessage: {
          content: '네 알겠습니다!',
          timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
        },
        unreadCount: 0,
        participants: ['3', user?.id || ''],
      },
      {
        id: '5',
        type: 'group',
        name: '강아지 산책 모임',
        characterType: 'dog',
        characterColor: '#FFEAA7',
        lastMessage: {
          content: '수빈: 오늘 날씨 좋네요!',
          timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3,
          senderName: '수빈',
        },
        unreadCount: 0,
        participants: ['4', '5', user?.id || ''],
      },
    ])
    setIsLoading(false)
  }

  const handleChatPress = (room: MockChatRoom) => {
    if (room.type === 'direct') {
      // For direct messages, navigate to chat/[id] with the friend's user ID
      const friendId = room.participants.find(p => p !== user?.id) || room.id
      router.push(`/chat/${friendId}`)
    } else {
      // For group chats, navigate with groupId
      router.push(`/chat/${room.id}?type=group&name=${encodeURIComponent(room.name)}`)
    }
  }

  const renderChatRoom = ({ item }: { item: MockChatRoom }) => {
    const emoji = CHARACTER_EMOJIS[item.characterType]
    const isOnline = item.type === 'direct' && onlineStatus[item.participants[0]]

    return (
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => handleChatPress(item)}
        activeOpacity={0.7}
      >
        <View style={styles.avatarContainer}>
          <View style={[styles.avatar, { borderColor: item.characterColor }]}>
            <Text style={styles.emoji}>{emoji}</Text>
          </View>
          {item.type === 'direct' && (
            <View style={[styles.statusDot, isOnline ? styles.online : styles.offline]} />
          )}
          {item.type === 'group' && (
            <View style={styles.groupBadge}>
              <Ionicons name="people" size={10} color="#fff" />
            </View>
          )}
        </View>
        <View style={styles.chatInfo}>
          <View style={styles.chatHeader}>
            <Text style={styles.chatName} numberOfLines={1}>
              {item.name}
            </Text>
            {item.lastMessage && (
              <Text style={styles.timeText}>
                {formatTime(item.lastMessage.timestamp)}
              </Text>
            )}
          </View>
          <View style={styles.messageRow}>
            <Text style={styles.lastMessage} numberOfLines={1}>
              {item.lastMessage?.content || '새로운 대화를 시작하세요'}
            </Text>
            {item.unreadCount > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>
                  {item.unreadCount > 99 ? '99+' : item.unreadCount}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>채팅</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="create-outline" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.connectionStatus}>
        <View style={[styles.connectionDot, isConnected ? styles.connected : styles.disconnected]} />
        <Text style={styles.connectionText}>
          {isConnected ? '연결됨' : '연결 중...'}
        </Text>
      </View>

      {chatRooms.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="chatbubbles-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>채팅이 없습니다</Text>
          <Text style={styles.emptySubtext}>친구와 대화를 시작해보세요!</Text>
        </View>
      ) : (
        <FlatList
          data={chatRooms}
          renderItem={renderChatRoom}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    padding: 8,
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },
  connectionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  connected: {
    backgroundColor: '#4CAF50',
  },
  disconnected: {
    backgroundColor: '#FF9500',
  },
  connectionText: {
    fontSize: 12,
    color: '#666',
  },
  list: {
    paddingVertical: 8,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emoji: {
    fontSize: 28,
  },
  statusDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#fff',
  },
  online: {
    backgroundColor: '#4CAF50',
  },
  offline: {
    backgroundColor: '#ccc',
  },
  groupBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginRight: 8,
  },
  unreadBadge: {
    backgroundColor: '#FF3B30',
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginTop: 16,
    fontWeight: '500',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 8,
  },
})
