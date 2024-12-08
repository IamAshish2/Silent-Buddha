import React, { useEffect, useState } from 'react'
import { Stack, useRouter, useSegments } from 'expo-router'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native';

const RootLayout = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
    const router = useRouter();
    const segment = useSegments();

    const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    useEffect(() => {
        if (initializing) return;

        const inAuthGroup = segment[0] === 'app';
        if (user && !inAuthGroup) {
            router.replace('/app');
        } else if (!user && inAuthGroup) {
            router.replace('/');
        }
    }, [auth, user, initializing]);

    if (initializing) {
        <View style={styles.container}>
            <ActivityIndicator size={'large'} />
        </View>
    }

    return (
        <Stack>
            <Stack.Screen name="app" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="signUp" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})