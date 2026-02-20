import React, { useState, useEffect, useCallback } from "react";
import { FlatList, Switch, Alert, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser, useWebSocket } from "../../contexts";
import { CHARACTER_EMOJIS, CHARACTER_NAMES } from "@location-messenger/shared";
import { api, ApiFriend } from "../../lib/api";
import { colors } from "../../constants/design";
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
    Spinner,
} from "../../components/ui";

export default function FriendsScreen() {
    const { user } = useUser();
    const { onlineStatus, friendLocations, isConnected } = useWebSocket();
    const insets = useSafeAreaInsets();
    const [friends, setFriends] = useState<ApiFriend[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [friendCode, setFriendCode] = useState("");
    const [isAdding, setIsAdding] = useState(false);

    const loadFriends = useCallback(async () => {
        if (!user) return;
        setIsLoading(true);
        try {
            const data = await api.getFriends(user.id);
            setFriends(data);
        } catch (error) {
            console.error("Failed to load friends:", error);
            Alert.alert("오류", "친구 목록을 불러오는데 실패했습니다.");
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    useEffect(() => {
        loadFriends();
    }, [loadFriends]);

    const handleAddFriend = async () => {
        if (!user || !friendCode.trim()) return;
        setIsAdding(true);
        try {
            await api.addFriend(user.id, friendCode.trim());
            setShowAddModal(false);
            setFriendCode("");
            Alert.alert("성공", "친구 요청을 보냈습니다.");
        } catch (error) {
            Alert.alert("오류", "친구 요청에 실패했습니다.");
        } finally {
            setIsAdding(false);
        }
    };

    const toggleLocationSharing = (friendId: string, enabled: boolean) => {
        setFriends((prev) =>
            prev.map((f) =>
                f.userId === friendId ? { ...f, locationSharingEnabled: enabled } : f,
            ),
        );
    };

    const renderFriend = ({ item }: { item: ApiFriend }) => {
        const emoji = CHARACTER_EMOJIS[item.characterType as keyof typeof CHARACTER_EMOJIS] || "🐱";
        const characterName =
            CHARACTER_NAMES[item.characterType as keyof typeof CHARACTER_NAMES] || "캐릭터";
        const isOnline = onlineStatus[item.userId] || !!friendLocations[item.userId];

        return (
            <HStack className="items-center py-4 px-5 bg-background-0 border-b border-outline-100">
                <Box className="relative mr-4">
                    <Box
                        className="w-12 h-12 rounded-full border-[3px] justify-center items-center bg-background-0"
                        style={{ borderColor: item.characterColor }}
                    >
                        <Text className="text-2xl">{emoji}</Text>
                    </Box>
                    <Box
                        className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-background-0 ${
                            isOnline ? "bg-success-500" : "bg-outline-400"
                        }`}
                    />
                </Box>
                <VStack className="flex-1">
                    <Text size="lg" bold className="mb-0.5">
                        {item.name || "익명"}
                    </Text>
                    <Text size="sm" className="text-typography-600">
                        {characterName}
                    </Text>
                </VStack>
                <HStack className="items-center">
                    <Switch
                        value={item.locationSharingEnabled}
                        onValueChange={(value: boolean) =>
                            toggleLocationSharing(item.userId, value)
                        }
                        trackColor={{ false: colors.gray[300], true: colors.secondary.DEFAULT }}
                        thumbColor={item.locationSharingEnabled ? colors.white : colors.gray[100]}
                    />
                </HStack>
            </HStack>
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
                <Heading size="2xl">친구</Heading>
                <Pressable className="p-2" onPress={() => setShowAddModal(true)}>
                    <Ionicons name="person-add" size={24} color={colors.primary.DEFAULT} />
                </Pressable>
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

            {friends.length === 0 ? (
                <VStack className="flex-1 justify-center items-center px-8">
                    <Ionicons name="people-outline" size={64} color={colors.gray[400]} />
                    <Text size="lg" className="text-typography-500 mt-6 mb-8">
                        아직 친구가 없습니다
                    </Text>
                    <Button size="lg" onPress={() => setShowAddModal(true)}>
                        <ButtonText>친구 추가하기</ButtonText>
                    </Button>
                </VStack>
            ) : (
                <FlatList
                    data={friends}
                    renderItem={renderFriend}
                    keyExtractor={(item) => item.id}
                    contentContainerClassName="py-2"
                    showsVerticalScrollIndicator={false}
                    onRefresh={loadFriends}
                    refreshing={isLoading}
                />
            )}

            <Modal
                visible={showAddModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowAddModal(false)}
            >
                <Box className="flex-1 bg-background-950/50 justify-center items-center">
                    <VStack
                        className="bg-background-0 rounded-2xl p-6 w-[85%] max-w-[320px]"
                        space="md"
                    >
                        <Heading size="xl" className="text-center">
                            친구 추가
                        </Heading>
                        <Text size="md" className="text-typography-600 text-center mb-2">
                            친구의 사용자 ID를 입력하세요
                        </Text>

                        <Input size="lg" variant="outline" className="mb-2">
                            <InputField
                                value={friendCode}
                                onChangeText={setFriendCode}
                                placeholder="사용자 ID"
                                autoFocus
                            />
                        </Input>

                        <HStack space="md">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onPress={() => {
                                    setShowAddModal(false);
                                    setFriendCode("");
                                }}
                            >
                                <ButtonText>취소</ButtonText>
                            </Button>
                            <Button
                                className="flex-1"
                                onPress={handleAddFriend}
                                isDisabled={isAdding || !friendCode.trim()}
                            >
                                {isAdding ? <ButtonSpinner /> : <ButtonText>추가</ButtonText>}
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
            </Modal>
        </Box>
    );
}
