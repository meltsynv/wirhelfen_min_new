import React from 'react';
import {Button, Linking, Text, View, Image, Dimensions} from 'react-native';
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
    Join1: "Bei uns mitmachen",
    Join2: "Am einfachsten könnte ihr uns unterstützen, indem ihr bei uns teilnehmt, ob als Hilfesuchende oder Hilfeanbieter*in. Denn genauso wie wir alle helfen können, brauchen wir irgendwann einmal selbst Hilfe. Auf diese Weise wächst die Community.",
    Report1_1: "Über",
    Report1_2: "berichten",
    Report2_1: "Zudem könnt ihr uns unterstützen, indem ihr anderen über",
    Report2_2: "erzählt. Einerseits den potentiellen Helfer*innen, die über unsere Plattform andere unterstützen können. Damit sind vor allem Individuen, aber auch andere Vereine, Organisationen und Firmen gemeint. Vor allem unterstützt ihr uns jedoch, wenn ihr es denjenigen berichtet, die Hilfe brauchen, und - wenn nötig - ihnen dabei sogar helft, WirHelfen.eu für sich zu entdecken.",
    Financial1: "Finanzielle Unterstützung",
    Financial2: "Ferner helft ihr uns ungemein, indem ihr uns finanziell unterstützt. Denn WirHelfen.eu braucht Spenden, um die laufenden, Honorar- und Werbekosten zu decken, mit denen wir auf uns aufmerksam machen und so Menschen dazu bringen, sich gegenseitig zu unterstützen. Dies könnte ihr z.B. über Direktspenden tun. Oder ganz unkompliziert bei eurem nächsten Einkauf auf Amazon (Smile).",
    Financial3: "jetzt spenden",
    Firms1: "Firmen",
    Firms2: "Seid ihr Repräsentant:innen einer Firma? Auch dann könnt ihr uns unterstützen, etwa über Spenden, Sponsoring oder Kooperationsmöglichkeiten. Schreibt uns dafür auf",
  }
}

const Support = () => {
  return (
    <>
      <ScrollView style={[globalStyle.container, {paddingBottom: 20}]}>
        <View style={TYPO.before_main_title}/>
        <Text style={TYPO.main_title}>{strings.de.Support}</Text>

        <Image source={require('frontend/assets/images/support.png')}
               style={{width: '100%', height: 300}}
               resizeMode="contain"/>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Join1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Join2}</Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Report1_1} <Text style={TYPO.wirhelfen_name}>WirHelfen</Text> {strings.de.Report1_2}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Report2_1} <Text style={TYPO.wirhelfen_name}>WirHelfen</Text> {strings.de.Report2_2}</Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Financial1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Financial2}</Text>
          <Button title={strings.de.Financial3} // TODO: add icon right-arrow
                  onPress={() => Linking.openURL('https://www.paypal.com/donate?hosted_button_id=WB2FDCDRDXJD4')}/>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Firms1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Firms2} <Text style={TYPO.link} onPress={() => Linking.openURL('mailto:info@wirhelfen.eu')}>info@wirhelfen.eu</Text>.</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default Support;