import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { COLORS } from '../Styles/colors';

const TeamCard = ({ name, imgPath, ...props }) => {
  return (
    <View style={{ width: 140, height: 140, borderRadius: 5, backgroundColor: '#dddddd', marginRight: 10, position: 'relative' }}>
      <Image source={imgPath} style={{ width: '100%', height: '100%', resizeMode: 'cover', overflow: 'hidden', borderRadius: 5 }} />
      <LinearGradient colors={['transparent', '#111111']} style={{ height: 50, width: '100%', position: 'absolute', bottom: 0, left: 0, borderRadius: 5 }}>
        <Text style={{ position: 'absolute', bottom: 5, left: 5, color: COLORS.bgColor, fontSize: 12 }}>{name}</Text>
      </LinearGradient>
    </View>
  )
}

export default TeamCard;