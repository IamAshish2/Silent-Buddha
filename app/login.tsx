import { View, Text, Pressable, TextInput, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSignUpSection from '@/components/CustomSignUpSection';
import { useForm, Controller } from 'react-hook-form';
import CheckBox from 'react-native-check-box';
import CustomButton from '@/components/CustomButton';
import { useState } from 'react';

const Login = () => {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <SafeAreaView >
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
                    <Pressable className='mt-20'>
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
                            />
                        )}
                        name="password"
                    />

                    {/* Get Started button */}
                    <CustomButton
                        title='LOG IN'
                        onPress={handleSubmit(onSubmit)}
                        textStyles='text-center text-white font-bold'
                        contatinerStyles='bg-[#8E97FD] mt-8' />

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
            </View>
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
    }
});

export default Login