import React from 'react';
import {Button, Linking, Text, View, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/globalStyles';
import { TYPO } from "../../Styles/typo";

const strings = {
  en: {},
  de: {
    Behavior: " Verhaltenskodex",
    ProBono1: "1. Alles geschieht pro bono, es sollen keinen Gegenleistungen verlangt werden",
    ProBono2: "WirHelfen.eu ist eine gemeinnützige Plattform. Genauso wie unsere Leistung ohne Anspruch auf Gegenleistung geschieht, sollte dies bei den Helfer*innen der Fall sein. Damit sind nicht nur finanzielle Gegenleistungen gemeint, sondern auch materielle, persönliche oder welcher Art auch immer. Der Verstoß dieser Regel führt zum Ausschluss der entsprechenden Person bzw. Organisation. Bitte meldet Verstöße unter info@wirhelfen.eu.",
    Appreciation1: "2. Wertschätzung",
    Appreciation2: "Jede*r Helfer*in hilft unentgeltlich und während ihrer oder seiner Freizeit. Da dies nicht selbstverständlich ist, sollte von Seiten der Hilfesuchenden immer das richtige Maß an Wertschätzung entgegengebracht werden. Diese Art Wertschätzung entfaltet sich vor allem im zwischenmenschlichen Verhalten.",
    Reliability1: "3. Verlässlichkeit",
    Reliability2: "Ein Zeichen der Wertschätzung ist auch die Verlässlichkeit, ob seitens der Helfer*innen oder der Hilfesuchenden. Dies gilt gleichwohl für die hier angebotenen Tätigkeiten, sprich kostenlose. Du solltest im Hinterkopf behalten, dass du durch Unzuverlässigkeit jemanden eventuell der Möglichkeit beraubst, die nötige Hilfe von jemand anderem zu erhalten - beziehungsweise jemand anderem anzubieten. Gib der anderen Person daher immer Bescheid, sollte sich eine Vereinbarung nicht einhalten lassen.",
    Report1: "4. Meldung bei Missverhalten",
    Report2: "Es ist wichtig, dass du uns darüber in Kenntnis setzt, wenn sich dir gegenüber jemand falsch verhält. Nur so können wir, wenn nötig, andere davor schützen, dass ihnen dasselbe widerfährt. Was Missverhalten im Detail bedeutet, wird oft anhand des subjektiven Empfindens beurteilt. Wir appellieren daher, das Verhalten dem generellen \"Selbstverständnis\" nach zu bemessen. Das heißt, Beleidigungen, Fahrlässigkeit und ähnliches Verhalten sollte uns unter info@wirhelfen.eu gemeldet werden.",
    Trust1: "5. Vertrauen",
    Trust2: "Unserer Erfahrung nach sind die Menschen auf der Plattform wirhelfen.eu ehrlich daran interessiert, anderen zu helfen, oder bedürfen tatsächlich Hilfe. Daher ist es wichtig, dem Gegenüber einen Vertrauensvorschuss zu gewährleisten. Ohne diesen wird es der oder dem Anderen schwer fallen, zu helfen oder Hilfe entgegenzunehmen.",
    Responsibility1: "6. Wie helfe ich verantwortungs- und respektvoll?",
    Responsibility2: "Generell gilt es immer offen zu kommunizieren: Wenn du also Hilfe anbietest, frage einfach die hilfesuchende Person, was ihr wichtig ist, worauf aus ihrer Sicht geachtet werden muss und was genau sie braucht. Dies kann je nach Situation/Krankheit/Lebensumständen etc. variieren. Situationen, Menschen und ihre Prioritäten sind immer sehr individuell. Bitte respektiere die Wünsche der Hilfesuchenden und entscheide dann, ob du sie zu erfüllen bereit bist oder nicht.",
  }
}

const Behavior = () => {
  return (
    <>
      <ScrollView style={[globalStyle.container, {paddingBottom: 20}]}>
        <View style={TYPO.before_main_title}/>
        <Text style={TYPO.main_title}>
          <Text style={TYPO.highlight}>WirHelfen</Text>
          {strings.de.Behavior}
        </Text>

        <Image source={require('frontend/assets/images/computer.png')}
               style={{width: '100%', height: 300}}
               resizeMode="contain"/>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.ProBono1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.ProBono2}</Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Appreciation1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Appreciation2}</Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Reliability1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Reliability2}</Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Report1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Report2}</Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Trust1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Trust2}</Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Responsibility1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Responsibility2}</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default Behavior;