import React, { Component } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

interface CustomButtonProps {
    onPress?: () => void,
    title: string,
    textStyles?: string,
    contatinerStyles?: string,
    isLoading?: boolean
    disabled?: boolean
}

const CustomButton = ({ onPress, title, textStyles, contatinerStyles, isLoading }: CustomButtonProps) => {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={`${contatinerStyles} rounded-full min-h-[62px] justify-center items-center `}
            onPress={onPress}
        >

            {isLoading ? <ActivityIndicator size="small" color="#ffffff" />
                : <Text className={`${textStyles}`}> {title} </Text>}

        </TouchableOpacity>
    )
}

export default CustomButton
