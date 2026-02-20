import { CharacterType, CHARACTER_EMOJIS } from '@location-messenger/shared'
import React from 'react'
import { Text, View } from 'react-native'
import { colors } from '../constants/design'

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
    <View className="items-center">
      <View
        className="bg-background-0 justify-center items-center shadow-hard-2 rounded-full"
        style={{
          width: sizeConfig.container,
          height: sizeConfig.container,
          borderColor: color,
          borderWidth: sizeConfig.ring,
        }}
      >
        <Text 
          className="text-center"
          style={{ fontSize: sizeConfig.emoji }}
        >
          {emoji}
        </Text>
        {!isOnline && (
          <View className="absolute inset-0 bg-background-900/50 rounded-full" />
        )}
      </View>
      {isOnline && (
        <View className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-background-0 bg-success-500" />
      )}
      {name && (
        <View className="mt-1 px-2 py-0.5 bg-background-900/80 rounded-lg max-w-[80px]">
          <Text className="text-typography-0 text-[11px] font-semibold text-center" numberOfLines={1}>
            {name}
          </Text>
        </View>
      )}
    </View>
  )
}
