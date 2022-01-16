import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Badge, Chip } from 'react-native-paper';
import CardsData from '../../data/CardsData';
import { COLORS } from '../../Styles/colors';

const helpData = [
  {
    name: 'Hilfsangebote'
  },
  {
    name: 'Hilfsgesuche'
  }
]

const TypeFilterSection = () => {

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 10, marginBottom: 10 }}>
      {helpData.map((data, i) => (
        <View key={i} style={{ position: 'relative', marginRight: 20 }}>
          <Chip>
            <Text>{data.name}</Text>
          </Chip>
        </View>
      ))}
    </View>
  )
}

export default TypeFilterSection;