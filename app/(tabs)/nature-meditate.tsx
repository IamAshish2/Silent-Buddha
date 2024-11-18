import { View, Text, FlatList, ImageBackground, Pressable } from 'react-native'
import AppGradient from '@/components/AppGradient'
import "../../global.css"
import { StatusBar } from 'expo-status-bar'
import { MEDITATION_DATA } from '@/constants/MeditationData'
import MeditationImages from '@/constants/meditation-images'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

const NatureMeditate = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <Text className='mt-1 text-gray-200 mb-3 font-bold text-4xl text-left'>
          Welcome Ashish
        </Text>
        <Text className='text-white mt-1 text-xl font-medium'>
          Start your daily meditation today
        </Text>

        {/* render the meditation list */}
        <FlatList
          data={MEDITATION_DATA}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <Pressable onPress={() => { router.push(`/meditate/${item.id}`) }}
              className='h-48 my-3 rounded-md overflow-hidden shadow-lg'
            >
              <LinearGradient
                colors={["transparent", "#161b2e"]}
                className='flex-1'>
                <ImageBackground source={MeditationImages[item.id - 1]} resizeMode='cover' className='flex-1 rounded-lg justify-center'>
                  <Text className='text-center font-bold text-4xl text-gray-100'>{item.title}</Text>
                </ImageBackground>
              </LinearGradient>
            </Pressable>
          }
        />

      </AppGradient>
      <StatusBar style='light' />
    </View>
  )
}

export default NatureMeditate