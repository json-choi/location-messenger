import React, { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { User, CharacterType, CHARACTER_COLORS } from '@location-messenger/shared'

const USER_STORAGE_KEY = '@user_data'
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001/api'

interface UserContextType {
  user: User | null
  isLoading: boolean
  isLoggedIn: boolean
  login: (email: string, name?: string) => Promise<void>
  logout: () => Promise<void>
  updateCharacter: (type: CharacterType, color: string) => Promise<void>
  toggleLocationSharing: (enabled: boolean) => Promise<void>
  updateProfile: (name: string) => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from storage on mount
  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    try {
      const userData = await AsyncStorage.getItem(USER_STORAGE_KEY)
      if (userData) {
        setUser(JSON.parse(userData))
      }
    } catch (error) {
      console.error('Failed to load user:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, name?: string) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: name || email.split('@')[0],
          characterType: 'cat',
          characterColor: CHARACTER_COLORS[0],
        }),
      })
      const data = await response.json()
      const newUser: User = {
        id: data.id || `user-${Date.now()}`,
        email,
        name: name || email.split('@')[0],
        characterType: 'cat',
        characterColor: CHARACTER_COLORS[0],
        locationSharingEnabled: true,
      }
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser))
      setUser(newUser)
    } catch (error) {
      console.error('Login failed:', error)
      const fallbackUser: User = {
        id: `user-${Date.now()}`,
        email,
        name: name || email.split('@')[0],
        characterType: 'cat',
        characterColor: CHARACTER_COLORS[0],
        locationSharingEnabled: true,
      }
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(fallbackUser))
      setUser(fallbackUser)
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem(USER_STORAGE_KEY)
    setUser(null)
  }

  const updateCharacter = async (type: CharacterType, color: string) => {
    if (!user) return

    const updatedUser = { ...user, characterType: type, characterColor: color }

    try {
      await fetch(`${API_URL}/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ characterType: type, characterColor: color }),
      })
    } catch (error) {
      console.error('Failed to update character:', error)
    }

    await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const toggleLocationSharing = async (enabled: boolean) => {
    if (!user) return

    const updatedUser = { ...user, locationSharingEnabled: enabled }

    try {
      await fetch(`${API_URL}/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locationSharingEnabled: enabled }),
      })
    } catch (error) {
      console.error('Failed to toggle location sharing:', error)
    }

    await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const updateProfile = async (name: string) => {
    if (!user) return

    const updatedUser = { ...user, name }

    try {
      await fetch(`${API_URL}/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
    } catch (error) {
      console.error('Failed to update profile:', error)
    }

    await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn: !!user,
        login,
        logout,
        updateCharacter,
        toggleLocationSharing,
        updateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
