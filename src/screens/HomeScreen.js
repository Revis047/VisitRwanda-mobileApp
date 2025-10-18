import { View, Text, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';

const HomeScreen = ({ navigation }) => {
    const ios = Platform.OS == 'ios';
    const TopMargin = ios ? 'mt-3' : 'mt-10';
  return (
   <SafeAreaView className='flex bg-white'>
     <ScrollView showsVerticalScrollIndicator={false}  className={'space-y-6 ' + TopMargin}>
    {/* avatar */}
    <View className='mx-5 flex-row justify-between items-center mb-10'>
        <Text className='font-bold text-neutral-700 ' style={{fontSize: wp(7)}}>Let's Discover</Text>
        <TouchableOpacity className=''>
            <Image
            source={require('../../assets/bigicon.png')}
            style={{height: wp(12), width: wp(12) }}/>
        </TouchableOpacity>
    </View>

    {/* search bar */}
    <View className='mx-5 mb-4'>
        <View className='flex-row items-center bg-neutral-100 rounded-full p-2 space-y-2 pl-6 '>
         <MagnifyingGlassIcon size={20} strokeWidth={3} color='gray' />
         <TextInput
         placeholder='Search Destination'
         placeholderTextColor={'gray'}
         className="flex text-base mb-1 pl-1 tracking-wider"
         />
        </View>
    </View>
    {/* categories */}
    <View className='mb-4'>
        <Categories />
    </View>
    
     {/* sort categories */}
    <View className='mb-4'>
        <SortCategories />
    </View>

     {/* destination */}
    <View className='mb-4'>
        <Destinations navigation={navigation} />
    </View>

   </ScrollView>
   </SafeAreaView>
  )
}

export default HomeScreen