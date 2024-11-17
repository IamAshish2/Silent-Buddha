import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AffirmationLayout = () => {
    return (
        <Stack>
            {/* [] for dynamic routing */}
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='[itemId]' options={{ headerShown: false }} />
        </Stack>
    )
}

export default AffirmationLayout