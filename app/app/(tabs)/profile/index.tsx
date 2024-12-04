import { View, Text, Pressable, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { profile } from '@/constants/otherImages';
import { Options } from '@/lib/mappers/profileOptions';
import { useAuth } from '@/store/AuthContext';

const Profile = () => {
  const router = useRouter();
  const { logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        {/* top section */}
        <View className='flex flex-row justify-start items-center gap-28 h-16 '>
          <Pressable onPress={() => { router.back() }}>
            <View className='justify-center items-center h-14 w-14 border rounded-full border-zinc-400'>
              <AntDesign name="arrowleft" size={24} color="black" />
            </View>
          </Pressable>
          <Text className='text-3xl font-bold text-center'>Profile</Text>
        </View>


        {/* image for profile */}
        <View className="items-center mt-8 h-48 ">
          <ImageBackground
            source={profile}
            className="h-32 w-32 rounded-full overflow-hidden"
            style={{ justifyContent: 'center', alignItems: 'center' }} // Optional: Center any content inside
          />
          <Text className='font-semibold text-2xl mt-2'>Ashish Karki</Text>
          <Text className='text-sm'>karkiaashish9899@gmail.com</Text> {/* TODO add a login streak instead */}
        </View>

        {/* other profile items */}
        <View className='items-center mt-16 flex-col gap-4  h-96'>
          {Options && Options.map((option) => (
            <Pressable
              key={option.id}
              onPress={() => router.push(`/?${option.route}`)} // Dynamically navigate using option.route
              className="flex flex-row justify-between items-center h-20 w-[24rem] rounded-2xl border border-zinc-400 p-2"
            >
              <Text className="text-lg ml-4">{option.title}</Text>
              <EvilIcons name={option.icon as keyof typeof EvilIcons.glyphMap} size={32} color="black" />
              {/* the option.icon name given by copilot */}
            </Pressable>
          ))}
        </View>

        <View className='items-center'>
          <Pressable onPress={handleLogout} className="flex flex-row justify-between items-center h-20 w-[24rem] rounded-2xl border border-zinc-400 p-2">
            <Text className="text-lg ml-4">Logout</Text>
            <EvilIcons name='external-link' size={32} color="black" />
          </Pressable>
        </View>
      </AppGradient>
    </SafeAreaView >
  )
}

export default Profile