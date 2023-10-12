import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShield} from '@fortawesome/free-solid-svg-icons';

export default function Welcome() {
  return (
    <View className="flex-1 justify-between py-16 items-center">
      <Image
        source={require('assets/images/bg-gradient.png')}
        className="absolute -z-10"
      />
      <View className="relative flex items-center justify-center flex-1">
        <Image source={require('assets/images/uber-logo.png')} />
        <View className="absolute -left-10 gap-3 top-1/3 -z-10">
          <Image source={require('assets/images/arrow-move.png')} />
          <Image
            source={require('assets/images/arrow-move.png')}
            className="left-5"
          />
          <Image
            source={require('assets/images/arrow-move.png')}
            className="left-10"
          />
        </View>
        <View className="flex flex-row justify-center items-center mt-10 border-2 border-white px-5 py-3 rounded-3xl">
          <Text className="text-white text-xl mr-5">Move with safety</Text>
          <FontAwesomeIcon icon={faShield} size={32} color="white" />
        </View>
      </View>
      <TouchableOpacity className="bg-white px-20 py-5 rounded-3xl mt-10 shadow-lg shadow-black">
        <Text className="text-uber-blue font-bold text-xl">Get started</Text>
      </TouchableOpacity>
    </View>
  );
}
