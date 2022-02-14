import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';
import { COLORS } from '../Styles/colors';

// data

const CustomChip = ({ name,  addFilter }) => {
  const [active, setActive] = useState(false);
  
  const on_filter_press = () => {
      addFilter(name);
      //console.log('pressed');
      setActive(!active);
  }
  return (
    <Chip  style={{ marginRight: 10, backgroundColor: active ? COLORS.primaryColor : COLORS.bgColor }} onPress={() => { on_filter_press(); }}><Text>{name}</Text></Chip>
  )
}

export default CustomChip;