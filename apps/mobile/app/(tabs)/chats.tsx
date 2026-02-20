import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser, useWebSocket } from "../../contexts";
import { CHARACTER_EMOJIS } from "@location-messenger/shared";
import { api, ApiChat } from "../../lib/api";
import { colors } from "../../constants/design";
import { Box, VStack, HStack, Text, Heading, Pressable, Spinner } from "../../components/ui";

function formatTime(timestamp: number): string {
    const now = new Date();
    const date = new Date(timestamp);
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? "오후" : "오전";
        const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
        return `${period} ${displayHours}:${minutes.toString().padStart(2, "0")}`;
    } else if (diffDays === 1) {
        return "어제";
    } else if (diffDays < 7) {
        const days = ["일", "월", "화", "수", "목", "금", "토"];
        return days[date.getDay()] + "요일";
    } else {
        return `${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
}

export default function ChatsScreen() {
    const { user } = useUser();
    const { isConnected, onlineStatus } = useWebSocket();
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [chatRooms, setChatRooms] = useState<ApiChat[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadChatRooms = useCallback(async () => {
        if (!user) return;
        setIsLoading(true);
        try {
            const data = await api.getChats(user.id);
            setChatRooms(data);
        } catch (error) {
            console.error("Failed to load chats:", error);
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    useEffect(() => {
        loadChatRooms();
    }, [loadChatRooms]);

    const handleChatPress = (chat: ApiChat) => {
        if (chat.type === "direct" && chat.friend) {
            router.push(`/chat/${chat.friend.id}`);
        } else if (chat.type === "room") {
            router.push(`/room/${chat.id}`);
        }
    };

    const renderChatRoom = ({ item }: { item: ApiChat }) => {
        const isDirect = item.type === "direct";
        const characterType = item.friend?.characterType || "cat";
        const characterColor = item.friend?.characterColor || colors.gray[400];
        const name = isDirect ? item.friend?.name || "익명" : item.name || `방 ${item.id}`;
        const emoji = CHARACTER_EMOJIS[characterType as keyof typeof CHARACTER_EMOJIS] || "🐱";
        const isOnline = isDirect && item.friend && onlineStatus[item.friend.id];

        return (
            <Pressable
                className="flex-row items-center py-4 px-5 bg-background-0 border-b border-outline-100 active:bg-background-50"
                onPress={() => handleChatPress(item)}
            >
                <Box className="relative mr-4">
                    <Box
                        className="w-14 h-14 rounded-full border-[3px] justify-center items-center bg-background-0"
                        style={{ borderColor: characterColor }}
                    >
                        <Text className="text-3xl">{emoji}</Text>
                    </Box>
                    {isDirect && (
                        <Box
                            className={`absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-background-0 ${
                                isOnline ? "bg-success-500" : "bg-outline-400"
                            }`}
                        />
                    )}
                    {!isDirect && (
                        <Box className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-primary-500 justify-center items-center border-2 border-background-0">
                            <Ionicons name="people" size={10} color={colors.white} />
                        </Box>
                    )}
                </Box>
                <VStack className="flex-1 justify-center">
                    <HStack className="justify-between items-center mb-1">
                        <Text size="lg" bold className="flex-1 mr-2" numberOfLines={1}>
                            {name}
                        </Text>
                        {item.lastMessage && (
                            <Text size="sm" className="text-typography-500">
                                {formatTime(item.lastMessage.timestamp)}
                            </Text>
                        )}
                    </HStack>
                    <HStack className="items-center">
                        <Text
                            size="md"
                            className="text-typography-600 flex-1 mr-2"
                            numberOfLines={1}
                        >
                            {item.lastMessage?.content || "새로운 대화를 시작하세요"}
                        </Text>
                        {item.unreadCount > 0 && (
                            <Box className="bg-error-500 min-w-[20px] h-5 rounded-full justify-center items-center px-1.5">
                                <Text size="xs" bold className="text-typography-0">
                                    {item.unreadCount > 99 ? "99+" : item.unreadCount}
                                </Text>
                            </Box>
                        )}
                    </HStack>
                </VStack>
            </Pressable>
        );
    };

    if (isLoading) {
        return (
            <Box className="flex-1 justify-center items-center bg-background-0">
                <Spinner size="large" />
            </Box>
        );
    }

    return (
        <Box className="flex-1 bg-background-0">
            <HStack
                className="justify-between items-center px-5 pb-4 bg-background-0 border-b border-outline-100"
                style={{ paddingTop: insets.top + 8 }}
            >
                <Heading size="2xl">채팅</Heading>
                <HStack>
                    <Pressable className="p-2">
                        <Ionicons name="create-outline" size={24} color={colors.primary.DEFAULT} />
                    </Pressable>
                </HStack>
            </HStack>

            <HStack className="items-center px-5 py-2 bg-background-50">
                <Box
                    className={`w-2 h-2 rounded-full mr-2 ${
                        isConnected ? "bg-success-500" : "bg-warning-500"
                    }`}
                />
                <Text size="sm" className="text-typography-600">
                    {isConnected ? "연결됨" : "연결 중..."}
                </Text>
            </HStack>

            {chatRooms.length === 0 ? (
                <VStack className="flex-1 justify-center items-center px-8">
                    <Ionicons name="chatbubbles-outline" size={64} color={colors.gray[400]} />
                    <Text size="xl" className="text-typography-500 mt-6 font-medium">
                        채팅이 없습니다
                    </Text>
                    <Text size="md" className="text-typography-400 mt-2">
                        친구와 대화를 시작해보세요!
                    </Text>
                </VStack>
            ) : (
                <FlatList
                    data={chatRooms}
                    renderItem={renderChatRoom}
                    keyExtractor={(item) => item.id}
                    contentContainerClassName="py-2"
                    showsVerticalScrollIndicator={false}
                    onRefresh={loadChatRooms}
                    refreshing={isLoading}
                />
            )}
        </Box>
    );
}
