import { CharacterType, CharacterDirection } from "@location-messenger/shared";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
    Easing,
} from "react-native-reanimated";
import CharacterSprite from "./CharacterSprite";
import { AnimationName } from "../lib/characters";

interface CharacterMarkerProps {
    type: CharacterType;
    color: string;
    name?: string;
    isOnline?: boolean;
    size?: "small" | "medium" | "large";
    direction?: CharacterDirection;
    isMoving?: boolean;
}

const SIZE_CONFIG = {
    small: { sprite: 48 },
    medium: { sprite: 64 },
    large: { sprite: 80 },
};

export default function CharacterMarker({
    type,
    color,
    name,
    isOnline = true,
    size = "medium",
    direction = "south",
    isMoving = false,
}: CharacterMarkerProps) {
    const config = SIZE_CONFIG[size];
    const animation: AnimationName = isMoving ? "walking" : "idle";
    const translateY = useSharedValue(0);

    useEffect(() => {
        translateY.value = withTiming(0, { duration: 200 });
    }, [isOnline, isMoving]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    return (
        <View style={styles.wrapper}>
            {name && (
                <View style={[styles.nameTag, { backgroundColor: color }]}>
                    <Text style={styles.nameText} numberOfLines={1}>
                        {name}
                    </Text>
                    <View style={[styles.nameTagTail, { backgroundColor: color }]} />
                </View>
            )}

            <View style={styles.spriteContainer}>
                <View
                    style={[
                        styles.shadow,
                        {
                            width: config.sprite * 0.35,
                            height: config.sprite * 0.25,
                            bottom: 0,
                            opacity: 0.3,
                        },
                    ]}
                />
                <Animated.View style={[animatedStyle, { opacity: isOnline ? 1 : 0.45 }]}>
                    <CharacterSprite
                        type={type}
                        direction={direction}
                        animation={animation}
                        size={config.sprite}
                    />
                </Animated.View>
            </View>

            {!isOnline && (
                <View style={styles.offlineBadge}>
                    <Text style={styles.offlineText}>오프라인</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    spriteContainer: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    shadow: {
        position: "absolute",
        backgroundColor: "#030712",
        borderRadius: 9999,
    },
    nameTag: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        marginBottom: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2,
    },
    nameText: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "700",
        textAlign: "center",
    },
    nameTagTail: {
        position: "absolute",
        bottom: -4,
        left: "50%",
        marginLeft: -4,
        width: 8,
        height: 8,
        transform: [{ rotate: "45deg" }],
    },
    offlineBadge: {
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 6,
        paddingVertical: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 8,
    },
    offlineText: {
        color: "#FFFFFF",
        fontSize: 9,
        fontWeight: "600",
    },
});
