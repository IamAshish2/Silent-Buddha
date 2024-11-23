import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

type CustomLoaderProps = {
    size: 'small' | 'large';
    color?: string;
}

const CustomLoader = ({ size, color }: CustomLoaderProps) => {
    return (
        <ActivityIndicator size={size} color={color} />
    )
}

export default CustomLoader