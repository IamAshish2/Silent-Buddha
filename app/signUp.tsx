import { View, Text, StyleSheet, Button, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from '@/components/CustomButton';
import CustomSignUpSection from '@/components/CustomSignUpSection';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import CheckBox from 'react-native-check-box';
import { signUpSchema } from '@/lib/validation/ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth, db } from '@/lib/Firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from '@firebase/firestore';

const signUp = () => {
  const router = useRouter();
  const [isSigningUp, setIsSigningUp] = useState(false);

  const { control, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      checkbox: false
    },
  })


  const onSubmit = async ({ email, password, username }: user) => {
    try {
      setIsSigningUp(true);
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);


      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          username: username,
        })
      }
      setIsSigningUp(false);
      router.push('/login')
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView className='flex p-4 m-2'>
        {/* back button */}
        <Pressable onPress={() => { router.back() }}>
          <View className='justify-center items-center h-14 w-14 border rounded-full border-zinc-400'>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
        </Pressable>

        {/* continue with facebook/google section */}
        <View className=''>
          <CustomSignUpSection headingText={'Create your account'} BottomText={''} />
          <Pressable className='mt-16' onPress={() => { }}>
            <Text className='text-center font-bold text-zinc-500'>OR LOGIN WITH EMAIL</Text>
          </Pressable>
        </View>

        {/* form to handle signup*/}
        <View className='p-5 mt-10'>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.button}
                placeholder="username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="username"
          />
          {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

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
              />
            )}
            name="password"
          />
          {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

          <View className='flex-row items-center justify-center p-1 gap-5 mt-4'>
            <Controller
              control={control}
              name="checkbox"
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  style={styles.checkBox}
                  checkBoxColor="#A1A4B2"
                  checkedCheckBoxColor="#8E97FD"
                  onClick={() => onChange(!value)} // Toggle the value
                  isChecked={value}
                />
              )}
            />
            <View className='flex-row'>
              <Text
                className='text-center'
                style={styles.grayText}
              >I have read the</Text>
              <Text style={styles.blueText}> Privacy Policy</Text>
            </View>
          </View>
          {errors.checkbox && <Text style={styles.errorText}>{errors.checkbox.message}</Text>}

          {/* Get Started button */}
          <CustomButton
            title='GET STARTED'
            onPress={handleSubmit(onSubmit)}
            textStyles='text-center text-white font-bold'
            contatinerStyles='bg-[#8E97FD] mt-5'
            isLoading={isSigningUp ? true : false} />

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
    borderRadius: 12,
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

export default signUp