import React, { useState } from "react";
import { ScrollView, Switch, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser, useLocation } from "../../contexts";
import {
    CharacterType,
    CHARACTER_TYPES,
    CHARACTER_EMOJIS,
    CHARACTER_NAMES,
    CHARACTER_COLORS,
} from "@location-messenger/shared";
import { colors } from "../../constants/design";
import {
    Box,
    VStack,
    HStack,
    Text,
    Heading,
    Input,
    InputField,
    Pressable,
    Spinner,
} from "../../components/ui";

export default function ProfileScreen() {
    const { user, logout, updateCharacter, toggleLocationSharing, updateProfile } = useUser();
    const { isTracking, startTracking, stopTracking } = useLocation();
    const insets = useSafeAreaInsets();
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user?.name || "");

    const handleCharacterSelect = async (type: CharacterType) => {
        if (user) {
            await updateCharacter(type, user.characterColor);
        }
    };

    const handleColorSelect = async (color: string) => {
        if (user) {
            await updateCharacter(user.characterType, color);
        }
    };

    const handleLocationToggle = async (enabled: boolean) => {
        await toggleLocationSharing(enabled);
        if (enabled) {
            await startTracking();
        } else {
            await stopTracking();
        }
    };

    const handleLogout = async () => {
        Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
            { text: "취소", style: "cancel" },
            {
                text: "로그아웃",
                style: "destructive",
                onPress: async () => {
                    await stopTracking();
                    await logout();
                    router.replace("/");
                },
            },
        ]);
    };

    const handleSaveName = async () => {
        if (editedName.trim()) {
            await updateProfile(editedName.trim());
            setIsEditing(false);
        }
    };

    if (!user) {
        return (
            <Box className="flex-1 justify-center items-center bg-background-0">
                <Spinner size="large" />
            </Box>
        );
    }

    return (
        <ScrollView className="flex-1 bg-background-50" contentContainerClassName="pb-10">
            <Box className="px-5 pb-4 bg-background-0" style={{ paddingTop: insets.top + 8 }}>
                <Heading size="2xl">내 정보</Heading>
            </Box>

            <HStack className="items-center bg-background-0 px-5 py-5 mb-3 border-b border-outline-100">
                <Box
                    className="w-20 h-20 rounded-full border-4 justify-center items-center bg-background-0 mr-4 shadow-soft-1"
                    style={{ borderColor: user.characterColor }}
                >
                    <Text className="text-4xl">{CHARACTER_EMOJIS[user.characterType]}</Text>
                </Box>
                <VStack className="flex-1">
                    {isEditing ? (
                        <HStack className="items-center">
                            <Input variant="underlined" size="md" className="flex-1">
                                <InputField
                                    value={editedName}
                                    onChangeText={setEditedName}
                                    autoFocus
                                    className="text-xl font-bold"
                                />
                            </Input>
                            <Pressable onPress={handleSaveName} className="ml-2 p-2">
                                <Ionicons
                                    name="checkmark"
                                    size={24}
                                    color={colors.secondary.DEFAULT}
                                />
                            </Pressable>
                        </HStack>
                    ) : (
                        <Pressable onPress={() => setIsEditing(true)}>
                            <Heading size="xl" className="mb-1">
                                {user.name || "이름 없음"}
                            </Heading>
                            <Text size="sm" className="text-secondary-500 mb-1">
                                탭하여 수정
                            </Text>
                        </Pressable>
                    )}
                    <Text size="md" className="text-typography-500">
                        {user.email}
                    </Text>
                </VStack>
            </HStack>

            <VStack
                className="bg-background-0 mb-3 px-5 py-5 border-y border-outline-100"
                space="md"
            >
                <Heading size="md">캐릭터 선택</Heading>
                <HStack className="flex-wrap -mx-2">
                    {CHARACTER_TYPES.map((type) => (
                        <Pressable
                            key={type}
                            className={`w-1/3 items-center py-3 px-2 rounded-xl border-2 ${
                                user.characterType === type
                                    ? "border-secondary-500 bg-secondary-50"
                                    : "border-transparent"
                            }`}
                            onPress={() => handleCharacterSelect(type)}
                        >
                            <Text className="text-3xl mb-1">{CHARACTER_EMOJIS[type]}</Text>
                            <Text size="sm" className="text-typography-600">
                                {CHARACTER_NAMES[type]}
                            </Text>
                        </Pressable>
                    ))}
                </HStack>
            </VStack>

            <VStack
                className="bg-background-0 mb-3 px-5 py-5 border-y border-outline-100"
                space="md"
            >
                <Heading size="md">캐릭터 색상</Heading>
                <HStack className="flex-wrap -mx-1.5">
                    {CHARACTER_COLORS.map((color) => (
                        <Pressable
                            key={color}
                            className={`w-11 h-11 rounded-full m-1.5 justify-center items-center ${
                                user.characterColor === color
                                    ? "border-[3px] border-typography-900"
                                    : ""
                            }`}
                            style={{ backgroundColor: color }}
                            onPress={() => handleColorSelect(color)}
                        >
                            {user.characterColor === color && (
                                <Ionicons name="checkmark" size={20} color="#FFF" />
                            )}
                        </Pressable>
                    ))}
                </HStack>
            </VStack>

            <VStack
                className="bg-background-0 mb-3 px-5 py-5 border-y border-outline-100"
                space="md"
            >
                <Heading size="md">설정</Heading>

                <HStack className="items-center justify-between py-2">
                    <HStack className="items-center flex-1">
                        <Ionicons name="location" size={24} color={colors.secondary.DEFAULT} />
                        <VStack className="ml-3 flex-1">
                            <Text size="lg" bold>
                                위치 공유
                            </Text>
                            <Text size="sm" className="text-typography-500 mt-0.5">
                                {user.locationSharingEnabled
                                    ? "친구들에게 내 위치가 표시됩니다"
                                    : "위치 공유가 꺼져 있습니다"}
                            </Text>
                        </VStack>
                    </HStack>
                    <Switch
                        value={user.locationSharingEnabled}
                        onValueChange={handleLocationToggle}
                        trackColor={{ false: colors.gray[300], true: colors.success[500] }}
                        thumbColor={user.locationSharingEnabled ? colors.white : colors.gray[100]}
                    />
                </HStack>

                {isTracking && (
                    <HStack className="items-center mt-2 pt-4 border-t border-outline-100">
                        <Box className="w-2 h-2 rounded-full bg-success-500 mr-2" />
                        <Text size="sm" className="text-success-600">
                            위치 추적 중...
                        </Text>
                    </HStack>
                )}
            </VStack>

            <Box className="bg-background-0 mb-3 px-5 py-4 border-y border-outline-100">
                <Pressable
                    className="flex-row items-center justify-center py-3.5 rounded-xl bg-error-50 border border-error-200 active:bg-error-100"
                    onPress={handleLogout}
                >
                    <Ionicons name="log-out-outline" size={20} color={colors.error[500]} />
                    <Text size="lg" bold className="text-error-600 ml-2">
                        로그아웃
                    </Text>
                </Pressable>
            </Box>

            <Box className="items-center py-6">
                <Text size="sm" className="text-typography-400">
                    Location Messenger v1.0.0
                </Text>
            </Box>
        </ScrollView>
    );
}
