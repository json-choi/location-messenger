import React, { useState } from 'react'
import { ScrollView, Alert, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import {
  CharacterType,
  CHARACTER_TYPES,
  CHARACTER_NAMES,
  CHARACTER_GENDER,
} from '@location-messenger/shared'
import { useUser } from '../contexts'
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonSpinner,
  Pressable,
} from '../components/ui'
import CharacterSprite from '../components/CharacterSprite'

const MALE_TYPES = CHARACTER_TYPES.filter((t) => CHARACTER_GENDER[t] === 'male')
const FEMALE_TYPES = CHARACTER_TYPES.filter((t) => CHARACTER_GENDER[t] === 'female')

export default function OnboardingScreen() {
  const router = useRouter()
  const { onboard } = useUser()
  const [name, setName] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>('boy_casual')
  const [isLoading, setIsLoading] = useState(false)

  const handleStart = async () => {
    if (!name.trim()) return
    setIsLoading(true)
    try {
      await onboard(name.trim(), selectedCharacter, '#FF6B6B')
      router.replace('/(tabs)/map')
    } catch (error) {
      console.error('Onboarding failed:', error)
      Alert.alert('오류', '서버에 연결할 수 없습니다. 인터넷 연결을 확인하고 다시 시도해주세요.', [
        { text: '확인' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <VStack space="xl" style={styles.container}>
        <VStack space="sm">
          <Heading size="3xl">환영해요! 👋</Heading>
          <Text size="lg" style={styles.subtitle}>
            캐릭터를 선택하고 이름을 정해주세요
          </Text>
        </VStack>

        <VStack space="md">
          <Text size="lg" bold>이름</Text>
          <Input size="lg" variant="outline">
            <InputField
              value={name}
              onChangeText={setName}
              placeholder="친구들에게 보일 이름"
              maxLength={20}
              autoFocus
            />
          </Input>
        </VStack>

        <VStack space="md">
          <Text size="lg" bold>캐릭터 선택</Text>

          <Text size="sm" style={styles.genderLabel}>남자</Text>
          <HStack style={styles.row}>
            {MALE_TYPES.map((type) => (
              <Pressable
                key={type}
                style={[styles.characterCard, selectedCharacter === type && styles.characterCardSelected]}
                onPress={() => setSelectedCharacter(type)}
              >
                <CharacterSprite type={type} direction="south" animation="idle" size={64} />
                <Text size="xs" style={styles.characterName}>{CHARACTER_NAMES[type]}</Text>
              </Pressable>
            ))}
          </HStack>

          <Text size="sm" style={styles.genderLabel}>여자</Text>
          <HStack style={styles.row}>
            {FEMALE_TYPES.map((type) => (
              <Pressable
                key={type}
                style={[styles.characterCard, selectedCharacter === type && styles.characterCardSelected]}
                onPress={() => setSelectedCharacter(type)}
              >
                <CharacterSprite type={type} direction="south" animation="idle" size={64} />
                <Text size="xs" style={styles.characterName}>{CHARACTER_NAMES[type]}</Text>
              </Pressable>
            ))}
          </HStack>
        </VStack>

        <VStack space="md" style={styles.previewSection}>
          <Text size="lg" bold>미리보기</Text>
          <Box style={styles.previewBox}>
            <CharacterSprite type={selectedCharacter} direction="south" animation="idle" size={96} />
            <Heading size="xl" style={styles.previewName}>{name || '이름을 입력하세요'}</Heading>
          </Box>
        </VStack>

        <Button
          size="xl"
          variant="solid"
          style={styles.startButton}
          onPress={handleStart}
          isDisabled={!name.trim() || isLoading}
        >
          {isLoading ? <ButtonSpinner /> : <ButtonText>시작하기</ButtonText>}
        </Button>
      </VStack>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 24, paddingTop: 80 },
  container: { marginBottom: 40 },
  subtitle: { color: '#6B7280' },
  genderLabel: { color: '#6B7280', marginBottom: 4 },
  row: { flexWrap: 'wrap', gap: 8 },
  characterCard: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    width: '30%',
  },
  characterCardSelected: { borderColor: '#6366F1', backgroundColor: '#EEF2FF' },
  characterName: { color: '#374151', marginTop: 4, textAlign: 'center' },
  previewSection: { alignItems: 'center' },
  previewBox: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  previewName: { marginTop: 8 },
  startButton: { width: '100%', marginTop: 16, marginBottom: 40, backgroundColor: '#6366F1' },
})
