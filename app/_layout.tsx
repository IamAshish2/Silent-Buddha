
import 'expo-dev-client';
import { Slot, Stack } from "expo-router";
import "../global.css"

export default function RootLayout() {
    return (
        // specify Stack Screens for switching between tabs
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="signUp" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
        </Stack>
    );
}