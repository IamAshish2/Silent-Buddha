import { View, Text, ImageBackground } from 'react-native'
import background from "@/assets/meditation-images/beach.webp"
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
const App = () => {
    const router = useRouter();

    return (
        <View className='flex-1'>
            <ImageBackground
                source={background}
                resizeMode="cover"
                className='flex flex-1'
            >
                <LinearGradient
                    // Button Linear Gradient
                    className='flex-1'
                    colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <SafeAreaView className='flex flex-1 mx-5 my-12 justify-between'>
                        <View>
                            <Text className='mt-1 text-center text-4xl text-white font-bold'>
                                Welcome Meditators
                            </Text>
                            <Text className='text-center text-2xl mt-3 text-white'>
                                Simplyfing meditations for everyone
                            </Text>
                        </View>
                        <View>
                            <CustomButton onPress={() => router.push("/test")} title={'Get Started'} />
                        </View>
                        <StatusBar style='light' />
                    </SafeAreaView>

                </LinearGradient>
            </ImageBackground>
        </View >
    )
}

export default App