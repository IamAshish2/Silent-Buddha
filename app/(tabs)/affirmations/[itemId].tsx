import { View, Text, Pressable, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'
import { GalleryPreviewData } from '@/constants/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery';
import AppGradient from '@/components/AppGradient';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();
    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    const [sentence, setSentence] = useState<string[]>();

    function splitSentence(sentence: string) {
        const words = sentence.split('.');
        setSentence(words);
    }

    useEffect(() => {
        for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
            const affirmation = AFFIRMATION_GALLERY[i]
            const found = affirmation.data.find((affirmation) => affirmation.id === Number(itemId))
            if (found) {
                setAffirmation(found)
                splitSentence(found.text);
                return
            }
        }
    }, []);

    if (!affirmation) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View className='flex-1'>
            <ImageBackground
                source={affirmation.image}
                resizeMode="cover"
                className='flex flex-1'>
                <AppGradient
                    colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}
                >
                    <Pressable
                        onPress={() => { router.push('../') }}
                    >
                        <Entypo
                            className='w-10 absolute right-0'
                            name="cross"
                            size={34}
                            color="white"
                        />
                    </Pressable>
                    <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                        <View className='h-full items-center justify-center'>
                            <View className=' justify-center '>
                                {sentence?.map((sentence, index) => (
                                    <Text
                                        key={index}
                                        className='text-white font-semibold text-3xl text-center m-7'
                                    >
                                        {`${sentence}.`}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
            <StatusBar style='light' />
        </View>
    )
}

export default AffirmationPractice