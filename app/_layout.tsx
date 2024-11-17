import { Slot, Stack } from "expo-router";
import "../global.css"

export default function RootLayout() {
    return (
        // specify Stack Screens for switching between tabs
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}