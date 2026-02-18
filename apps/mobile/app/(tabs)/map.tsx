import React, { useEffect, useMemo, useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Share,
  Alert,
} from 'react-native'
import { useRouter } from 'expo-router'
import { Region } from 'react-native-maps'
import {
  NaverMapView,
  NaverMapMarkerOverlay,
  NaverMapCircleOverlay,
} from '@mj-studio/react-native-naver-map'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated'
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler'
import {
  MapMarker,
  CHARACTER_EMOJIS,
  calculateDistance,
  calculateETA,
  formatETA,
  RoomInfo,
} from '@location-messenger/shared'
import { useUser, useWebSocket, useLocation } from '../../contexts'
import CharacterMarker from '../../components/CharacterMarker'

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001'

const DRAG_BAR_HEIGHT = 24
const MIN_CHAT_HEIGHT = 80
const MAX_CHAT_HEIGHT = 400

export default function MapScreen() {
  const router = useRouter()
  const { user, currentRoom, setCurrentRoom } = useUser()
  const { friendLocations, roomInfo, roomMessages, isConnected, connect, joinRoom, sendRoomChat } = useWebSocket()
  const { currentLocation, requestPermission } = useLocation()
  
  const [chatInput, setChatInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const chatHeight = useSharedValue(MIN_CHAT_HEIGHT)
  const scrollViewRef = useRef<ScrollView>(null)

  useEffect(() => {
    requestPermission()
  }, [])

  useEffect(() => {
    if (user && !isConnected) {
      connect(user.id)
    }
  }, [user, isConnected])

  useEffect(() => {
    if (roomMessages.length > 0 && scrollViewRef.current) {
      scrollViewRef.current?.scrollToEnd({ animated: true })
    }
  }, [roomMessages])

  const region: Region | undefined = useMemo(() => {
    if (!currentLocation) return undefined
    return {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }
  }, [currentLocation])

  const markers: MapMarker[] = useMemo(() => {
    const roomMembers = roomInfo?.members || []
    return roomMembers.map((member) => {
      const location = friendLocations[member.userId]
      return {
        id: `marker-${member.userId}`,
        userId: member.userId,
        lat: location?.lat || 0,
        lng: location?.lng || 0,
        characterType: member.user?.characterType || 'cat',
        characterColor: member.user?.characterColor || '#FF6B6B',
        name: member.user?.name || '익명',
        isOnline: !!location,
        lastSeen: location?.timestamp,
      }
    }).filter(m => m.lat !== 0)
  }, [roomInfo, friendLocations])

  const myEta = useMemo(() => {
    if (!currentLocation || !roomInfo?.destinationLat || !roomInfo?.destinationLng) return null
    const distance = calculateDistance(
      currentLocation.coords.latitude,
      currentLocation.coords.longitude,
      roomInfo.destinationLat,
      roomInfo.destinationLng
    )
    const speed = currentLocation.coords.speed || 0
    return {
      distance: distance.toFixed(2),
      eta: formatETA(calculateETA(distance, speed)),
    }
  }, [currentLocation, roomInfo])

  const createRoom = async () => {
    if (!user) return
    setIsLoading(true)
    try {
      const response = await fetch(`${API_URL}/api/rooms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      })
      const data = await response.json()
      setCurrentRoom({
        code: data.room.code,
        members: data.room.members.map((m: any) => ({
          userId: m.userId,
          user: m.user,
        })),
      })
      joinRoom(user.id, data.room.code)
    } catch (error) {
      console.error('Failed to create room:', error)
      Alert.alert('오류', '방 생성에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const shareRoomLink = async () => {
    if (!currentRoom) return
    const link = `locationmessenger://room/${currentRoom.code}`
    try {
      await Share.share({
        message: `내 위치를 확인하세요! 👋\n\n${link}`,
        title: '위치 공유 초대',
      })
    } catch (error) {
      console.error('Failed to share:', error)
    }
  }

  const sendMessage = () => {
    if (!chatInput.trim() || !currentRoom) return
    sendRoomChat(currentRoom.code, chatInput.trim())
    setChatInput('')
  }

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      const newHeight = Math.max(MIN_CHAT_HEIGHT, Math.min(MAX_CHAT_HEIGHT, chatHeight.value - e.translationY))
      chatHeight.value = newHeight
    })
    .onEnd(() => {
      if (chatHeight.value > (MAX_CHAT_HEIGHT + MIN_CHAT_HEIGHT) / 2) {
        chatHeight.value = withSpring(MAX_CHAT_HEIGHT)
      } else {
        chatHeight.value = withSpring(MIN_CHAT_HEIGHT)
      }
    })

  const animatedStyle = useAnimatedStyle(() => ({
    height: chatHeight.value,
  }))

  if (!currentLocation) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>위치 불러오는 중...</Text>
      </View>
    )
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Map */}
      <NaverMapView
        style={styles.map}
        initialCamera={{
          latitude: region?.latitude || 37.5665,
          longitude: region?.longitude || 126.978,
          zoom: 15,
        }}
      >
        {/* Destination Marker */}
        {roomInfo?.destinationLat && roomInfo?.destinationLng && (
          <>
            <NaverMapMarkerOverlay
              latitude={roomInfo.destinationLat}
              longitude={roomInfo.destinationLng}
              caption={{ text: roomInfo.destinationName || '목표지점' }}
            >
              <View style={styles.destinationMarker}>
                <Text style={styles.destinationMarkerText}>🎯</Text>
              </View>
            </NaverMapMarkerOverlay>
            <NaverMapCircleOverlay
              latitude={roomInfo.destinationLat}
              longitude={roomInfo.destinationLng}
              radius={100}
              color="rgba(0, 122, 255, 0.2)"
            />
          </>
        )}
        
        {/* User Markers */}
        {markers.map((marker) => (
          <NaverMapMarkerOverlay
            key={marker.id}
            latitude={marker.lat}
            longitude={marker.lng}
            caption={{ text: marker.name || '' }}
          >
            <CharacterMarker
              type={marker.characterType}
              color={marker.characterColor}
              name={marker.name}
              isOnline={marker.isOnline}
            />
          </NaverMapMarkerOverlay>
        ))}
      </NaverMapView>

      {/* Top Bar */}
      <View style={styles.topBar}>
        {currentRoom && (
          <View style={styles.roomInfo}>
            <Text style={styles.roomCode}>방 코드: {currentRoom.code}</Text>
            <Text style={styles.memberCount}>참여 {roomInfo?.members.length || 1}명</Text>
          </View>
        )}
        {myEta && (
          <View style={styles.etaContainer}>
            <Text style={styles.etaLabel}>목표까지</Text>
            <Text style={styles.etaValue}>{myEta.distance}km</Text>
            <Text style={styles.etaTime}>약 {myEta.eta}</Text>
          </View>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        {!currentRoom ? (
          <TouchableOpacity style={styles.createRoomButton} onPress={createRoom} disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.createRoomButtonText}>새 방 만들기</Text>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.shareButton} onPress={shareRoomLink}>
            <Text style={styles.shareButtonText}>🔗 초대 링크 공유</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Chat Panel */}
      <Animated.View style={[styles.chatPanel, animatedStyle]}>
        <GestureDetector gesture={gesture}>
          <View style={styles.dragHandle}>
            <View style={styles.dragBar} />
          </View>
        </GestureDetector>
        
        {currentRoom ? (
          <>
            <ScrollView
              ref={scrollViewRef}
              style={styles.messageList}
              contentContainerStyle={styles.messageListContent}
            >
              {roomMessages.map((msg) => (
                <View
                  key={msg.id}
                  style={[
                    styles.messageBubble,
                    msg.isMine ? styles.messageBubbleMine : styles.messageBubbleOther,
                  ]}
                >
                  {!msg.isMine && (
                    <Text style={styles.senderName}>{msg.senderId.substring(0, 4)}</Text>
                  )}
                  <Text style={styles.messageText}>{msg.content}</Text>
                </View>
              ))}
            </ScrollView>
            
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              keyboardVerticalOffset={0}
            >
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.chatInput}
                  value={chatInput}
                  onChangeText={setChatInput}
                  placeholder="메시지 입력..."
                  placeholderTextColor="#999"
                  onSubmitEditing={sendMessage}
                  returnKeyType="send"
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                  <Text style={styles.sendButtonText}>전송</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </>
        ) : (
          <View style={styles.emptyChat}>
            <Text style={styles.emptyChatText}>방을 만들어 위치를 공유해보세요!</Text>
          </View>
        )}
      </Animated.View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  map: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  destinationMarker: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  destinationMarkerText: {
    fontSize: 28,
  },
  topBar: {
    position: 'absolute',
    top: 50,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  roomInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  roomCode: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  etaContainer: {
    backgroundColor: 'rgba(0, 122, 255, 0.95)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  etaLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  etaValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  etaTime: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  actionButtons: {
    position: 'absolute',
    bottom: MIN_CHAT_HEIGHT + 20,
    left: 16,
    right: 16,
  },
  createRoomButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  createRoomButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  shareButton: {
    backgroundColor: '#34C759',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  chatPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dragHandle: {
    height: DRAG_BAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragBar: {
    width: 40,
    height: 4,
    backgroundColor: '#DDD',
    borderRadius: 2,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 12,
  },
  messageListContent: {
    paddingVertical: 8,
  },
  messageBubble: {
    maxWidth: '80%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  messageBubbleMine: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  messageBubbleOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9E9EB',
  },
  senderName: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  messageText: {
    fontSize: 15,
    color: '#FFF',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 8,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  emptyChat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyChatText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
})