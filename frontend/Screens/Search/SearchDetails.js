import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/globalStyles';
import { TYPO } from '../../Styles/typo';


const SearchDetails = ({ route, navigation }) => {
  const { type, description, category } = route.params;
  return (
    <>
      <ScrollView style={globalStyle.container}>
        <Text>Hilfesuche/Hilfeleistung: :{type}</Text>
        <Text>Art: {category}</Text>
        <Text>Beschreibung: {description}</Text>
      </ScrollView>
    </>
  )
}

export default SearchDetails;