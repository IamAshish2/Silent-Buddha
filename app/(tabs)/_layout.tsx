import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons/';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
            <Tabs.Screen
                name="nature-meditate"
                options={{
                    title: 'Meditate',
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons
                            name="flower-tulip"
                            size={24}
                            color={color} />
                }}
            />

            <Tabs.Screen
                name="affirmations"
                options={{
                    title: 'Affirmations',
                    tabBarIcon: ({ color }) =>
                        <Feather
                            name="book-open"
                            size={24}
                            color={color} />
                }}
            />
            {/* <Tabs.Screen
                name="meditate/[id]"
                options={{
                    title: 'Meditate',
                }}
            /> */}
        </Tabs>
    )
}

export default TabsLayout