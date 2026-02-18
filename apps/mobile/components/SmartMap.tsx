import React, { useMemo } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps'
import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map'
import { MapMarker } from '@location-messenger/shared'
import CharacterMarker from './CharacterMarker'

interface SmartMapProps {
  region?: Region
  markers?: MapMarker[]
  showsUserLocation?: boolean
  onRegionChange?: (region: Region) => void
  onMarkerPress?: (marker: MapMarker) => void
  style?: object
}

function isInKorea(lat: number, lng: number): boolean {
  return lat >= 33 && lat <= 39 && lng >= 124 && lng <= 132
}

export default function SmartMap({
  region,
  markers = [],
  showsUserLocation = true,
  onRegionChange,
  onMarkerPress,
  style,
}: SmartMapProps) {
  const useNaverMap = useMemo(() => {
    if (!region) return true
    return isInKorea(region.latitude, region.longitude)
  }, [region?.latitude, region?.longitude])

  const defaultRegion: Region = {
    latitude: 37.5665,
    longitude: 126.9780,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }

  const currentRegion = region || defaultRegion

  if (Platform.OS === 'web') {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.webPlaceholder} />
      </View>
    )
  }

  if (useNaverMap) {
    return (
      <View style={[styles.container, style]}>
        <NaverMapView
          style={styles.map}
          initialCamera={{
            latitude: currentRegion.latitude,
            longitude: currentRegion.longitude,
            zoom: 15,
          }}
        >
          {markers.map((marker) => (
            <NaverMapMarkerOverlay
              key={marker.id}
              latitude={marker.lat}
              longitude={marker.lng}
              caption={{ text: marker.name || '' }}
              onTap={() => onMarkerPress?.(marker)}
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
      </View>
    )
  }

  return (
    <View style={[styles.container, style]}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={currentRegion}
        showsUserLocation={showsUserLocation}
        onRegionChangeComplete={onRegionChange}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            onPress={() => onMarkerPress?.(marker)}
          >
            <CharacterMarker
              type={marker.characterType}
              color={marker.characterColor}
              name={marker.name}
              isOnline={marker.isOnline}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  webPlaceholder: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
})