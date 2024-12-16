import { View, Text, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native'
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSignUpSection from '@/components/CustomSignUpSection';
import { useForm, Controller } from 'react-hook-form';
import CustomButton from '@/components/CustomButton';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/lib/validation/ValidationSchema';
import auth from '@react-native-firebase/auth';

type loginCredentials = {
    email: string,
    password: string
}

const Login = () => {
    const login = async (email: string, password: string) => {
        try {
            return await auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    const router = useRouter();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const { control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async ({ email, password }: loginCredentials) => {
        setIsLoggingIn(true);
        try {
            if (email && password) {
                await login(email, password);
                // router.replace('/app');
            }
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoggingIn(false);
        }
    }

    return (
        <SafeAreaView >
            <ScrollView className='flex p-4 m-2'>
                {/* back button */}
                <Pressable onPress={() => { router.replace('/LandingPage') }}>
                    <View className='justify-center items-center h-14 w-14 border rounded-full border-zinc-400'>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </View>
                </Pressable>

                {/* section */}
                <View className=''>
                    <CustomSignUpSection headingText={'Welcome Back!'} BottomText={'OR SIGN UP WITH EMAIL'} />
                    <Pressable onPress={() => router.replace('/signUp')} className='mt-20'>
                        <Text className='text-center font-bold text-zinc-500'>OR SIGNUP WITH EMAIL</Text>
                    </Pressable>
                </View>

                {/* form to handle signup*/}
                <View className='p-4 mt-16 '>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.button}
                                placeholder="email"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="email"
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.button}
                                placeholder="password"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={true}
                            />
                        )}
                        name="password"
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

                    {/* Get Started button */}
                    <CustomButton
                        title='LOG IN'
                        onPress={handleSubmit(onSubmit)}
                        textStyles='text-center text-white font-bold'
                        contatinerStyles={`bg-[#8E97FD] mt-8 ${isLoggingIn ? 'opacity-50' : ''}`}
                        //TODO the loading symbol is not updating properly, work on that
                        isLoading={isLoggingIn}
                    />

                    <Text className='text-center mt-5 font-semibold underline'>Forgot Password?</Text>
                </View>

                {/* Sign up section */}
                <View className='flex-row items-center justify-center p-1 gap-1 mt-16'>
                    <Text
                        className='text-center'
                        style={styles.grayText}
                    >ALREADY HAVE AN ACCOUNT?</Text>
                    <Text style={styles.blueText}> SIGN UP</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    circle: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        borderColor: 'black'
    },
    button: {
        backgroundColor: '#F2F3F7',
        borderColor: '#3F414E',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        marginVertical: 10,
        fontSize: 16,
    },
    grayText: {
        color: '#A1A4B2'
    },
    blueText: {
        color: '#7583CA'
    },
    checkBox: {
        borderColor: '#A1A4B2'
    },
    errorText: {
        color: '#FF0000',
        textAlign: 'center',

    }
});

export default Login