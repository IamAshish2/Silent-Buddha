import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Slider from '@react-native-community/slider';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import AppGradient from '@/components/AppGradient'
import { AUDIO_FILES } from '@/constants/MeditationData'
import { MEDITATION_DATA, MeditationType } from '@/constants/MeditationData'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

const Meditate = () => {
    const { id } = useLocalSearchParams();
    const [audio, setAudio] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    function initializeAudio() {
        const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
        console.log(audioFileName);

        setAudio(AUDIO_FILES[audioFileName]);
    }

    function formatTime(ms: number): string {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);

        // Pad seconds with leading zero if less than 10
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        initializeAudio();

        return () => {
            setAudio(undefined);
        }
    }, []);

    const player = useAudioPlayer(audio);
    const status = useAudioPlayerStatus(player);


    function togglePlay() {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
    }


    function goBack() {
        setIsPlaying(false);
        player.pause();
        router.push('../')
    }

    return (
        <>
            <View className='flex-1'>
                <ImageBackground source={MEDITATION_IMAGES[Number(id) - 1]} resizeMode='cover' className='flex flex-1'>
                    <AppGradient colors={["transparent", "rgba(0,0,0,0.9)"]}>
                        <View className='mt-4 flex-row justify-between items-center mb-2'>
                            <AntDesign name="infocirlce" size={24} color="white" />
                            <View className='bg-gray-800 rounded-md p-1 px-2'>
                                <Text className='font-bold text-white'>Today's Meditaion</Text>
                            </View>
                            <Pressable onPress={() => goBack()}>
                                <Entypo name="cross" size={34} color="white" />
                            </Pressable>
                        </View>

                        {/* title */}
                        <View className='mt-10'>
                            <Text className=' font-bold text-gray-200 text-4xl text-center'>{MEDITATION_DATA[Number(id) - 1].title}</Text>
                        </View>

                        {/* play/pause icon and player */}
                        <Pressable onPress={() => { togglePlay() }} className="bg-black mt-44 rounded-full w-32 h-32 items-center justify-center self-center">
                            <FontAwesome
                                name={isPlaying && status.currentTime !== status.duration ? "pause" : "play"}
                                size={28}
                                color="snow"
                            />
                        </Pressable>

                        {/* bottom */}
                        <View className="flex-1 p-2">
                            <View className="gap-5 p-5 mt-auto">
                                {/* top icons */}
                                <View className="flex flex-row justify-between">
                                    <EvilIcons name="share-apple" size={28} color="white" />
                                    <AntDesign name="setting" size={28} color="white" />
                                </View>
                                <View>
                                    {/* playback indicator */}
                                    <View className="flex justify-center items-center w-[32]rem">
                                        <Slider
                                            style={{ width: "100%", height: 44 }}
                                            value={status.currentTime / status.duration}
                                            onSlidingComplete={(value) => { player.seekTo(value * status.duration) }}
                                            minimumValue={0}
                                            maximumValue={1}
                                            minimumTrackTintColor="white"
                                            maximumTrackTintColor="#3A3937"
                                            thumbTintColor="white"
                                        />
                                    </View>

                                    {/* Time */}
                                    <View className="flex items-center flex-row justify-between mt-2 p-2">
                                        <Text className='text-white'>{formatTime(status.currentTime)}</Text>
                                        <Text className='text-white'>{formatTime(status.duration)}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </AppGradient>
                </ImageBackground>
            </View>
        </>

    )
}

export default Meditate