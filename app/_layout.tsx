import React, { useEffect } from 'react'
import { router, Slot, Stack } from 'expo-router'
import AuthProvider, { useAuth } from '@/store/AuthContext';


export default function _layout() {

    return (
        <AuthProvider>
            <RootLayout />
        </AuthProvider>
    )
}

const RootLayout = () => {

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated === undefined) return;

        if (isAuthenticated) {
            router.replace('/app');
        } else {
            router.replace('/Landing');
        }
    }, [isAuthenticated]);

    return (
        <Stack>
            <Stack.Screen name="app" options={{ headerShown: false }} />
            <Stack.Screen name="signUp" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="Landing" options={{ headerShown: false }} />
        </Stack>
    )
}