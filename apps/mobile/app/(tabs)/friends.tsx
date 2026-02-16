import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useUser, useWebSocket } from '../../contexts'
import { FriendWithLocation, CHARACTER_EMOJIS, CHARACTER_NAMES } from '@location-messenger/shared'

interface MockFriend {
  id: string
  name: string
  characterType: 'cat' | 'dog' | 'rabbit' | 'bear' | 'fox' | 'panda'
  characterColor: string
  isOnline: boolean
  locationSharingEnabled: boolean
  lastLocation?: {
    lat: number
    lng: number
    timestamp: number
  }
}

export default function FriendsScreen() {
  const { user } = useUser()
  const { onlineStatus, friendLocations, isConnected } = useWebSocket()
  const [friends, setFriends] = useState<MockFriend[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadFriends()
  }, [])

  const loadFriends = async () => {
    setIsLoading(true)
    setFriends([
      { id: '1', name: '민수', characterType: 'cat', characterColor: '#FF6B6B', isOnline: true, locationSharingEnabled: true },
      { id: '2', name: '지영', characterType: 'dog', characterColor: '#4ECDC4', isOnline: true, locationSharingEnabled: true },
      { id: '3', name: '현우', characterType: 'rabbit', characterColor: '#45B7D1', isOnline: false, locationSharingEnabled: false },
      { id: '4', name: '수빈', characterType: 'bear', characterColor: '#96CEB4', isOnline: true, locationSharingEnabled: true },
      { id: '5', name: '준호', characterType: 'fox', characterColor: '#FFEAA7', isOnline: false, locationSharingEnabled: true },
    ])
    setIsLoading(false)
  }

  const toggleLocationSharing = (friendId: string, enabled: boolean) => {
    setFriends((prev) =>
      prev.map((f) => (f.id === friendId ? { ...f, locationSharingEnabled: enabled } : f))
    )
  }

  const renderFriend = ({ item }: { item: MockFriend }) => {
    const emoji = CHARACTER_EMOJIS[item.characterType]
    const characterName = CHARACTER_NAMES[item.characterType]

    return (
      <TouchableOpacity style={styles.friendItem}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatar, { borderColor: item.characterColor }]}>
            <Text style={styles.emoji}>{emoji}</Text>
          </View>
          <View style={[styles.statusDot, item.isOnline ? styles.online : styles.offline]} />
        </View>
        <View style={styles.friendInfo}>
          <Text style={styles.friendName}>{item.name}</Text>
          <Text style={styles.friendCharacter}>{characterName}</Text>
        </View>
        <View style={styles.actions}>
          <Switch
            value={item.locationSharingEnabled}
            onValueChange={(value) => toggleLocationSharing(item.id, value)}
            trackColor={{ false: '#ccc', true: '#4CAF50' }}
            thumbColor={item.locationSharingEnabled ? '#fff' : '#f4f3f4'}
          />
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
        <Text style={styles.title}>친구</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="person-add" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.connectionStatus}>
        <View style={[styles.connectionDot, isConnected ? styles.connected : styles.disconnected]} />
        <Text style={styles.connectionText}>
          {isConnected ? '연결됨' : '연결 중...'}
        </Text>
      </View>
      {friends.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="people-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>아직 친구가 없습니다</Text>
          <TouchableOpacity style={styles.addFriendButton}>
            <Text style={styles.addFriendText}>친구 추가하기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={friends}
          renderItem={renderFriend}
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
  addButton: {
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
  friendItem: {
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
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emoji: {
    fontSize: 24,
  },
  statusDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
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
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  friendCharacter: {
    fontSize: 13,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 16,
    color: '#999',
    marginTop: 16,
    marginBottom: 24,
  },
  addFriendButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  addFriendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
