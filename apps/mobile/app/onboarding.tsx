import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import {
  CharacterType,
  CharacterColor,
  CHARACTER_TYPES,
  CHARACTER_EMOJIS,
  CHARACTER_NAMES,
  CHARACTER_COLORS,
} from '@location-messenger/shared'
import { useUser } from '../contexts'

export default function OnboardingScreen() {
  const router = useRouter()
  const { onboard } = useUser()
  const [name, setName] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>('cat')
  const [selectedColor, setSelectedColor] = useState<CharacterColor>(CHARACTER_COLORS[0])

  const handleStart = async () => {
    if (!name.trim()) return

    await onboard(name.trim(), selectedCharacter, selectedColor)
    router.replace('/(tabs)')
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>환영해요! 👋</Text>
        <Text style={styles.subtitle}>캐릭터를 선택하고 이름을 정해주세요</Text>
      </View>

      {/* Name Input */}
      <View style={styles.section}>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.nameInput}
          value={name}
          onChangeText={setName}
          placeholder="친구들에게 보일 이름"
          maxLength={20}
          autoFocus
        />
      </View>

      {/* Character Selection */}
      <View style={styles.section}>
        <Text style={styles.label}>캐릭터 선택</Text>
        <View style={styles.characterGrid}>
          {CHARACTER_TYPES.map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.characterItem,
                selectedCharacter === type && styles.characterItemSelected,
              ]}
              onPress={() => setSelectedCharacter(type)}
            >
              <Text style={styles.characterEmoji}>{CHARACTER_EMOJIS[type]}</Text>
              <Text style={styles.characterName}>{CHARACTER_NAMES[type]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Color Selection */}
      <View style={styles.section}>
        <Text style={styles.label}>색상 선택</Text>
        <View style={styles.colorGrid}>
          {CHARACTER_COLORS.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorItem,
                { backgroundColor: color },
                selectedColor === color && styles.colorItemSelected,
              ]}
              onPress={() => setSelectedColor(color)}
            >
              {selectedColor === color && (
                <Ionicons name="checkmark" size={20} color="#FFF" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Preview */}
      <View style={styles.previewSection}>
        <Text style={styles.label}>미리보기</Text>
        <View style={styles.previewCard}>
          <View style={[styles.previewAvatar, { borderColor: selectedColor }]}>
            <Text style={styles.previewEmoji}>{CHARACTER_EMOJIS[selectedCharacter]}</Text>
          </View>
          <Text style={styles.previewName}>{name || '이름을 입력하세요'}</Text>
        </View>
      </View>

      {/* Start Button */}
      <TouchableOpacity
        style={[styles.startButton, !name.trim() && styles.startButtonDisabled]}
        onPress={handleStart}
        disabled={!name.trim()}
      >
        <Text style={styles.startButtonText}>시작하기</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainer: {
    padding: 24,
    paddingTop: 80,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  nameInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 18,
  },
  characterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  characterItem: {
    width: '33.33%',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  characterItemSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#F0F8FF',
  },
  characterEmoji: {
    fontSize: 36,
    marginBottom: 4,
  },
  characterName: {
    fontSize: 12,
    color: '#666',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  colorItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorItemSelected: {
    borderWidth: 3,
    borderColor: '#000',
  },
  previewSection: {
    marginBottom: 32,
    alignItems: 'center',
  },
  previewCard: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    width: '100%',
  },
  previewAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 12,
  },
  previewEmoji: {
    fontSize: 40,
  },
  previewName: {
    fontSize: 20,
    fontWeight: '600',
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
  },
  startButtonDisabled: {
    backgroundColor: '#CCC',
  },
  startButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
})
