import { View, Text, StyleSheet, Button, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from '@/components/CustomButton';
import CustomSignUpSection from '@/components/CustomSignUpSection';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import CheckBox from 'react-native-check-box';

const signUp = () => {
  const router = useRouter();
  const [checkBox, setCheckBox] = useState(false);

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
    <SafeAreaView>
      <View className='flex p-4 m-2'>
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

          <View className='flex-row items-center justify-center p-1 gap-5 mt-4'>
            <CheckBox
              style={styles.checkBox}
              checkBoxColor='#A1A4B2'
              checkedCheckBoxColor='#8E97FD'
              onClick={() => { setCheckBox(!checkBox) }}
              isChecked={checkBox}
              value={checkBox}
            />
            <View className='flex-row'>
              <Text
                className='text-center'
                style={styles.grayText}
              >I have read the</Text>
              <Text style={styles.blueText}> Privacy Policy</Text>
            </View>
          </View>

          {/* Get Started button */}
          <CustomButton
            title='GET STARTED'
            onPress={handleSubmit(onSubmit)}
            textStyles='text-center text-white font-bold'
            contatinerStyles='bg-[#8E97FD] mt-5' />
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
  }
});

export default signUp