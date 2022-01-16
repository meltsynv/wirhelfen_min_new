import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/LinkButton';

// styles
import globalStyle from '../../Styles/globalStyles';
import { TYPO } from '../../Styles/typo';

const HeroSection = () => {
  return (
    <View style={globalStyle.sectionContaimer}>
      <View>
        <View style={TYPO.before_main_title} />
        <Text style={TYPO.main_title}>Hilfe anbieten und finden. WirHelfen. Wir verbinden.</Text>
      </View>
      <View style={{ marginVertical: 16 }}>
        <Button title={'Beitrag Erstellen'} type={'primary'} link={'CreateCard'} />
      </View>
    </View>
  )
}

export default HeroSection;