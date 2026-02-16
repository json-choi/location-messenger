import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  TextInput,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useUser, useLocation } from '../../contexts'
import {
  CharacterType,
  CHARACTER_TYPES,
  CHARACTER_EMOJIS,
  CHARACTER_NAMES,
  CHARACTER_COLORS,
} from '@location-messenger/shared'

export default function ProfileScreen() {
  const { user, logout, updateCharacter, toggleLocationSharing, updateProfile } = useUser()
  const { isTracking, startTracking, stopTracking } = useLocation()
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(user?.name || '')

  const handleCharacterSelect = async (type: CharacterType) => {
    if (user) {
      await updateCharacter(type, user.characterColor)
    }
  }

  const handleColorSelect = async (color: string) => {
    if (user) {
      await updateCharacter(user.characterType, color)
    }
  }

  const handleLocationToggle = async (enabled: boolean) => {
    await toggleLocationSharing(enabled)
    if (enabled) {
      await startTracking()
    } else {
      await stopTracking()
    }
  }

  const handleLogout = async () => {
    Alert.alert(
      '로그아웃',
      '정말 로그아웃 하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '로그아웃',
          style: 'destructive',
          onPress: async () => {
            await stopTracking()
            await logout()
            router.replace('/')
          },
        },
      ]
    )
  }

  const handleSaveName = async () => {
    if (editedName.trim()) {
      await updateProfile(editedName.trim())
      setIsEditing(false)
    }
  }

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>로딩 중...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>내 정보</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={[styles.avatarLarge, { borderColor: user.characterColor }]}>
          <Text style={styles.avatarEmoji}>{CHARACTER_EMOJIS[user.characterType]}</Text>
        </View>
        <View style={styles.profileInfo}>
          {isEditing ? (
            <View style={styles.nameEditContainer}>
              <TextInput
                style={styles.nameInput}
                value={editedName}
                onChangeText={setEditedName}
                autoFocus
              />
              <TouchableOpacity onPress={handleSaveName} style={styles.saveButton}>
                <Ionicons name="checkmark" size={20} color="#007AFF" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setIsEditing(true)}>
              <Text style={styles.userName}>{user.name || '이름 없음'}</Text>
              <Text style={styles.editHint}>탭하여 수정</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>캐릭터 선택</Text>
        <View style={styles.characterGrid}>
          {CHARACTER_TYPES.map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.characterItem,
                user.characterType === type && styles.characterItemSelected,
              ]}
              onPress={() => handleCharacterSelect(type)}
            >
              <Text style={styles.characterEmoji}>{CHARACTER_EMOJIS[type]}</Text>
              <Text style={styles.characterName}>{CHARACTER_NAMES[type]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>캐릭터 색상</Text>
        <View style={styles.colorGrid}>
          {CHARACTER_COLORS.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorItem,
                { backgroundColor: color },
                user.characterColor === color && styles.colorItemSelected,
              ]}
              onPress={() => handleColorSelect(color)}
            >
              {user.characterColor === color && (
                <Ionicons name="checkmark" size={20} color="#FFF" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>설정</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="location" size={24} color="#007AFF" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>위치 공유</Text>
              <Text style={styles.settingSubtitle}>
                {user.locationSharingEnabled ? '친구들에게 내 위치가 표시됩니다' : '위치 공유가 꺼져 있습니다'}
              </Text>
            </View>
          </View>
          <Switch
            value={user.locationSharingEnabled}
            onValueChange={handleLocationToggle}
            trackColor={{ false: '#ccc', true: '#4CAF50' }}
            thumbColor={user.locationSharingEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>

        {isTracking && (
          <View style={styles.trackingInfo}>
            <View style={styles.trackingDot} />
            <Text style={styles.trackingText}>위치 추적 중...</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.versionText}>Location Messenger v1.0.0</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 12,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginRight: 16,
  },
  avatarEmoji: {
    fontSize: 40,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  editHint: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  nameEditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameInput: {
    fontSize: 18,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
    flex: 1,
    paddingVertical: 2,
  },
  saveButton: {
    marginLeft: 8,
    padding: 4,
  },
  section: {
    backgroundColor: '#FFF',
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  characterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  characterItem: {
    width: '33.33%',
    alignItems: 'center',
    paddingVertical: 12,
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
    fontSize: 32,
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  trackingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  trackingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 8,
  },
  trackingText: {
    fontSize: 12,
    color: '#4CAF50',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#FFF0F0',
    borderWidth: 1,
    borderColor: '#FFCCCB',
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
  },
})
