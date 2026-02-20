import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ScrollView, KeyboardAvoidingView, View, Text as RNText, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'
import { ArrowLeft, Send, MessageCircle } from 'lucide-react-native'
import { useUser, useWebSocket } from '../../contexts'
import ChatBubble from '../../components/ChatBubble'
import { api } from '../../lib/api'
import CharacterSprite from '../../components/CharacterSprite'
import { colors } from '../../constants/design'

export default function ChatScreen() {
  const { id: friendId } = useLocalSearchParams<{ id: string }>()
  const { user } = useUser()
  const { sendChat, connect, isConnected } = useWebSocket()
  const [inputText, setInputText] = useState('')
  const [chatMessages, setChatMessages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const scrollViewRef = useRef<ScrollView>(null)

  const loadMessages = useCallback(async () => {
    if (!user || !friendId) return
    try {
      const data = await api.getDirectMessages(user.id, friendId)
      setChatMessages(data.messages || [])
    } catch (error) {
      console.error('Failed to load messages:', error)
    } finally {
      setIsLoading(false)
    }
  }, [user, friendId])

  useEffect(() => { loadMessages() }, [loadMessages])

  useEffect(() => {
    if (user?.id && !isConnected) connect(user.id)
  }, [user?.id, isConnected, connect])

  const handleSend = async () => {
    if (!inputText.trim() || !friendId || !user) return
    const content = inputText.trim()
    setInputText('')
    const newMessage = {
      id: `temp-${Date.now()}`,
      content,
      type: 'TEXT',
      senderId: user.id,
      receiverId: friendId,
      createdAt: new Date().toISOString(),
      isMine: true,
    }
    setChatMessages((prev) => [...prev, newMessage])
    setTimeout(() => { scrollViewRef.current?.scrollToEnd({ animated: true }) }, 100)
    try {
      await api.sendDirectMessage(friendId, user.id, content)
      sendChat(friendId, content)
    } catch (error) {
      console.error('Failed to send message:', error)
    }
  }

  if (!user || isLoading) {
    return (
      <View style={[s.screen, s.centered]}>
        <ActivityIndicator color={colors.accent.DEFAULT} />
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      style={s.screen}
      behavior={process.env.EXPO_OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()} style={s.backBtn} activeOpacity={0.7}>
          <ArrowLeft size={22} color={colors.text.secondary} strokeWidth={1.75} />
        </TouchableOpacity>
        <View style={s.headerAvatar}>
          <CharacterSprite type={user.characterType} size={28} />
        </View>
        <RNText style={s.headerTitle}>채팅</RNText>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={s.messageList}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={s.messageListContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}
      >
        {chatMessages.length === 0 ? (
          <View style={s.emptyState}>
            <MessageCircle size={40} color={colors.text.disabled} strokeWidth={1.25} />
            <RNText style={s.emptyText}>메시지를 보내보세요</RNText>
          </View>
        ) : (
          chatMessages.map((message) => (
            <ChatBubble
              key={message.id}
              content={message.content}
              isMine={message.senderId === user.id || message.isMine}
              timestamp={new Date(message.createdAt).getTime()}
            />
          ))
        )}
      </ScrollView>

      <View style={s.inputBar}>
        <TextInput
          style={s.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="메시지 입력..."
          placeholderTextColor={colors.text.disabled}
          multiline
          maxLength={1000}
          selectionColor={colors.accent.DEFAULT}
        />
        <TouchableOpacity
          style={[s.sendBtn, !inputText.trim() && s.sendBtnInactive]}
          onPress={handleSend}
          disabled={!inputText.trim()}
          activeOpacity={0.8}
        >
          <Send size={16} color={inputText.trim() ? '#FFFFFF' : colors.text.disabled} strokeWidth={2} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#09090B' },
  centered: { justifyContent: 'center', alignItems: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#27272A',
    backgroundColor: '#09090B',
  },
  backBtn: { padding: 4, marginRight: 12 },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#111113',
    borderWidth: 1,
    borderColor: '#27272A',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 10,
  },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#FAFAFA' },
  messageList: { flex: 1, backgroundColor: '#09090B' },
  messageListContent: { paddingVertical: 16 },
  emptyState: { flex: 1, alignItems: 'center', paddingTop: 80, gap: 12 },
  emptyText: { fontSize: 14, color: '#52525B' },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#27272A',
    backgroundColor: '#09090B',
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#111113',
    borderWidth: 1,
    borderColor: '#27272A',
    borderRadius: 20,
    borderCurve: 'continuous',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#FAFAFA',
    maxHeight: 100,
  },
  sendBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  sendBtnInactive: { backgroundColor: '#27272A' },
})
