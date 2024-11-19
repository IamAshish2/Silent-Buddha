import { SignUpImage, silentBuddha } from '@/constants/otherImages';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LandingPage = () => {
    const router = useRouter();

    const styles = StyleSheet.create({
        button: {
            backgroundColor: "#8E97FD", // Tailwind blue-700 hex value
            borderRadius: 73,
            minHeight: 62,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 60,
        },
    });

    return (
        <View className='flex-1 bg-white'>
            <View className='flex-1 '>
                <SafeAreaView className='flex-1 mx-4 my-5 '>
                    <View className='flex flex-col gap-12 justify-between items-center'>
                        {/* image */}
                        <View className=''>
                            <Image
                                source={silentBuddha}
                                resizeMode='cover'
                                className='h-36 w-36 ml-auto mr-auto mb-0'
                            />
                            <Image
                                source={SignUpImage}
                                resizeMode='cover'
                                className='mt-4'
                            />
                        </View>
                    </View>

                    <View className='justify-center mt-28'>
                        {/* short description */}
                        <View className='flex items-center justify-between gap-6 mt-6'>
                            <Text className='font-bold text-3xl'>We are what we do</Text>
                            <View className=''>
                                <Text className='text-zinc-400 text-md'>Thousand of people are using silent Buddha </Text>
                                <Text className='text-zinc-400 text-md text-center'>for small meditations</Text>
                            </View>
                        </View>

                        {/* sign up button  */}
                        <TouchableOpacity
                            onPress={() => router.push(`/signUp`)}
                            activeOpacity={0.6}
                            style={styles.button}
                        >
                            <Text className='text-white font-semibold'>SIGN UP</Text>
                        </TouchableOpacity>

                        {/* already have an account section */}
                        <View className='flex-row items-center justify-center'>
                            <View className='flex-row mt-4 items-center justify-center'>
                                <Text className='text-center text-gray-800'>ALREADY HAVE AN ACCOUNT? </Text>
                                <Text className='text-center text-blue-800'> LOG IN</Text>
                            </View>
                        </View>
                    </View>
                    <StatusBar style='dark' />
                </SafeAreaView>
            </View>
        </View>
    );
};

export default LandingPage;