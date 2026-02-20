import React, { useState, useRef, useEffect, useCallback } from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useUser, useWebSocket } from "../../contexts";
import { CHARACTER_EMOJIS } from "@location-messenger/shared";
import ChatBubble from "../../components/ChatBubble";
import { api } from "../../lib/api";
import {
    Box,
    VStack,
    HStack,
    Text,
    Input,
    InputField,
    Pressable,
    Spinner,
} from "../../components/ui";
import { colors } from "../../constants/design";

export default function ChatScreen() {
    const { id: friendId } = useLocalSearchParams<{ id: string }>();
    const { user } = useUser();
    const { sendChat, connect, isConnected } = useWebSocket();
    const [inputText, setInputText] = useState("");
    const [chatMessages, setChatMessages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const scrollViewRef = useRef<ScrollView>(null);

    const loadMessages = useCallback(async () => {
        if (!user || !friendId) return;
        try {
            const data = await api.getDirectMessages(user.id, friendId);
            setChatMessages(data.messages || []);
        } catch (error) {
            console.error("Failed to load messages:", error);
        } finally {
            setIsLoading(false);
        }
    }, [user, friendId]);

    useEffect(() => {
        loadMessages();
    }, [loadMessages]);

    // Connect WebSocket when user is available
    useEffect(() => {
        if (user?.id && !isConnected) {
            connect(user.id);
        }
    }, [user?.id, isConnected, connect]);

    const handleSend = async () => {
        if (!inputText.trim() || !friendId || !user) return;

        const content = inputText.trim();
        setInputText("");

        // Optimistic update
        const newMessage = {
            id: `temp-${Date.now()}`,
            content,
            type: "TEXT",
            senderId: user.id,
            receiverId: friendId,
            createdAt: new Date().toISOString(),
            isMine: true,
        };
        setChatMessages((prev) => [...prev, newMessage]);

        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);

        try {
            await api.sendDirectMessage(friendId, user.id, content);
            sendChat(friendId, content);
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    };

    if (!user || isLoading) {
        return (
            <Box className="flex-1 justify-center items-center bg-background-0">
                <Spinner size="large" color={colors.secondary.DEFAULT} />
                <Text size="md" className="mt-4 text-typography-600">
                    로딩 중...
                </Text>
            </Box>
        );
    }

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-background-50"
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={90}
        >
            <HStack className="items-center px-5 py-3 bg-background-0 border-b border-outline-100">
                <Pressable onPress={() => router.back()} className="mr-4 p-1">
                    <Ionicons name="arrow-back" size={24} color={colors.secondary.DEFAULT} />
                </Pressable>
                <Box className="w-10 h-10 rounded-full bg-background-100 justify-center items-center mr-3">
                    <Text className="text-xl">{CHARACTER_EMOJIS[user.characterType]}</Text>
                </Box>
                <Text size="xl" bold>
                    채팅
                </Text>
            </HStack>

            <ScrollView
                ref={scrollViewRef}
                className="flex-1"
                contentContainerClassName="p-4"
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}
            >
                {chatMessages.length === 0 ? (
                    <VStack className="flex-1 justify-center items-center pt-20">
                        <Ionicons name="chatbubble-outline" size={48} color={colors.gray[300]} />
                        <Text size="lg" className="mt-4 text-typography-500">
                            메시지를 보내보세요!
                        </Text>
                    </VStack>
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

            <HStack className="items-end px-4 py-3 bg-background-0 border-t border-outline-100">
                <Input
                    variant="outline"
                    size="md"
                    className="flex-1 min-h-[40px] max-h-[100px] bg-background-50 rounded-2xl mr-3"
                >
                    <InputField
                        value={inputText}
                        onChangeText={setInputText}
                        placeholder="메시지 입력..."
                        multiline
                        maxLength={1000}
                        className="py-2.5"
                    />
                </Input>
                <Pressable
                    className={`w-10 h-10 rounded-full justify-center items-center mb-0.5 ${
                        inputText.trim() ? "bg-secondary-500" : "bg-outline-200"
                    }`}
                    onPress={handleSend}
                    disabled={!inputText.trim()}
                >
                    <Ionicons
                        name="send"
                        size={20}
                        color={inputText.trim() ? "#fff" : colors.gray[400]}
                    />
                </Pressable>
            </HStack>
        </KeyboardAvoidingView>
    );
}

