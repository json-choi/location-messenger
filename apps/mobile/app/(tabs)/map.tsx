import React, { useEffect, useMemo, useState, useRef } from "react";
import { ScrollView, KeyboardAvoidingView, Platform, Share, Alert, Modal } from "react-native";
import { useRouter } from "expo-router";
import MapView, { Marker, Circle, PROVIDER_GOOGLE, Region } from "react-native-maps";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { GestureHandlerRootView, GestureDetector, Gesture } from "react-native-gesture-handler";
import {
    MapMarker,
    CHARACTER_EMOJIS,
    calculateDistance,
    calculateETA,
    formatETA,
    RoomInfo,
} from "@location-messenger/shared";
import { useUser, useWebSocket, useLocation } from "../../contexts";
import CharacterMarker from "../../components/CharacterMarker";
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
import { colors } from "../../constants/design";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3001";

const DRAG_BAR_HEIGHT = 24;
const MIN_CHAT_HEIGHT = 80;
const MAX_CHAT_HEIGHT = 400;

interface DestinationInput {
    lat: number;
    lng: number;
    name: string;
}

export default function MapScreen() {
    const router = useRouter();
    const { user, currentRoom, setCurrentRoom, verifyUser } = useUser();
    const {
        friendLocations,
        roomInfo,
        roomMessages,
        isConnected,
        connect,
        joinRoom,
        sendRoomChat,
    } = useWebSocket();
    const { currentLocation, requestPermission } = useLocation();

    const [chatInput, setChatInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showDestinationModal, setShowDestinationModal] = useState(false);
    const [pendingDestination, setPendingDestination] = useState<DestinationInput | null>(null);
    const [destinationName, setDestinationName] = useState("");

    const chatHeight = useSharedValue(MIN_CHAT_HEIGHT);
    const scrollViewRef = useRef<ScrollView>(null);
    const mapRef = useRef<MapView>(null);

    useEffect(() => {
        requestPermission();
    }, []);

    useEffect(() => {
        if (user && !isConnected) {
            connect(user.id);
        }
    }, [user, isConnected]);

    useEffect(() => {
        if (roomMessages.length > 0 && scrollViewRef.current) {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }
    }, [roomMessages]);

    const region: Region | undefined = useMemo(() => {
        if (!currentLocation) return undefined;
        return {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        };
    }, [currentLocation]);

    const markers: MapMarker[] = useMemo(() => {
        const roomMembers = roomInfo?.members || [];
        return roomMembers
            .map((member) => {
                const location = friendLocations[member.userId];
                return {
                    id: `marker-${member.userId}`,
                    userId: member.userId,
                    lat: location?.lat || 0,
                    lng: location?.lng || 0,
                    characterType: member.user?.characterType || "cat",
                    characterColor: member.user?.characterColor || "#FF6B6B",
                    name: member.user?.name || "익명",
                    isOnline: !!location,
                    lastSeen: location?.timestamp,
                };
            })
            .filter((m) => m.lat !== 0);
    }, [roomInfo, friendLocations]);

    const myEta = useMemo(() => {
        if (!currentLocation || !roomInfo?.destinationLat || !roomInfo?.destinationLng) return null;
        const distance = calculateDistance(
            currentLocation.coords.latitude,
            currentLocation.coords.longitude,
            roomInfo.destinationLat,
            roomInfo.destinationLng,
        );
        const speed = currentLocation.coords.speed || 0;
        return {
            distance: distance.toFixed(2),
            eta: formatETA(calculateETA(distance, speed)),
        };
    }, [currentLocation, roomInfo]);

    const createRoom = async () => {
        if (!user) return;
        setIsLoading(true);
        try {
            const isValid = await verifyUser();
            if (!isValid) {
                Alert.alert("오류", "사용자 정보가 유효하지 않습니다. 다시 시작해주세요.", [
                    { text: "확인", onPress: () => router.replace("/onboarding") },
                ]);
                return;
            }

            const response = await fetch(`${API_URL}/api/rooms`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user.id }),
            });
            const data = await response.json();

            if (!response.ok) {
                console.error("API error:", data);
                Alert.alert("오류", data.error || "방 생성에 실패했습니다.");
                return;
            }

            setCurrentRoom({
                code: data.room.code,
                members: data.room.members.map((m: any) => ({
                    userId: m.userId,
                    user: m.user,
                })),
            });
            joinRoom(user.id, data.room.code);
        } catch (error) {
            console.error("Failed to create room:", error);
            Alert.alert("오류", "방 생성에 실패했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    const shareRoomLink = async () => {
        if (!currentRoom) return;
        const link = `locationmessenger://room/${currentRoom.code}`;
        try {
            await Share.share({
                message: `내 위치를 확인하세요! 👋\n\n${link}`,
                title: "위치 공유 초대",
            });
        } catch (error) {
            console.error("Failed to share:", error);
        }
    };

    const sendMessage = () => {
        if (!chatInput.trim() || !currentRoom) return;
        sendRoomChat(currentRoom.code, chatInput.trim());
        setChatInput("");
    };

    const setDestination = async () => {
        if (!pendingDestination || !currentRoom) return;

        try {
            await fetch(`${API_URL}/api/rooms/${currentRoom.code}/destination`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    lat: pendingDestination.lat,
                    lng: pendingDestination.lng,
                    name: destinationName || "목표지점",
                }),
            });

            setShowDestinationModal(false);
            setPendingDestination(null);
            setDestinationName("");
        } catch (error) {
            console.error("Failed to set destination:", error);
            Alert.alert("오류", "목표지점 설정에 실패했습니다.");
        }
    };

    const clearDestination = async () => {
        if (!currentRoom) return;

        try {
            await fetch(`${API_URL}/api/rooms/${currentRoom.code}/destination`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ lat: null, lng: null, name: null }),
            });
        } catch (error) {
            console.error("Failed to clear destination:", error);
        }
    };

    const handleMapLongPress = (event: any) => {
        if (!currentRoom) {
            Alert.alert("알림", "먼저 방을 만들어주세요.");
            return;
        }

        const { latitude, longitude } = event.nativeEvent.coordinate || {};
        if (latitude && longitude) {
            setPendingDestination({ lat: latitude, lng: longitude, name: "" });
            setDestinationName("");
            setShowDestinationModal(true);
        }
    };

    const gesture = Gesture.Pan()
        .onUpdate((e) => {
            const newHeight = Math.max(
                MIN_CHAT_HEIGHT,
                Math.min(MAX_CHAT_HEIGHT, chatHeight.value - e.translationY),
            );
            chatHeight.value = newHeight;
        })
        .onEnd(() => {
            if (chatHeight.value > (MAX_CHAT_HEIGHT + MIN_CHAT_HEIGHT) / 2) {
                chatHeight.value = withSpring(MAX_CHAT_HEIGHT);
            } else {
                chatHeight.value = withSpring(MIN_CHAT_HEIGHT);
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        height: chatHeight.value,
    }));

    return (
        <GestureHandlerRootView className="flex-1 bg-background-0">
            {/* Map */}
            <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
                initialRegion={{
                    latitude: region?.latitude || 37.5665,
                    longitude: region?.longitude || 126.978,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                showsUserLocation
                onLongPress={handleMapLongPress}
            >
                {roomInfo?.destinationLat && roomInfo?.destinationLng && (
                    <>
                        <Marker
                            coordinate={{
                                latitude: roomInfo.destinationLat,
                                longitude: roomInfo.destinationLng,
                            }}
                            title={roomInfo.destinationName || "목표지점"}
                        >
                            <Box className="w-10 h-10 justify-center items-center">
                                <Text className="text-3xl">🎯</Text>
                            </Box>
                        </Marker>
                        <Circle
                            center={{
                                latitude: roomInfo.destinationLat,
                                longitude: roomInfo.destinationLng,
                            }}
                            radius={100}
                            fillColor="rgba(0, 165, 207, 0.2)"
                            strokeColor="rgba(0, 165, 207, 0.5)"
                        />
                    </>
                )}

                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={{ latitude: marker.lat, longitude: marker.lng }}
                        title={marker.name}
                    >
                        <CharacterMarker
                            type={marker.characterType}
                            color={marker.characterColor}
                            name={marker.name}
                            isOnline={marker.isOnline}
                        />
                    </Marker>
                ))}
            </MapView>

            {!currentLocation && (
                <Box className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center">
                    <HStack className="bg-background-0/95 px-4 py-3 rounded-xl items-center shadow-soft-1">
                        <Spinner size="small" color={colors.secondary.DEFAULT} />
                        <Text size="md" className="ml-3 text-typography-600">
                            위치 불러오는 중...
                        </Text>
                    </HStack>
                </Box>
            )}

            {/* Top Bar */}
            <Box
                pointerEvents="box-none"
                className="absolute top-[50px] left-5 right-5 flex-row justify-between items-start"
            >
                {currentRoom && (
                    <HStack className="bg-background-0/95 pl-4 pr-2 py-2 rounded-2xl shadow-soft-1 items-center">
                        <VStack className="mr-3">
                            <Text size="sm" bold className="text-typography-900">
                                방 코드: {currentRoom.code}
                            </Text>
                            <Text size="xs" className="text-typography-500">
                                참여 {roomInfo?.members.length || 1}명
                            </Text>
                        </VStack>
                        <Pressable
                            onPress={shareRoomLink}
                            className="w-8 h-8 bg-primary-50 rounded-full items-center justify-center"
                        >
                            <Text size="sm">🔗</Text>
                        </Pressable>
                    </HStack>
                )}
                {myEta && (
                    <VStack className="bg-secondary-500/95 px-4 py-2.5 rounded-2xl items-center shadow-soft-1">
                        <Text size="xs" className="text-typography-0/80">
                            목표까지
                        </Text>
                        <Text size="lg" bold className="text-typography-0">
                            {myEta.distance}km
                        </Text>
                        <Text size="xs" className="text-typography-0/90">
                            약 {myEta.eta}
                        </Text>
                    </VStack>
                )}
            </Box>

            {/* Action Buttons */}
            {!currentRoom && (
                <Box className="absolute bottom-[100px] left-5 right-5">
                    <Button
                        size="xl"
                        className="w-full bg-primary-500 shadow-soft-1 rounded-2xl"
                        onPress={createRoom}
                        isDisabled={isLoading}
                    >
                        {isLoading ? <ButtonSpinner /> : <ButtonText>새 방 만들기</ButtonText>}
                    </Button>
                </Box>
            )}

            {/* Floating Action Buttons */}
            {currentRoom && (
                <Box pointerEvents="box-none" className="absolute bottom-[120px] right-5 items-end">
                    {!roomInfo?.destinationLat ? (
                        <Pressable
                            className="h-12 px-4 bg-secondary-500 rounded-full flex-row items-center justify-center shadow-hard-2"
                            onPress={() => {
                                if (currentLocation) {
                                    setPendingDestination({
                                        lat: currentLocation.coords.latitude + 0.001,
                                        lng: currentLocation.coords.longitude + 0.001,
                                        name: "",
                                    });
                                    setDestinationName("");
                                    setShowDestinationModal(true);
                                }
                            }}
                        >
                            <Text className="text-lg mr-1">🎯</Text>
                            <Text className="text-typography-0 font-bold">목표지점</Text>
                        </Pressable>
                    ) : (
                        <Pressable
                            className="h-12 px-4 bg-background-0 rounded-full flex-row items-center justify-center shadow-hard-2 border border-outline-100"
                            onPress={clearDestination}
                        >
                            <Text className="text-lg mr-1">✕</Text>
                            <Text className="text-typography-900 font-bold">목표 삭제</Text>
                        </Pressable>
                    )}
                </Box>
            )}

            {/* Destination Modal */}
            <Modal
                visible={showDestinationModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowDestinationModal(false)}
            >
                <Box className="flex-1 bg-background-950/50 justify-center items-center">
                    <VStack
                        className="bg-background-0 rounded-2xl p-6 w-[85%] max-w-[320px]"
                        space="md"
                    >
                        <Heading size="xl" className="text-center">
                            목표지점 설정
                        </Heading>
                        <Text size="md" className="text-typography-600 text-center mb-2">
                            목표지점의 이름을 입력하세요
                        </Text>
                        <Input size="lg" variant="outline" className="mb-2">
                            <InputField
                                value={destinationName}
                                onChangeText={setDestinationName}
                                placeholder="예: 강남역, 우리 집..."
                                autoFocus
                            />
                        </Input>
                        <HStack space="md">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onPress={() => {
                                    setShowDestinationModal(false);
                                    setPendingDestination(null);
                                }}
                            >
                                <ButtonText>취소</ButtonText>
                            </Button>
                            <Button className="flex-1 bg-secondary-500" onPress={setDestination}>
                                <ButtonText>설정</ButtonText>
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
            </Modal>

            {/* Chat Panel */}
            <Animated.View
                className="absolute bottom-0 left-0 right-0 bg-background-0 rounded-t-3xl shadow-hard-5 border border-outline-100"
                style={animatedStyle}
            >
                <GestureDetector gesture={gesture}>
                    <Box className="h-6 justify-center items-center bg-transparent">
                        <Box className="w-10 h-1.5 bg-outline-300 rounded-full" />
                    </Box>
                </GestureDetector>

                {currentRoom ? (
                    <>
                        <ScrollView
                            ref={scrollViewRef}
                            className="flex-1 px-4"
                            contentContainerClassName="py-2"
                        >
                            {roomMessages.map((msg) => (
                                <Box
                                    key={msg.id}
                                    className={`max-w-[80%] py-2 px-4 rounded-2xl my-1 ${
                                        msg.isMine
                                            ? "self-end bg-secondary-500 rounded-br-sm"
                                            : "self-start bg-background-100 rounded-bl-sm"
                                    }`}
                                >
                                    {!msg.isMine && (
                                        <Text size="2xs" className="text-typography-500 mb-0.5">
                                            {msg.senderId.substring(0, 4)}
                                        </Text>
                                    )}
                                    <Text
                                        size="md"
                                        className={
                                            msg.isMine ? "text-typography-0" : "text-typography-900"
                                        }
                                    >
                                        {msg.content}
                                    </Text>
                                </Box>
                            ))}
                        </ScrollView>

                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : undefined}
                            keyboardVerticalOffset={0}
                        >
                            <HStack className="px-4 pb-4 pt-2 border-t border-outline-100 items-center">
                                <Input
                                    variant="outline"
                                    size="md"
                                    className="flex-1 mr-2 bg-background-50 rounded-full"
                                >
                                    <InputField
                                        value={chatInput}
                                        onChangeText={setChatInput}
                                        placeholder="메시지 입력..."
                                        onSubmitEditing={sendMessage}
                                        returnKeyType="send"
                                    />
                                </Input>
                                <Button
                                    size="md"
                                    className="rounded-full bg-secondary-500 px-5"
                                    onPress={sendMessage}
                                    isDisabled={!chatInput.trim()}
                                >
                                    <ButtonText>전송</ButtonText>
                                </Button>
                            </HStack>
                        </KeyboardAvoidingView>
                    </>
                ) : (
                    <Box className="flex-1 justify-center items-center p-5">
                        <Text size="lg" className="text-typography-400 text-center">
                            방을 만들어 위치를 공유해보세요!
                        </Text>
                    </Box>
                )}
            </Animated.View>
        </GestureHandlerRootView>
    );
}
