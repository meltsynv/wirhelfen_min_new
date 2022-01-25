import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/globalStyles';
import LinkButton from "../../components/LinkButton";

const Menu = () => {
  return (
    <>
      <ScrollView style={[globalStyle.container, { paddingBottom: 20 }]}>
        <View style={{ marginBottom: 10 }}>
            <LinkButton title={'Impressum'} link={'Imprint'} type={'primary'} />
            {/*<LinkButton title={'Datenschutzerklärung'} link={'Privacy'} type={'primary'} />*/}
        </View>
      </ScrollView>
    </>
  )
}

export default Menu;