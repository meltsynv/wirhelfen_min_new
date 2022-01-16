import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/globalStyles';

const Impressum = () => {
  return (
    <>
      <ScrollView style={[globalStyle.container, { paddingBottom: 20 }]}>
        <View style={{ marginBottom: 10 }}>
          <Text>Informationspflicht laut § 5 TMG.</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Covid-19Tracker</Text>
          <Text>Musterstrasse 1, Stiege 1 Tür 1,</Text>
          <Text>12345 Musterhausen,</Text>
          <Text>Deutschland</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>UID-Nummer: DE12345678</Text>
          <Text>Wirtschafts-ID: DE123456789</Text>
          <Text>Register: Handelsregister</Text>
          <Text>Registernummer: HRB 123456</Text>
          <Text>Registergericht: Musterhausen</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text>Tel.: 01234/56789</Text>
          <Text>Fax: 01234/56789-0</Text>
          <Text>E-Mail: office@musterfirma.de</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Aufsichtsbehörde</Text>
          <Text>Bezirkshauptmannschaft Musterhausen</Text>
          <Text>Webseite der Aufsichtsbehörde</Text>
          <Text>https://www.aufsichtsbeoerde-musterhausen.de/</Text>
          <Text>Anschrift der Aufsichtsbehörde</Text>
          <Text>Musterweg 1, 12345 Musterhausen</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            Persönlich haftende Gesellschafter (Komplementär) der GmbH & Co KG
          </Text>
          <Text>Frieda Musterkomp</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Geschäftsführer</Text>
          <Text>Viktor Meltsyn, Xelia Mattick</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            Registernummer der Komplementär-GmbH:
          </Text>
          <Text>HRB 123456</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            Registergericht der Komplementär-GmbH:
          </Text>
          <Text>Musterhausen</Text>
          <Text>
            Quelle: Erstellt mit dem Impressum Generator von AdSimple in
            Kooperation mit bauenwir.de
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>EU-Streitschlichtung</Text>
          <Text>
            Gemäß Verordnung über Online-Streitbeilegung in
            Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
            Online-Streitbeilegungsplattform (OS-Plattform) informieren.
            Verbraucher haben die Möglichkeit, Beschwerden an die Online
            Streitbeilegungsplattform der Europäischen Kommission unter
            http://ec.europa.eu/odr?tid=321256001 zu richten. Die dafür
            notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum. Wir
            möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
            verpflichtet sind, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            Haftung für Inhalte dieser Website
          </Text>
          <Text>
            Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen
            uns korrekte und aktuelle Informationen bereitzustellen. Laut
            Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für eigene
            Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen
            Gesetzen verantwortlich. Leider können wir keine Haftung für die
            Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für
            jene die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im
            Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, die von ihnen
            übermittelten oder gespeicherten Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Unsere Verpflichtungen zur Entfernung von Informationen oder zur
            Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch
            im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10
            unberührt. Sollten Ihnen problematische oder rechtswidrige Inhalte
            auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die
            rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten
            im Impressum.
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            Haftung für Links auf dieser Website
          </Text>
          <Text>
            Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt
            wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht
            für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten
            und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen
            sind und wir Links sofort entfernen würden, wenn uns
            Rechtswidrigkeiten bekannt werden. Wenn Ihnen rechtswidrige Links auf
            unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie
            finden die Kontaktdaten im Impressum.
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Urheberrechtshinweis</Text>
          <Text>
            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
            unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte
            fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten,
            vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites
            erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte
            Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
            Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
            verletzen, bitten wir Sie uns zu kontaktieren.
          </Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Bildernachweis</Text>
          <Text>
            Die Bilder, Fotos und Grafiken auf dieser Webseite sind
            urheberrechtlich geschützt. Die Bilderrechte liegen bei den folgenden
            Fotografen und Unternehmen: Fotograf Mustermann
          </Text>
        </View>
      </ScrollView>
    </>
  )
}

export default Impressum;