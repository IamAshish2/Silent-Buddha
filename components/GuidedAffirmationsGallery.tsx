import { GalleryPreviewData } from '@/constants/AffirmationCategory'
import { Link } from 'expo-router';
import { View, Text, FlatList, Pressable, Image } from 'react-native'

interface GuidedAffirmationsGalleryProps {
    title: string,
    preview: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({ title, preview }: GuidedAffirmationsGalleryProps) => {
    return (
        <View className='my-5 '>
            <View>
                <Text className='font-bold text-white text-md mb-2'>{title}</Text>
                <View>
                    <FlatList
                        data={preview}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Link href={`/affirmations/${item.id}`} asChild>
                                <Pressable>
                                    <View className='flex flex-row mr-4 h-36 w-32'>
                                        <Image
                                            source={item.image}
                                            resizeMode='cover'
                                            className='h-full w-full' />
                                    </View>
                                </Pressable>
                            </Link>

                        )}
                    />
                </View>
            </View>
        </View>
    )
}

export default GuidedAffirmationsGallery