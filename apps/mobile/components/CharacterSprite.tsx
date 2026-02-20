import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Canvas, Image, useImage } from "@shopify/react-native-skia";
import { CharacterType, CharacterDirection } from "@location-messenger/shared";
import { AnimationName, getCharacterFrames, getCharacterRotation } from "../lib/characters";

const IDLE_FPS = 8;
const WALK_FPS = 12;
const IDLE_FRAME_COUNT = 4;
const WALK_FRAME_COUNT = 8;

interface CharacterSpriteProps {
    type: CharacterType;
    direction?: CharacterDirection;
    animation?: AnimationName;
    size?: number;
}

export default function CharacterSprite({
    type,
    direction = "south",
    animation = "idle",
    size = 64,
}: CharacterSpriteProps) {
    const [frameIndex, setFrameIndex] = useState(0);
    const frameCount = animation === "walking" ? WALK_FRAME_COUNT : IDLE_FRAME_COUNT;
    const fps = animation === "walking" ? WALK_FPS : IDLE_FPS;
    const intervalMs = 1000 / fps;

    const frames = getCharacterFrames(type, animation, direction);
    const rotation = getCharacterRotation(type, direction);

    const f0 = useImage(frames[0]);
    const f1 = useImage(frames[1]);
    const f2 = useImage(frames[2]);
    const f3 = useImage(frames[3]);
    const f4 = animation === "walking" ? useImage(frames[4]) : null;
    const f5 = animation === "walking" ? useImage(frames[5]) : null;
    const f6 = animation === "walking" ? useImage(frames[6]) : null;
    const f7 = animation === "walking" ? useImage(frames[7]) : null;
    const staticImage = useImage(rotation);

    const allFrames = animation === "walking" ? [f0, f1, f2, f3, f4, f5, f6, f7] : [f0, f1, f2, f3];

    const allLoaded = allFrames.every(Boolean);

    useEffect(() => {
        setFrameIndex(0);
        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % frameCount);
        }, intervalMs);
        return () => clearInterval(interval);
    }, [type, direction, animation, frameCount, intervalMs]);

    const currentFrame = allFrames[frameIndex] ?? null;

    if (!allLoaded || !currentFrame) {
        if (!staticImage) return <View style={{ width: size, height: size }} />;
        return (
            <Canvas style={{ width: size, height: size }}>
                <Image image={staticImage} x={0} y={0} width={size} height={size} />
            </Canvas>
        );
    }

    return (
        <Canvas style={{ width: size, height: size }}>
            <Image image={currentFrame} x={0} y={0} width={size} height={size} />
        </Canvas>
    );
}

const styles = StyleSheet.create({
    canvas: {
        backgroundColor: "transparent",
    },
});
