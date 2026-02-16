import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import { WSMessage, UserLocation } from '@location-messenger/shared'

const WS_URL = process.env.EXPO_PUBLIC_WS_URL || 'wss://localhost:3000/ws'

interface OnlineStatus { [userId: string]: boolean }
interface FriendLocations { [userId: string]: UserLocation }

interface WebSocketContextType {
  isConnected: boolean
  isConnecting: boolean
  onlineStatus: OnlineStatus
  friendLocations: FriendLocations
  messages: ChatMessage[]
  connect: (userId: string) => void
  disconnect: () => void
  sendLocation: (lat: number, lng: number, accuracy?: number) => void
  sendChat: (to: string, content: string) => void
  clearMessages: () => void
}

interface ChatMessage {
  id: string
  from: string
  to?: string
  groupId?: string
  content: string
  timestamp: number
  isMine: boolean
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined)

declare global {
  var ws: WebSocket | undefined
}

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [onlineStatus, setOnlineStatus] = useState<OnlineStatus>({})
  const [friendLocations, setFriendLocations] = useState<FriendLocations>({})
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const wsRef = useRef<WebSocket | null>(null)
  const currentUserIdRef = useRef<string>('')

  const handleMessage = useCallback((msg: WSMessage) => {
    switch (msg.type) {
      case 'user_joined':
        setOnlineStatus((prev) => ({ ...prev, [msg.userId]: true }))
        break
      case 'user_left':
        setOnlineStatus((prev) => ({ ...prev, [msg.userId]: false }))
        break
      case 'friend_location':
        setFriendLocations((prev) => ({
          ...prev,
          [msg.userId]: {
            lat: msg.lat,
            lng: msg.lng,
            accuracy: msg.accuracy,
            timestamp: Date.now(),
          },
        }))
        break
      case 'chat':
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-${Date.now()}`,
            from: msg.from,
            to: msg.to,
            content: msg.content,
            timestamp: msg.timestamp,
            isMine: msg.from === currentUserIdRef.current,
          },
        ])
        break
      case 'group_chat':
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-${Date.now()}`,
            from: msg.from,
            groupId: msg.groupId,
            content: msg.content,
            timestamp: msg.timestamp,
            isMine: msg.from === currentUserIdRef.current,
          },
        ])
        break
      case 'friend_status':
        setOnlineStatus((prev) => ({
          ...prev,
          [msg.userId]: msg.online,
        }))
        break
    }
  }, [])

  const connect = useCallback((userId: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return

    currentUserIdRef.current = userId
    setIsConnecting(true)

    const ws = new WebSocket(WS_URL)
    wsRef.current = ws
    global.ws = ws

    ws.onopen = () => {
      setIsConnected(true)
      setIsConnecting(false)
      ws.send(JSON.stringify({ type: 'join', userId }))
    }

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data) as WSMessage
        handleMessage(msg)
      } catch (e) {
        console.error('Failed to parse message:', e)
      }
    }

    ws.onclose = () => {
      setIsConnected(false)
      setIsConnecting(false)
      wsRef.current = null
      global.ws = undefined
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
      setIsConnecting(false)
    }
  }, [handleMessage])

  const disconnect = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close()
      wsRef.current = null
      global.ws = undefined
    }
  }, [])

  const sendLocation = useCallback((lat: number, lng: number, accuracy?: number) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'location_update',
        userId: currentUserIdRef.current,
        lat,
        lng,
        accuracy,
      }))
    }
  }, [])

  const sendChat = useCallback((to: string, content: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'chat',
        from: currentUserIdRef.current,
        to,
        content,
        timestamp: Date.now(),
      }))
    }
  }, [])

  const clearMessages = useCallback(() => {
    setMessages([])
  }, [])

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [disconnect])

  return (
    <WebSocketContext.Provider
      value={{
        isConnected,
        isConnecting,
        onlineStatus,
        friendLocations,
        messages,
        connect,
        disconnect,
        sendLocation,
        sendChat,
        clearMessages,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  )
}

export function useWebSocket() {
  const context = useContext(WebSocketContext)
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider')
  }
  return context
}
