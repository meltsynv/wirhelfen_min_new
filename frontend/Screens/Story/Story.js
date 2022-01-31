import React from 'react';
import {Button, Linking, Text, View, Image, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/globalStyles';
import { TYPO } from "../../Styles/typo";

const strings = {
  en: {},
  de: {
    Story: "Woher wir kommen und wohin wir gehen",
    Intro1_1: "WirHelfen.eu entstand während des ersten Lockdowns (2020)",
    Intro1_2: ", mitten in der Corona-Krise. Vor WirHelfen.eu gab es bundesweit keine zentrale Anlaufstelle, auf der die Bevölkerung Hilfe suchen oder anbieten konnte. Vanessa Hülse und Antonio Maiolo von Rapid Peaks erkannten das Problem und schufen die gemeinnützige",
    Intro1_3: " Onlineplattform WirHelfen.eu",
    Intro1_4: " innerhalb von 48 Stunden.",
    Intro2_1: "Dann kam das Hochwasser.",
    Intro2_2: " Im Juli 2021 entwickelten wir deshalb ein weiteres Hilfsportal speziell für die Flutkatastrophe: flut.wirhelfen.eu.",

    Work1: "So arbeiten wir bei WirHelfen",
    Work2: "Neben diesen digitalen Lösungen organisieren wir individuelle Hilfsaktionen – auch vor Ort in den Flutgebieten. Hier konnten wir mit weit mehr als 20 Partnern aus der Wirtschaft und weitaus mehr Helfer*innen unterstützen, ob mit Tatkraft oder Gütern. Wir selbst erfuhren Unterstützung von der deutschen Fußballnationalmannschaft bis zur Feuerwehr. Mit der \"Mannschaft\" konnten wir 2,5 Mio. Euro für gemeinnützige Zwecke einsammeln.",

    Support1: "Immer mehr Menschen unterstützen WirHelfen",
    Support2: "Wir wurden bereits über 165.000 Mal aufgerufen, verzeichnen über 90.000 User und 11.000 Anmeldungen (Stand vom Herbst 2021). Zudem fanden wir Erwähnung in diversen Medien, wie bei ProSieben / Sat.1, auf RTL sowie in der Süddeutschen Zeitung und der Frankfurter Allgemeinen Zeitung.",
    Support3_1: "Mittlerweile",
    Support3_2: " wurde uns klar, dass es das Zusammenbringen von Helfer*innen und Hilfesuchenden nicht nur in der Corona- oder Flutkrise wichtig ist. Deswegen haben wir unsere Seite erweitert und werden es auch weiterhin tun, um so jedem die passende kostenlose Unterstützung zu ermöglichen.",
    Support4_1: "In Zukunft",
    Support4_2: " wollen wir zur zentralen Anlaufstelle für alle werden – nicht nur für Privatpersonen, sondern auch für Behörden, öffentliche Einrichtungen, Nachbarschaftshilfen, Ehrenamtsplattformen oder Unternehmen. Durch diese digitale Bündelung schaffen wir Synergien, wo bisher einzelne Vorhaben getrennt voneinander nicht ihr volles Potenzial erreichen konnten.",

    Philosophy1_1: "Die Philosophie von",
    Philosophy1_2: ": Was uns ausmacht",
    Philosophy2: "Bereits während der ersten Corona-Welle, also bei der Gründung von WirHelfen.eu, erkannten wir, es gibt viele Menschen, die helfen wollen. Und das nicht immer in gemeinnützigen Organisationen, sondern in ihrem näheren Umfeld. Diese Menschen wissen oft nicht, wie und wo sie unterstützen können. Genauso brauchen wir alle irgendwann Hilfe, ob bei Reparaturen, behördlichen Themen, Besorgungen oder anderen Angelegenheiten. Dafür bieten wir die Lösung.",
    Philosophy3: "Außerdem ist es für Helfer*innen genauso wie Hilfesuchende oft demotivierend, wenn sie endlose Prozesse durchlaufen müssen, bis sie die richtige Anfrage oder das richtige Angebot finden. Durch die schnelle Eingabe von bestimmten Informationen verbinden wir schnell, einfach und kostenlos die richtigen Hilfsangebote und -gesuche.",
    Philosophy4: "Zwar gibt es viele Hilfsangebote und Engagementmöglichkeiten von gemeinnützigen Vereinen und Stiftungen. Oft sind diese aber nicht einfach zu finden. Deswegen fassen wir die vielfältigen Hilfsangebote und Engagementmöglichkeiten auf einer einzigen Plattform zusammen. Genauso werden wir Firmen und Behörden die Möglichkeit bieten, sich einzubringen.",
    Philosophy5: "WirHelfen.eu besteht unter anderem aus einem ehrenamtlichen IT-Team, das nicht nur an digitalen Lösungen arbeitet, sondern in Krisensituationen schnell agiert, wie wir es in der Corona-Pandemie und der Flutkrise bereits unter Beweis stellen konnten. WirHelfen.eu zeichnet sich zudem durch ein internationales wie vielfältigen Team aus, das neben seiner Expertise anhand von Persönlichkeit besticht. Wir alle brennen für das, was wir tun, und stehen mit unserer ganzen Person dahinter.",
    Philosophy6: "Darüber hinaus stehen wir im engen Kontakt mit der Agentur Rapid Peaks, die uns in vielerlei Hinsicht bereichert: mit ihrer Expertise, ihrem Netzwerk und vielem mehr.",
  }
}

const Story = () => {
  return (
    <>
      <ScrollView style={[globalStyle.container, {paddingBottom: 20}]}>
        <View style={TYPO.before_main_title}/>
        <Text style={TYPO.main_title}>{strings.de.Story}</Text>

        <Image source={require('frontend/assets/images/computer.png')}
               style={{width: '100%', height: 300}}
               resizeMode="contain"/>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.paragraph}>
            <Text style={TYPO.highlight}>{strings.de.Intro1_1}</Text>
            {strings.de.Intro1_2}
            <Text style={TYPO.highlight}>{strings.de.Intro1_3}</Text>
            {strings.de.Intro1_4}
          </Text>

          <Text style={TYPO.paragraph}>
            <Text style={TYPO.highlight}>{strings.de.Intro2_1}</Text>
            {strings.de.Intro2_2}
          </Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Work1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Work2}</Text>
        </View>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.small_heading}>{strings.de.Support1}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Support2}</Text>
          <Text style={TYPO.paragraph}>
            <Text style={TYPO.highlight}>{strings.de.Support3_1}</Text>
            {strings.de.Support3_2}
          </Text>
          <Text style={TYPO.paragraph}>
            <Text style={TYPO.highlight}>{strings.de.Support4_1}</Text>
            {strings.de.Support4_2}
          </Text>
        </View>


        <View style={TYPO.before_main_title}/>
        <Text style={TYPO.main_title}>
          {strings.de.Philosophy1_1}
          <Text style={TYPO.highlight}> WirHelfen</Text>
          {strings.de.Philosophy1_2}
        </Text>

        <Image source={require('frontend/assets/images/behoerde.png')}
               style={{width: '100%', height: 300}}
               resizeMode="contain"/>

        <View style={{marginBottom: 50}}>
          <Text style={TYPO.paragraph}>{strings.de.Philosophy2}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Philosophy3}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Philosophy4}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Philosophy5}</Text>
          <Text style={TYPO.paragraph}>{strings.de.Philosophy6}</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default Story;