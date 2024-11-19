import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface CustomButtonProps {
    onPress?: () => void,
    title: string,
    textStyles?: string,
    contatinerStyles?: string,
}

const CustomButton = ({ onPress, title, textStyles, contatinerStyles }: CustomButtonProps) => {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={`${contatinerStyles} bg-white rounded-xl min-h-[62px] justify-center items-center `}
            onPress={onPress}>

            <Text className={`${textStyles}`}> {title} </Text>
        </TouchableOpacity>
    )
}

export default CustomButton
