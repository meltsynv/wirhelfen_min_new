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
        <Text>{type}</Text>
        <Text>{description}</Text>
        <Text>{category}</Text>
      </ScrollView>
    </>
  )
}

export default SearchDetails;