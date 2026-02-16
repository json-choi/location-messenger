import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useUser, useWebSocket } from '../../contexts'
import { Message, CHARACTER_EMOJIS } from '@location-messenger/shared'
import ChatBubble from '../../components/ChatBubble'

export default function ChatScreen() {
  const { id: friendId } = useLocalSearchParams<{ id: string }>()
  const { user } = useUser()
  const { messages: wsMessages, sendMessage, startChat, currentChatId } = useWebSocket()
  const [inputText, setInputText] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const scrollViewRef = useRef<ScrollView>(null)

  useEffect(() => {
    if (friendId) {
      startChat(friendId)
    }
  }, [friendId])

  useEffect(() => {
    if (wsMessages.length > 0) {
      const chatMessages = wsMessages.filter(
        (m) => m.type === 'chat' && (m.from === friendId || m.to === friendId)
      )
      // Convert to Message format and update
      setMessages((prev) => {
        const newMsgs = chatMessages.map((m) => ({
          id: `msg-${Date.now()}-${Math.random()}`,
          content: m.content,
          type: 'TEXT' as const,
          senderId: m.from,
          receiverId: m.to,
          createdAt: new Date(m.timestamp).toISOString(),
        }))
        return [...prev, ...newMsgs]
      })
    }
  }, [wsMessages, friendId])

  const handleSend = () => {
    if (!inputText.trim() || !friendId || !user) return

    sendMessage(friendId, inputText.trim())
    
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      content: inputText.trim(),
      type: 'TEXT',
      senderId: user.id,
      receiverId: friendId,
      createdAt: new Date().toISOString(),
    }
    
    setMessages((prev) => [...prev, newMessage])
    setInputText('')
    
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true })
    }, 100)
  }

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>로딩 중...</Text>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>{CHARACTER_EMOJIS[user.characterType]}</Text>
        </View>
        <Text style={styles.headerTitle}>채팅</Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}
      >
        {messages.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="chatbubble-outline" size={48} color="#ccc" />
            <Text style={styles.emptyText}>메시지를 보내보세요!</Text>
          </View>
        ) : (
          messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message}
              isOwn={message.senderId === user.id}
            />
          ))
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="메시지 입력..."
          multiline
          maxLength={1000}
        />
        <TouchableOpacity
          style={[styles.sendButton, inputText.trim() ? styles.sendButtonActive : styles.sendButtonInactive]}
          onPress={handleSend}
          disabled={!inputText.trim()}
        >
          <Ionicons name="send" size={20} color={inputText.trim() ? '#fff' : '#999'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    marginRight: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarEmoji: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#999',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  textInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    fontSize: 16,
    marginRight: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonActive: {
    backgroundColor: '#007AFF',
  },
  sendButtonInactive: {
    backgroundColor: '#e0e0e0',
  },
})
