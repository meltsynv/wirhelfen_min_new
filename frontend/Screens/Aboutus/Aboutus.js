import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import globalStyle from '../../Styles/globalStyles';

// components

const Aboutus = () => {
  return (
    <>
      <ScrollView style={globalStyle.container}>
        <Text>About us</Text>
      </ScrollView>
    </>
  )
}

export default Aboutus;