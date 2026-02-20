import React, { useMemo } from "react";
import { View, Platform } from "react-native";
import Constants from "expo-constants";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { NaverMapView, NaverMapMarkerOverlay } from "@mj-studio/react-native-naver-map";
import { MapMarker } from "@location-messenger/shared";
import CharacterMarker from "./CharacterMarker";
import { Box } from "./ui";

interface SmartMapProps {
    region?: Region;
    markers?: MapMarker[];
    showsUserLocation?: boolean;
    onRegionChange?: (region: Region) => void;
    onMarkerPress?: (marker: MapMarker) => void;
    style?: object;
}

function isInKorea(lat: number, lng: number): boolean {
    return lat >= 33 && lat <= 39 && lng >= 124 && lng <= 132;
}

export default function SmartMap({
    region,
    markers = [],
    showsUserLocation = true,
    onRegionChange,
    onMarkerPress,
    style,
}: SmartMapProps) {
    const isExpoGo = Constants.appOwnership === "expo";

    const useNaverMap = useMemo(() => {
        if (isExpoGo) return false;
        if (!region) return true;
        return isInKorea(region.latitude, region.longitude);
    }, [isExpoGo, region?.latitude, region?.longitude]);

    const defaultRegion: Region = {
        latitude: 37.5665,
        longitude: 126.978,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const currentRegion = region || defaultRegion;

    if (Platform.OS === "web") {
        return (
            <Box className="flex-1" style={style}>
                <Box className="flex-1 bg-background-100" />
            </Box>
        );
    }

    if (useNaverMap && !isExpoGo) {
        return (
            <Box className="flex-1" style={style}>
                <NaverMapView
                    style={{ flex: 1 }}
                    initialCamera={{
                        latitude: currentRegion.latitude,
                        longitude: currentRegion.longitude,
                        zoom: 15,
                    }}
                >
                    {markers.map((marker) => (
                        <NaverMapMarkerOverlay
                            key={marker.id}
                            latitude={marker.lat}
                            longitude={marker.lng}
                            caption={{ text: marker.name || "" }}
                            onTap={() => onMarkerPress?.(marker)}
                        >
                            <CharacterMarker
                                type={marker.characterType}
                                color={marker.characterColor}
                                name={marker.name}
                                isOnline={marker.isOnline}
                                direction={marker.direction}
                                isMoving={marker.isMoving}
                            />
                        </NaverMapMarkerOverlay>
                    ))}
                </NaverMapView>
            </Box>
        );
    }

    return (
        <Box className="flex-1" style={style}>
            <MapView
                style={{ flex: 1 }}
                provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
                initialRegion={currentRegion}
                showsUserLocation={showsUserLocation}
                onRegionChangeComplete={onRegionChange}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={{ latitude: marker.lat, longitude: marker.lng }}
                        onPress={() => onMarkerPress?.(marker)}
                    >
                        <CharacterMarker
                            type={marker.characterType}
                            color={marker.characterColor}
                            name={marker.name}
                            isOnline={marker.isOnline}
                            direction={marker.direction}
                            isMoving={marker.isMoving}
                        />
                    </Marker>
                ))}
            </MapView>
        </Box>
    );
}
