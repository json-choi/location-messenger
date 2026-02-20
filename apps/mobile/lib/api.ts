const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001'

export interface ApiFriend {
  id: string
  userId: string
  name: string | null
  characterType: string
  characterColor: string
  locationSharingEnabled: boolean
  lastLocation: {
    lat: number
    lng: number
    accuracy: number | null
    timestamp: number
  } | null
}

export interface ApiChat {
  id: string
  type: 'direct' | 'room'
  friend?: {
    id: string
    name: string | null
    characterType: string
    characterColor: string
  }
  name?: string
  lastMessage?: {
    content: string
    timestamp: number
    senderId: string
  }
  unreadCount: number
}

export const api = {
  async getFriends(userId: string): Promise<ApiFriend[]> {
    const response = await fetch(`${API_URL}/api/friends/${userId}`)
    if (!response.ok) throw new Error('Failed to fetch friends')
    const data = await response.json()
    return data.friends
  },

  async addFriend(requesterId: string, addresseeId: string) {
    const response = await fetch(`${API_URL}/api/friends/request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ requesterId, addresseeId }),
    })
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error || 'Failed to add friend')
    }
    return response.json()
  },

  async acceptFriend(requesterId: string, addresseeId: string) {
    const response = await fetch(`${API_URL}/api/friends/accept/${requesterId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ addresseeId }),
    })
    if (!response.ok) throw new Error('Failed to accept friend')
    return response.json()
  },

  async rejectFriend(requesterId: string, addresseeId: string) {
    const response = await fetch(`${API_URL}/api/friends/reject/${requesterId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ addresseeId }),
    })
    if (!response.ok) throw new Error('Failed to reject friend')
    return response.json()
  },

  async removeFriend(userId: string, friendId: string) {
    const response = await fetch(`${API_URL}/api/friends/${userId}/${friendId}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Failed to remove friend')
    return response.json()
  },

  async getPendingRequests(userId: string) {
    const response = await fetch(`${API_URL}/api/friends/pending/${userId}`)
    if (!response.ok) throw new Error('Failed to fetch pending requests')
    return response.json()
  },

  async getChats(userId: string): Promise<ApiChat[]> {
    const response = await fetch(`${API_URL}/api/chats/${userId}`)
    if (!response.ok) throw new Error('Failed to fetch chats')
    const data = await response.json()
    return data.chats
  },

  async getDirectMessages(userId: string, friendId: string, limit = 50) {
    const response = await fetch(`${API_URL}/api/messages/direct/${userId}/${friendId}?limit=${limit}`)
    if (!response.ok) throw new Error('Failed to fetch messages')
    return response.json()
  },

  async sendDirectMessage(receiverId: string, senderId: string, content: string) {
    const response = await fetch(`${API_URL}/api/messages/direct/${receiverId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senderId, content, type: 'TEXT' }),
    })
    if (!response.ok) throw new Error('Failed to send message')
    return response.json()
  },

  async getUser(userId: string) {
    const response = await fetch(`${API_URL}/api/users/${userId}`)
    if (!response.ok) throw new Error('Failed to fetch user')
    return response.json()
  },

  async updateUser(userId: string, data: Record<string, unknown>) {
    const response = await fetch(`${API_URL}/api/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Failed to update user')
    return response.json()
  },
}
