import React, { useEffect, useMemo } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Region } from 'react-native-maps'
import { SmartMap } from '../../components'
import { useUser, useWebSocket, useLocation } from '../../contexts'
import { MapMarker } from '@location-messenger/shared'

export default function MapScreen() {
  const { user } = useUser()
  const { friendLocations, onlineStatus } = useWebSocket()
  const { currentLocation, requestPermission } = useLocation()

  useEffect(() => {
    requestPermission()
  }, [])

  const region: Region | undefined = useMemo(() => {
    if (!currentLocation) return undefined
    return {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    }
  }, [currentLocation])

  const markers: MapMarker[] = useMemo(() => {
    return Object.entries(friendLocations).map(([userId, location]) => ({
      id: `marker-${userId}`,
      userId,
      lat: location.lat,
      lng: location.lng,
      characterType: 'cat' as const,
      characterColor: '#FF6B6B',
      name: userId,
      isOnline: onlineStatus[userId] ?? false,
      lastSeen: location.timestamp,
    }))
  }, [friendLocations, onlineStatus])

  const handleMarkerPress = (marker: MapMarker) => {
    console.log('Marker pressed:', marker.userId)
  }

  if (!currentLocation) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>위치 불러오는 중...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SmartMap
        region={region}
        markers={markers}
        showsUserLocation
        onMarkerPress={handleMarkerPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
})
