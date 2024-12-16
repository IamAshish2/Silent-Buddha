import { View, Text, Pressable, Image } from 'react-native'
import { facebook, google } from '@/constants/otherImages'
import { useRouter } from 'expo-router'


type CustomSignUpSectionProps = {
    headingText: string,
    BottomText: string
}

{/* Create you account / Continue with fb/google section */ }
const CustomSignUpSection = ({ headingText, BottomText }: CustomSignUpSectionProps) => {
    const router = useRouter();

    return (
        <View className='mt-5 flex-col items-center justify-between h-48'>
            {/* buttons */}
            <Text className='font-bold text-3xl'>{headingText}</Text>

            <View className='h-48 mt-8 gap-5'>
                <Pressable
                    onPress={() => { router.push('/app/profile') }}
                    className="h-16 w-[24rem] rounded-full justify-center"
                    style={{ backgroundColor: '#7583CA' }}
                >
                    <View className="flex flex-row items-center justify-center space-x-2">
                        <Image
                            source={facebook}
                            style={{ marginRight: 20 }}
                        />
                        <Text className="text-center text-white">CONTINUE WITH FACEBOOK</Text>
                    </View>
                </Pressable>

                <Pressable
                    // onPress={onGoogleButtonPress}
                    className='h-16 w-[24rem] justify-center rounded-full border border-zinc-400'>
                    <View className="flex flex-row items-center justify-center">
                        <Image
                            source={google}
                            style={{ marginRight: 20 }}
                        />
                        <Text className='text-center'>CONTINUE WITH GOOGLE</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default CustomSignUpSection