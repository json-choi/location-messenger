import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { useUser } from '../../contexts'
import { useWebSocket } from '../../contexts/WebSocketContext'

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001'

export default function RoomScreen() {
  const { code } = useLocalSearchParams<{ code: string }>()
  const router = useRouter()
  const { user, isLoading: userLoading, isOnboarded, onboard, setCurrentRoom } = useUser()
  const { connect, joinRoom, isConnected, roomInfo } = useWebSocket()
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [needsOnboarding, setNeedsOnboarding] = useState(false)

  useEffect(() => {
    if (!code) {
      setError('잘못된 링크입니다.')
      setIsLoading(false)
      return
    }

    if (userLoading) return

    if (!isOnboarded) {
      setNeedsOnboarding(true)
      setIsLoading(false)
      return
    }

    joinExistingRoom()
  }, [code, userLoading, isOnboarded])

  useEffect(() => {
    if (user && isConnected) {
      joinRoom(user.id, code!.toUpperCase())
    }
  }, [user, isConnected])

  useEffect(() => {
    if (roomInfo) {
      setCurrentRoom(roomInfo)
      router.replace('/(tabs)/map')
    }
  }, [roomInfo])

  const joinExistingRoom = async () => {
    if (!user) return
    
    setIsLoading(true)
    try {
      const response = await fetch(`${API_URL}/api/rooms/code/${code}`)
      if (!response.ok) {
        setError('존재하지 않는 방입니다.')
        return
      }

      const joinResponse = await fetch(`${API_URL}/api/rooms/${code}/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      })

      if (!joinResponse.ok) {
        setError('방 참여에 실패했습니다.')
        return
      }

      connect(user.id)
    } catch (err) {
      console.error('Failed to join room:', err)
      setError('연결에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleOnboard = async () => {
    if (!name.trim()) return
    await onboard(name.trim(), 'cat', '#FF6B6B')
    setNeedsOnboarding(false)
  }

  if (isLoading || userLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>방에 연결 중...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
          <Text style={styles.buttonText}>홈으로 이동</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (needsOnboarding) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>방에 초대되었어요! 🎉</Text>
        <Text style={styles.subtitle}>이름을 입력하고 참여하세요</Text>
        
        <View style={styles.codeContainer}>
          <Text style={styles.codeLabel}>초대 코드</Text>
          <Text style={styles.codeText}>{code}</Text>
        </View>
        
        <TextInput
          style={styles.nameInput}
          value={name}
          onChangeText={setName}
          placeholder="이름을 입력하세요"
          maxLength={20}
          autoFocus
        />
        
        <TouchableOpacity 
          style={[styles.button, !name.trim() && styles.buttonDisabled]}
          onPress={handleOnboard}
          disabled={!name.trim()}
        >
          <Text style={styles.buttonText}>참여하기</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.loadingText}>입장 중...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 24,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 18,
    color: '#FF3B30',
    textAlign: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  codeContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  codeLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  codeText: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 4,
    color: '#007AFF',
  },
  nameInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#CCC',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
})