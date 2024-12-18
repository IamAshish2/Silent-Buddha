import { View, Text, Pressable, Image } from 'react-native'
import { facebook, google } from '@/constants/otherImages'
import { useRouter } from 'expo-router'
// import auth from "@react-native-firebase/auth";
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from "@react-native-google-signin/google-signin";
// import Constants from "expo-constants";


type CustomSignUpSectionProps = {
    headingText?: string,
    BottomText?: string
    // promptAsync: () => void
}

{/* Create you account / Continue with fb/google section */ }
const CustomSignUpSection = ({ headingText, BottomText }: CustomSignUpSectionProps) => {

    const router = useRouter();

    // This is where we need to configure the webClientId
    // Android authentication will not work without this (Google)
    /*
    GoogleSignin.configure({
        webClientId:'177859685656-pp5aeak8e6u349cf64hce22ahg98l86h.apps.googleusercontent.com',
    });

    // Async function to execute the sign-in functionality
    async function signIn() {
        try {
            // Checks if the device supports Play services
            await GoogleSignin.hasPlayServices();

            // Extracts the idToken from the authentication request
            const { idToken } = await GoogleSignin.signIn();

            // Create Google credentials with the idToken
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Login with the credentials
            return auth().signInWithCredential(googleCredential);

            // Handle error cases
        } catch (error: any) {
            console.log(error);
        }
    }


    async function googleLogin(){
        try{
            const  userCred = await signIn();
            console.log(userCred);
        }catch(e){
            console.log(e)
        }
    }
        */

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
                    // onPress={() => googleLogin()}
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