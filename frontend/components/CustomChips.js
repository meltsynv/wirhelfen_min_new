import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';
import { COLORS } from '../Styles/colors';

// data

const CustomChip = ({ name, isActive }) => {
  const [active, setActive] = useState(false);

  return (
    <Chip style={{ marginRight: 10, backgroundColor: active ? COLORS.primaryColor : COLORS.bgColor }} onPress={() => { setActive(!active) }}><Text>{name}</Text></Chip>
  )
}

export default CustomChip;