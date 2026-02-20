import "../ignore-warnings";
import "../global.css";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
import { UserProvider } from "../contexts/UserContext";
import { WebSocketProvider } from "../contexts/WebSocketContext";
import { LocationProvider } from "../contexts/LocationContext";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <SafeAreaProvider>
        <UserProvider>
          <WebSocketProvider>
            <LocationProvider>
              <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                  name="onboarding"
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="chat/[id]"
                  options={{ headerShown: true, title: "채팅" }}
                />
                <Stack.Screen
                  name="room/[code]"
                  options={{ headerShown: false }}
                />
              </Stack>
            </LocationProvider>
          </WebSocketProvider>
        </UserProvider>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
