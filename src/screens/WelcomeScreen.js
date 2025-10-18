import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-end">
      <Image
        source={require('../../assets/6.png')}
        className="w-full h-full absolute"
        resizeMode="cover"
      />

      {/* 👇 Centered "Visit Rwanda" text */}
      <View className="absolute top-0 bottom-0 left-0 right-0 justify-center items-center">
        <Text
          className="text-white font-extrabold uppercase tracking-widest text-center"
          style={{
            fontSize: wp(14), // large and responsive
            textShadowColor: 'rgba(0, 0, 0, 0.7)',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 6,
          }}
        >
          Visit Rwanda
        </Text>
      </View>

      <View className="p-5 pb-10 space-y-8">
        <LinearGradient
          colors={['transparent', 'rgba(3,105,161,0.8)']}
          style={{ width: wp(100), height: hp(60) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />

        <View className="space-y-3 m-6">
          <Text className="text-white font-bold text-5xl" style={{ fontSize: wp(10) }}>
            Traveling made easy!
          </Text>
          <Text className="text-neutral-200 font-medium" style={{ fontSize: wp(4) }}>
            Experience the Country of thousand hills best adventure with us
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="bg-green-500 mx-auto p-3 px-12 rounded-full"
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>
            let&apos;s go!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
