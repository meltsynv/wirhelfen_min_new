import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Badge, Chip } from 'react-native-paper';
import CustomChip from '../../components/CustomChips';
import CardsData from '../../data/CardsData';
import { COLORS } from '../../Styles/colors';

const helpData = [
  {
    name: 'Hilfsangebot'
  },
  {
    name: 'Hilfsgesuche'
  }
]

const TypeFilterSection = ({addFilter}) => {

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 10, marginBottom: 10 }}>
      {helpData.map((data, i) => (
        <CustomChip key={i} name={data.name} addFilter={addFilter} ></CustomChip>
      ))}
    </View>
  )
}

export default TypeFilterSection;