import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons/';

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
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) =>
                        <AntDesign
                            name="user"
                            size={24}
                            color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabsLayout