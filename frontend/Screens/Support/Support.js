import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/globalStyles';
import { TYPO } from "../../Styles/typo";

const strings = {
  en: {
    Support: "How you can support us",
  },
  de: {
    Support: "Wie ihr uns unterstützen könnt",
  }
}

const Support = () => {
  return (
    <>
      <ScrollView style={[globalStyle.container, {paddingBottom: 20}]}>
        <View style={TYPO.before_main_title}/>
        <Text style={TYPO.main_title}>{strings.de.Support}</Text>

      </ScrollView>
    </>
  )
}

export default Support;