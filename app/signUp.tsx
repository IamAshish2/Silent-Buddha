import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from '@/components/CustomButton';
import CustomSignUpSection from '@/components/CustomSignUpSection';
import { useRouter } from 'expo-router';

const signUp = () => {
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
          <CustomSignUpSection headingText={'Create your account'} BottomText={'OR LOGIN WITH EMAIL'} />
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
});

export default signUp