import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';
import { categoriesData } from '../constants';

export function Categories() {
  return (
    <View className='space-y-5'>
      <View className='mx-5 flex-row justify-between items-center mb-2'>
        <Text style={{ fontSize: wp(4) }} className='font-semibold text-neutral-700'>Categories</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className=' space-y-4'
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => (
          <TouchableOpacity key={index} className='flex items-center  space-y-2 mr-4'>
            <Image source={cat.image} className='rounded-3xl' style={{ width: wp(20), height: wp(19) }} />
            <Text className='text-neutral-700 font-medium' style={{ fontSize: wp(3) }}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories;


