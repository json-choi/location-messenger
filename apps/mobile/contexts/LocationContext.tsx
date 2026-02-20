import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LocationObject } from 'expo-location'
import { useWebSocket } from './WebSocketContext'
import { useUser } from './UserContext'

const LOCATION_TASK_NAME = 'background-location-task'

interface LocationContextType {
  currentLocation: Location.LocationObject | null
  isTracking: boolean
  requestPermission: () => Promise<boolean>
  startTracking: () => Promise<void>
  stopTracking: () => Promise<void>
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState<Location.LocationObject | null>(null)
  const [isTracking, setIsTracking] = useState(false)
  const { sendLocation } = useWebSocket()
  const { user } = useUser()

  const requestPermission = useCallback(async () => {
    try {
      const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync()
      if (foregroundStatus !== 'granted') {
        return false
      }
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync()
      return backgroundStatus === 'granted'
    } catch (e) {
      console.error('Location permission request failed:', e)
      return false
    }
  }, [])

  const startTracking = useCallback(async () => {
    const hasPermission = await requestPermission()
    if (!hasPermission) return

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.High,
      timeInterval: 5000,
      distanceInterval: 10,
      foregroundService: {
        notificationTitle: '위치 공유 중',
        notificationBody: '위치 공유가 활성화되어 있습니다.',
      },
    })
    setIsTracking(true)
  }, [requestPermission])

  const stopTracking = useCallback(async () => {
    const isRunning = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME)
    if (isRunning) {
      await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME)
    }
    setIsTracking(false)
  }, [])

  useEffect(() => {
    let subscription: Location.LocationSubscription | null = null

    const initLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') return

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        })
        setCurrentLocation(location)

        subscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 5000,
            distanceInterval: 10,
          },
          (newLocation) => {
            setCurrentLocation(newLocation)
            if (user?.locationSharingEnabled) {
              sendLocation(
                newLocation.coords.latitude,
                newLocation.coords.longitude,
                newLocation.coords.accuracy ?? undefined,
                newLocation.coords.speed ?? undefined
              )
            }
          }
        )
      } catch (e) {
        console.error('Location initialization failed:', e)
      }
    }

    initLocation()

    return () => {
      subscription?.remove()
    }
  }, [sendLocation, user?.locationSharingEnabled])

  useEffect(() => {
    if (user?.id) {
      AsyncStorage.setItem('@current_user_id', user.id)
    }
  }, [user?.id])

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        isTracking,
        requestPermission,
        startTracking,
        stopTracking,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export function useLocation() {
  const context = useContext(LocationContext)
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider')
  }
  return context
}
