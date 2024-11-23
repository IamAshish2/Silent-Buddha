import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Slider from '@react-native-community/slider';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import { Audio, AVPlaybackStatusSuccess } from 'expo-av';
import AppGradient from '@/components/AppGradient';
import CustomLoader from '@/components/CustomLoader';
import { AUDIO_FILES } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { MEDITATION_DATA } from '@/constants/MeditationData';

const Meditate = () => {
    const { id } = useLocalSearchParams();
    const [sound, setSound] = useState<Audio.Sound>();
    const [status, setStatus] = useState<AVPlaybackStatusSuccess | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    async function initializeAudio() {
        const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
        const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
        setSound(sound);

        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded) {
                setStatus(status);
            }
        });
    }

    useEffect(() => {
        async function initialize() {
            await initializeAudio();
        }

        initialize();

        return () => {
            sound?.unloadAsync();
        };
    }, []);

    async function toggleSound(nextIsPlaying: boolean) {
        try {
            if (nextIsPlaying) {
                await sound?.playAsync();
            } else {
                await sound?.pauseAsync();
            }
        } catch (error) {
            console.error('Error toggling sound:', error);
        }
    }

    useEffect(() => {
        toggleSound(isPlaying);
    }, [isPlaying]);

    function formatTime(ms: number): string {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    async function handleSliderChange(value: number) {
        try {
            const newPosition = value * (status?.durationMillis || 0);
            await sound?.setPositionAsync(newPosition);
        } catch (error) {
            console.error('Error seeking audio:', error);
        }
    }

    async function goBack() {
        setIsPlaying(false);
        await sound?.pauseAsync();
        router.push('../');
    }

    return (
        <>
            {sound === undefined ? (
                <View className="bg-black flex-1 justify-center items-center">
                    <CustomLoader size="large" color="white" />
                </View>
            ) : (
                <View className="flex-1">
                    <ImageBackground
                        source={MEDITATION_IMAGES[Number(id) - 1]}
                        resizeMode="cover"
                        className="flex flex-1"
                    >
                        <AppGradient colors={['transparent', 'rgba(0,0,0,0.9)']}>
                            <View className="mt-4 flex-row justify-between items-center mb-2">
                                <AntDesign name="infocirlce" size={24} color="white" />
                                <View className="bg-gray-800 rounded-md p-1 px-2">
                                    <Text className="font-bold text-white">Today's Meditation</Text>
                                </View>
                                <Pressable onPress={() => goBack()}>
                                    <Entypo name="cross" size={34} color="white" />
                                </Pressable>
                            </View>

                            {/* title */}
                            <View className="mt-10">
                                <Text className="font-bold text-gray-200 text-4xl text-center">
                                    {MEDITATION_DATA[Number(id) - 1].title}
                                </Text>
                            </View>

                            {/* play/pause icon */}
                            <Pressable
                                onPress={() => setIsPlaying((prev) => !prev)}
                                className="bg-black mt-44 rounded-full w-32 h-32 items-center justify-center self-center"
                            >
                                <FontAwesome
                                    name={isPlaying ? 'pause' : 'play'}
                                    size={28}
                                    color="snow"
                                />
                            </Pressable>

                            {/* slider and time display */}
                            <View className="flex-1 p-2">
                                <View className="gap-5 p-5 mt-auto">
                                    <View className="flex flex-row justify-between">
                                        <EvilIcons name="share-apple" size={28} color="white" />
                                        <AntDesign name="setting" size={28} color="white" />
                                    </View>
                                    <View>
                                        {/* playback slider */}
                                        <Slider
                                            style={{ width: '100%', height: 44 }}
                                            value={status ? (status.positionMillis / status.durationMillis) || 0 : 0}
                                            onSlidingComplete={handleSliderChange}
                                            minimumValue={0}
                                            maximumValue={1}
                                            minimumTrackTintColor="white"
                                            maximumTrackTintColor="#3A3937"
                                            thumbTintColor="white"
                                        />

                                        {/* time display */}
                                        <View className="flex items-center flex-row justify-between mt-2 p-2">
                                            <Text className="text-white">
                                                {status ? formatTime(status.positionMillis) : '0:00'}
                                            </Text>
                                            <Text className="text-white">
                                                {status ? formatTime(status.durationMillis) : '0:00'}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </AppGradient>
                    </ImageBackground>
                </View>
            )}
        </>
    );
};

export default Meditate;
