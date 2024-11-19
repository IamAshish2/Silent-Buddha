import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSignUpSection from '@/components/CustomSignUpSection';

const Login = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View className='flex p-4 m-2'>
                {/* back button */}
                <Pressable onPress={() => { router.back() }}>
                    <View className='justify-center items-center h-14 w-14 border rounded-full border-zinc-400'>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </View>
                </Pressable>

                {/* section */}
                <View className=''>
                    <CustomSignUpSection headingText={'Welcome Back!'} BottomText={'OR SIGN UP WITH EMAIL'} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login