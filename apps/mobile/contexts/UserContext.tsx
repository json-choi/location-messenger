import 'expo-sqlite/localStorage/install'
import React, { createContext, useState, useEffect, useCallback } from 'react'
import { User, CharacterType, RoomInfo, CHARACTER_TYPES } from '@yogiya/shared'

const USER_STORAGE_KEY = '@user_data'
const ROOM_STORAGE_KEY = '@current_room'

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001'

interface UserContextType {
  user: User | null
  isLoading: boolean
  isOnboarded: boolean
  currentRoom: RoomInfo | null
  onboard: (name: string, characterType: CharacterType, characterColor: string) => Promise<void>
  logout: () => Promise<void>
  updateCharacter: (type: CharacterType, color: string) => Promise<void>
  toggleLocationSharing: (enabled: boolean) => Promise<void>
  updateProfile: (name: string) => Promise<void>
  setCurrentRoom: (room: RoomInfo | null) => void
  verifyUser: () => Promise<boolean>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [currentRoom, setCurrentRoomState] = useState<RoomInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadUser()
    loadCurrentRoom()
  }, [])

  const loadUser = async () => {
    try {
      const userData = localStorage.getItem(USER_STORAGE_KEY)
      if (userData) {
        const parsed = JSON.parse(userData)
        if (!CHARACTER_TYPES.includes(parsed.characterType)) {
          parsed.characterType = 'boy_casual' as CharacterType
          localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(parsed))
        }
        setUser(parsed)
      }
    } catch (error) {
      console.error('Failed to load user:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadCurrentRoom = async () => {
    try {
      const roomData = localStorage.getItem(ROOM_STORAGE_KEY)
      if (roomData) {
        setCurrentRoomState(JSON.parse(roomData))
      }
    } catch (error) {
      console.error('Failed to load room:', error)
    }
  }

  const onboard = async (name: string, characterType: CharacterType, characterColor: string) => {
    const response = await fetch(`${API_URL}/api/users/anonymous`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name || undefined,
        characterType,
        characterColor,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API error (${response.status}): ${errorText}`)
    }

    const data = await response.json()

    const newUser: User = {
      id: data.user.id,
      name: data.user.name,
      characterType: data.user.characterType,
      characterColor: data.user.characterColor,
      locationSharingEnabled: true,
      authProvider: null,
      authId: null,
      createdAt: data.user.createdAt,
    }

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser))
    setUser(newUser)
  }

  const logout = async () => {
    localStorage.removeItem(USER_STORAGE_KEY)
    localStorage.removeItem(ROOM_STORAGE_KEY)
    setUser(null)
    setCurrentRoomState(null)
  }

  const updateCharacter = async (type: CharacterType, color: string) => {
    if (!user) return

    const updatedUser = { ...user, characterType: type, characterColor: color }
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const toggleLocationSharing = async (enabled: boolean) => {
    if (!user) return

    const updatedUser = { ...user, locationSharingEnabled: enabled }
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const updateProfile = async (name: string) => {
    if (!user) return

    const updatedUser = { ...user, name }
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const setCurrentRoom = useCallback((room: RoomInfo | null) => {
    setCurrentRoomState(room)
    if (room) {
      localStorage.setItem(ROOM_STORAGE_KEY, JSON.stringify(room))
    } else {
      localStorage.removeItem(ROOM_STORAGE_KEY)
    }
  }, [])

  const verifyUser = useCallback(async (): Promise<boolean> => {
    if (!user) return false

    try {
      const response = await fetch(`${API_URL}/api/users/${user.id}`)
      if (!response.ok) {
        // 사용자가 DB에 없음 - 로컬 데이터 삭제
        localStorage.removeItem(USER_STORAGE_KEY)
        localStorage.removeItem(ROOM_STORAGE_KEY)
        setUser(null)
        setCurrentRoomState(null)
        return false
      }
      return true
    } catch (error) {
      console.error('Failed to verify user:', error)
      return false
    }
  }, [user])

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        isOnboarded: !!user,
        currentRoom,
        onboard,
        logout,
        updateCharacter,
        toggleLocationSharing,
        updateProfile,
        setCurrentRoom,
        verifyUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = React.use(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}