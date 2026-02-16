import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CharacterType, CHARACTER_EMOJIS } from '@location-messenger/shared'

interface CharacterMarkerProps {
  type: CharacterType
  color: string
  name?: string
  isOnline?: boolean
  size?: 'small' | 'medium' | 'large'
}

const SIZES = {
  small: { container: 32, emoji: 16, ring: 2 },
  medium: { container: 48, emoji: 24, ring: 3 },
  large: { container: 64, emoji: 32, ring: 4 },
}

export default function CharacterMarker({
  type,
  color,
  name,
  isOnline = true,
  size = 'medium',
}: CharacterMarkerProps) {
  const sizeConfig = SIZES[size]
  const emoji = CHARACTER_EMOJIS[type] || '🐱'

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {
            width: sizeConfig.container,
            height: sizeConfig.container,
            borderRadius: sizeConfig.container / 2,
            borderColor: color,
            borderWidth: sizeConfig.ring,
          },
        ]}
      >
        <Text style={[styles.emoji, { fontSize: sizeConfig.emoji }]}>
          {emoji}
        </Text>
        {!isOnline && <View style={styles.offlineOverlay} />}
      </View>
      {isOnline && <View style={[styles.onlineDot, { backgroundColor: '#4CAF50' }]} />}
      {name && (
        <View style={styles.nameTag}>
          <Text style={styles.nameText} numberOfLines={1}>
            {name}
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emoji: {
    textAlign: 'center',
  },
  offlineOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    borderRadius: 16,
  },
  onlineDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  nameTag: {
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    maxWidth: 80,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
})
