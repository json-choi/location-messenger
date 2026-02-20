import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
    CharacterType,
    CharacterColor,
    CHARACTER_TYPES,
    CHARACTER_EMOJIS,
    CHARACTER_NAMES,
    CHARACTER_COLORS,
} from "@location-messenger/shared";
import { useUser } from "../contexts";
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
} from "../components/ui";

export default function OnboardingScreen() {
    const router = useRouter();
    const { onboard } = useUser();
    const [name, setName] = useState("");
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>("cat");
    const [selectedColor, setSelectedColor] = useState<CharacterColor>(CHARACTER_COLORS[0]);
    const [isLoading, setIsLoading] = useState(false);

    const handleStart = async () => {
        if (!name.trim()) return;

        setIsLoading(true);
        try {
            await onboard(name.trim(), selectedCharacter, selectedColor);
            router.replace("/(tabs)/map");
        } catch (error) {
            console.error("Onboarding failed:", error);
            Alert.alert(
                "오류",
                "서버에 연결할 수 없습니다. 인터넷 연결을 확인하고 다시 시도해주세요.",
                [{ text: "확인" }],
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView className="flex-1 bg-background-0" contentContainerClassName="p-6 pt-20">
            <VStack space="xl" className="mb-10">
                <VStack space="sm">
                    <Heading size="3xl">환영해요! 👋</Heading>
                    <Text size="lg" className="text-typography-500">
                        캐릭터를 선택하고 이름을 정해주세요
                    </Text>
                </VStack>

                {/* Name Input */}
                <VStack space="md">
                    <Text size="lg" bold>
                        이름
                    </Text>
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

                {/* Character Selection */}
                <VStack space="md">
                    <Text size="lg" bold>
                        캐릭터 선택
                    </Text>
                    <HStack className="flex-wrap -mx-2">
                        {CHARACTER_TYPES.map((type) => (
                            <Pressable
                                key={type}
                                className={`w-1/3 items-center py-4 px-2 rounded-xl border-2 ${
                                    selectedCharacter === type
                                        ? "border-secondary-500 bg-secondary-50"
                                        : "border-transparent"
                                }`}
                                onPress={() => setSelectedCharacter(type)}
                            >
                                <Text className="text-4xl mb-2">{CHARACTER_EMOJIS[type]}</Text>
                                <Text size="sm" className="text-typography-600">
                                    {CHARACTER_NAMES[type]}
                                </Text>
                            </Pressable>
                        ))}
                    </HStack>
                </VStack>

                {/* Color Selection */}
                <VStack space="md">
                    <Text size="lg" bold>
                        색상 선택
                    </Text>
                    <HStack className="flex-wrap -mx-1.5">
                        {CHARACTER_COLORS.map((color) => (
                            <Pressable
                                key={color}
                                className={`w-11 h-11 rounded-full m-1.5 justify-center items-center ${
                                    selectedColor === color
                                        ? "border-[3px] border-typography-900"
                                        : ""
                                }`}
                                style={{ backgroundColor: color }}
                                onPress={() => setSelectedColor(color)}
                            >
                                {selectedColor === color && (
                                    <Ionicons name="checkmark" size={20} color="#FFF" />
                                )}
                            </Pressable>
                        ))}
                    </HStack>
                </VStack>

                {/* Preview */}
                <VStack space="md" className="items-center">
                    <Text size="lg" bold>
                        미리보기
                    </Text>
                    <VStack className="items-center p-6 bg-background-50 rounded-2xl w-full border border-outline-100">
                        <Box
                            className="w-24 h-24 rounded-full border-4 justify-center items-center bg-background-0 mb-4 shadow-soft-1"
                            style={{ borderColor: selectedColor }}
                        >
                            <Text className="text-5xl">{CHARACTER_EMOJIS[selectedCharacter]}</Text>
                        </Box>
                        <Heading size="xl">{name || "이름을 입력하세요"}</Heading>
                    </VStack>
                </VStack>

                {/* Start Button */}
                <Button
                    size="xl"
                    variant="solid"
                    className="w-full mt-4 mb-10 bg-secondary-500"
                    onPress={handleStart}
                    isDisabled={!name.trim() || isLoading}
                >
                    {isLoading ? <ButtonSpinner /> : <ButtonText>시작하기</ButtonText>}
                </Button>
            </VStack>
        </ScrollView>
    );
}
