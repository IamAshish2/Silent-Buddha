import { View, Text, ImageBackground } from 'react-native'
import treeImage from "@/assets/meditation-images/trees.webp";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';

const App = () => {
    const router = useRouter();

    return (
        <View className='flex-1'>
            <ImageBackground
                source={treeImage}
                resizeMode="cover"
                className='flex flex-1'
            >
                {/* use App Gradient reusable component */}
                <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    <SafeAreaView className='flex flex-1 mx-4 my-5 justify-between'>
                        <View className=''>
                            <Text className='mt-1 text-center text-4xl text-white font-bold'>
                                Welcome Meditators
                            </Text>
                            <Text className='text-center text-2xl mt-3 text-white'>
                                Simplyfing meditations for everyone
                            </Text>
                        </View>
                        <View>
                            <CustomButton
                                onPress={() => router.push(`/app/nature-meditate`)} title={'Get Started'} contatinerStyles='bg-white' />
                        </View>
                        <StatusBar style='light' />
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default App