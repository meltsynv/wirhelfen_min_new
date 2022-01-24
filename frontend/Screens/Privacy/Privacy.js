import React from 'react';
import {Text, View, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Unorderedlist from 'react-native-unordered-list';

// styles
import globalStyle from '../../Styles/globalStyles';
import {TYPO} from "../../Styles/typo";

const strings = {
    en: {},
    de: {
        Statement: "Datenschutzerklärung",
        Introduction: "Einleitung und allgemeine Angaben",
        Introduction1: "Vielen Dank für Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten ist uns ein sehr wichtiges Anliegen. Im Folgenden finden Sie Informationen zum Umgang mit Ihren Daten, die durch Ihre Nutzung unserer Website erfasst werden. Die Verarbeitung Ihrer Daten erfolgt entsprechend den gesetzlichen Regelungen zum Datenschutz.",
        ResponsiblePerson: "Verantwortlicher im Sinne der DSGVO",
        DpoContact: "Kontaktdaten des Datenschutzbeauftragten",
        Terms: "Begriffsbestimmungen",
        Terms1: "Unsere Datenschutzerklärung soll für jedermann einfach und verständlich sein. In dieser Datenschutzerklärung werden in der Regel die offiziellen Begriffe der Datenschutzgrundverordnung (DSGVO) verwendet. Die offiziellen Begriffsbestimmungen werden in Art. 4 DSGVO erläutert.",
        Logs: "Server-Logfiles",
        Logs1: "Wenn Sie unsere Website aufrufen, ist es technisch notwendig, dass über Ihren Internetbrowser Daten an unseren Webserver übermittelt werden. Folgende Daten werden während einer laufenden Verbindung zur Kommunikation zwischen Ihrem Internetbrowser und unserem Webserver aufgezeichnet:",
        Logs1_1: "Datum und Uhrzeit der Anforderung",
        Logs1_2: "Name der angeforderten Datei",
        Logs1_3: "Seite, von der aus die Datei angefordert wurde",
        Logs1_4: "Zugriffsstatus",
        Logs1_5: "Verwendeter Webbrowser und verwendetes Betriebssystem",
        Logs1_6: "(Vollständige) IP-Adresse des anfordernden Rechners",
        Logs1_7: "Übertragene Datenmenge",
        Logs2: "Die aufgelisteten Daten erheben wir, um einen reibungslosen Verbindungsaufbau der Website zu gewährleisten und eine komfortable Nutzung unserer Website durch die Nutzer zu ermöglichen. Zudem dient die Logdatei der Auswertung der Systemsicherheit und -stabilität sowie administrativen Zwecken. Rechtsgrundlage für die vorübergehende Speicherung der Daten bzw. der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.",
        Logs3: "Aus Gründen der technischen Sicherheit, insbesondere zur Abwehr von Angriffsversuchen auf unseren Webserver, werden diese Daten von uns kurzzeitig gespeichert. Anhand dieser Daten ist uns ein Rückschluss auf einzelne Personen nicht möglich.",
        Cookies: "Cookies",
        Cookies1: "Unsere Internetseite verwendet sogenannte „Cookies“. Cookies sind kleine Textdateien, die entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert werden. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese selbst löschen oder eine automatische Lösung durch Ihren Webbrowser erfolgt.",
        Cookies2: "Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder Spracheinstellungen). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.",
        Cookies3: "Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Andere Cookies werden nur mit Ihrer Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO gespeichert. Die Einwilligung ist jederzeit für die Zukunft widerrufbar. Die Rechtsgrundlage kann sich auch aus Art. 6 Abs. 1 lit. b DSGVO ergeben, falls die Verarbeitung für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, die auf Anfrage der betroffenen Person erfolgen.",
        Cookies4: "Soweit Cookies zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und eine Einwilligung einholen.",
        Cookies5: "Sie können Ihren Browser so einstellen, dass Sie",
        Cookies5_1: "über das Setzen von Cookies informiert werden,",
        Cookies5_2: "Cookies nur im Einzelfall erlauben,",
        Cookies5_3: "die Annahme von Cookies für bestimmte Fälle oder generell ausschließen,",
        Cookies5_4: "das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.",
        Cookies6: "Die Cookie-Einstellungen können unter den folgenden Links für die jeweiligen Browser verwaltet werden:",
        Cookies6_1: "https://support.mozilla.org/de/kb/verbesserter-schutz-aktivitatenverfolgung-desktop",
        Cookies7_1: "Sie können Cookies vieler Unternehmen und Funktionen, die für Werbung eingesetzt werden, auch einzeln verwalten. Verwenden Sie dazu die entsprechenden Nutzer-Tools, abrufbar unter",
        Cookies7_2: "oder",
        Cookies8: "Die meisten Browser bieten zudem eine sog. „Do-Not-Track-Funktion“ an. Wenn diese Funktion aktiviert ist, teilt der jeweilige Browser Werbenetzwerken, Websites und Anwendungen mit, dass Sie nicht zwecks verhaltensbasierter Werbung und Ähnlichem „verfolgt“ werden möchten.",
        Cookies9: "Informationen und Anleitungen, wie Sie diese Funktion bearbeiten können, erhalten Sie je nach Anbieter Ihres Browsers, unter den nachfolgenden Links:",
        Cookies10: "Zusätzlich können Sie standardmäßig das Laden sog. Scripts verhindern. „NoScript“ erlaubt das Ausführen von JavaScripts, Java und anderen Plug-ins nur bei vertrauenswürdigen Domains Ihrer Wahl. Informationen und Anleitungen, wie Sie diese Funktion bearbeiten können, erhalten Sie über den Anbieter Ihres Browsers (z. B. für Mozilla Firefox unter:",
        Cookies11: "Bitte beachten Sie, dass bei der Deaktivierung von Cookies die Funktionalität unserer Website eingeschränkt sein kann.",
        CookieSettings: "Änderung Cookie-Einstellungen",
        CookieSettings1: "Sie können jederzeit Ihre Cookie-Einstellungen widerrufen oder verändern. Rufen Sie dazu erneut die Cookie-Einstellungen über diesen Link (Hyperlink zu den Cookie-Einstellungen einbetten) auf.",
        Contact: "Kontaktformular und Kontaktaufnahme per E-Mail",
        Contact1: "Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular bzw. Ihrer E-Mail inklusive der von Ihnen dort angegebenen Vor- und Nachname zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Angabe einer E-Mail-Adresse ist zur Kontaktangabe erforderlich, die Angabe Ihres Namens sowie Ihrer Telefonnummer ist freiwillig. Diese Daten geben wir in keinem Fall ohne Ihre Einwilligung weiter. Rechtsgrundlage für die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO sowie ggf. Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den Abschluss eines Vertrages abzielt. Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sie können im Falle von Art. 6 Abs. 1 lit. f DSGVO gegen die Verarbeitung Ihrer personenbezogenen Daten jederzeit Widerspruch einlegen.",
        Registration: "Registrierung",
        Registration1: "Sie haben die Möglichkeit, sich für bestimmte auf unserer Website bereitgestellte Dienste zu registrieren und damit ein Benutzerprofil anzulegen. Im Rahmen der Registrierung und Einrichtung erheben und verwenden wir in der Regel folgende personenbezogenen Daten:",
        Registration1_1: "E-Mail-Adresse",
        Registration1_2: "Vor- und Nachname",
        Registration2: "Darüber hinaus können freiwillige Angaben gemacht werden (z. B. Telefonnummer etc.). Pflichtangaben, die zum Zwecke der Registrierung gemacht werden, sind in der Eingabemaske mit einem Sternchenhinweis als Pflichtfeld gekennzeichnet. Sie erhalten mit Ihrem Nutzerkonto die Möglichkeit, weitere Teile unserer Website zu nutzen und sich für die von Ihnen erworbenen Angebote einzuloggen. Rechtsgrundlage der Datenverarbeitung ist bei Einwilligung Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 6 Abs. 1 lit. b DSGVO, sofern die Verarbeitung zur Erbringung der gewünschten Dienste erforderlich ist. Ihre Daten werden gelöscht, sobald das Nutzerkonto auf unserer Website gelöscht wird und soweit keine gesetzlichen Aufbewahrungspflichten bestehen. Eine Änderung und/oder Löschung ihres Benutzerskontos einschließlich der von Ihnen angegebenen Daten können Sie nach einem Login in der Regel direkt in Ihrem Benutzerkonto vornehmen oder durch entsprechende Nachricht an den einleitend genannten Verantwortlichen veranlassen.",
        Newsletter: "Newsletter",
        Newsletter1: "Wenn Sie den auf der Website angebotenen Newsletter mit regelmäßigen Informationen zu unseren Angeboten und Produkten beziehen möchten, benötigen wir als Pflichtangabe Ihre E-Mail. ",
        Newsletter2: "Die Angabe zusätzlicher Daten erfolgt gegebenenfalls, um Sie im Newsletter persönlich ansprechen zu können und/oder zu identifizieren, falls Sie von Ihren Rechten als Betroffener Gebrauch machen wollen.",
        Newsletter3: "Für den Versand des Newsletters verwenden wir das sogenannte Double-Opt-in-Verfahren. Dies bedeutet, dass wir Ihnen erst dann unseren Newsletter per E-Mail zusenden, wenn Sie uns ausdrücklich bestätigt haben, dass Sie in den Versand von Newslettern einwilligen. Sie erhalten dafür im ersten Schritt eine E-Mail mit einem Link, über den Sie bestätigen können, dass Sie als Inhaber der entsprechenden E-Mail-Adresse künftig Newsletter erhalten wollen. Mit der Bestätigung erteilen Sie uns Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, dass wir Ihre personenbezogenen Daten zu Zweck des gewünschten Newsletterversands nutzen dürfen.",
        Newsletter4: "Bei der Anmeldung zum Newsletter speichern wir, neben der für den Versand erforderlichen E-Mail-Adresse, die IP-Adresse, über die Sie sich für den Newsletter angemeldet haben sowie das Datum und die Uhrzeit der Anmeldung und Bestätigung, um einen möglichen Missbrauch zu einem späteren Zeitpunkt nachvollziehen zu können.",
        Newsletter5: "Sie können den Newsletter jederzeit über den in jedem Newsletter eingefügten Link oder eine E-Mail an den oben bezeichneten Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird Ihre E-Mail-Adresse unverzüglich aus unserem Newsletter-Verteiler gelöscht, soweit Sie nicht ausdrücklich in eine fortgesetzte Nutzung der erhobenen Daten eingewilligt haben oder die fortgesetzte Verarbeitung ansonsten gesetzlich zulässig ist.",
        GoogleAnalytics: "Google Analytics",
        GoogleAnalytics1: "Unsere Website nutzt Google Analytics, einen Internetanalysedienst, der von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (\"Google\") zur Verfügung gestellt wird. Google Analytics verwendet sogenannte \"Cookies\".",
        GoogleAnalytics2: "Google wird diese Informationen im Auftrag des Betreibers dieser Website benutzen, um Ihre Nutzung der Website auszuwerten und um Reports über die Websiteaktivitäten zu erstellen. Google wird diese Informationen auch dazu verwenden, dem Website-Betreiber weitere, mit der Nutzung der Website und des Internets verbundene, Dienstleistungen zu erbringen. Die von Ihrem Browser im Rahmen von Google Analytics gesendete IP-Adresse wird nicht mit anderen Daten von Google kombiniert. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a DSGVO auf der Grundlage der von Ihnen erteilten Einwilligung.",
        GoogleAnalytics3: "Wir verwenden Google Analytics nur mit aktivierter IP-Anonymisierung. Das bedeutet, Ihre IP-Adresse wird von Google nur gekürzt weiterverarbeitet.",
        GoogleAnalytics4: "Wir haben mit dem Dienstleister einen Auftragsverarbeitungsvertrag geschlossen, in welchem wir ihn verpflichten, die Daten unserer Kunden zu schützen und sie nicht an Dritte weiterzugeben.",
        GoogleAnalytics5: "Da eine Übertragung personenbezogener Daten in die USA erfolgt, sind weitere Schutzmechanismen erforderlich, die das Datenschutzniveau der DSGVO sicherstellen. Um dies zu gewährleisten, haben wir mit dem Anbieter Standarddatenschutzklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO vereinbart. Diese verpflichten den Empfänger der Daten in den USA die Daten entsprechend dem Schutzniveau in Europa zu verarbeiten. In Fällen, in denen dies auch durch diese vertragliche Erweiterung nicht sichergestellt werden kann, bemühen wir uns um darüber hinausgehende Regelungen und Zusagen des Empfängers in den USA.",
        GoogleAnalytics6: "Die Nutzungsbedingungen von Google Analytics und Informationen zum Datenschutz können über die folgenden Links abgerufen werden:",
        GoogleAnalytics7: "Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Eine Löschung der Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z. B. User-ID) und Werbe-IDs (z. B. DoubleClick-Cookies, Android-Werbe-ID, IDFA [Apple-Kennung für Werbetreibende]) verknüpft sind erfolgt spätestens 14 Monate nach ihrer Erhebung.",
        GoogleAnalytics8_1: "Sie können das Speichern von Cookies verhindern, indem Sie die Einstellungen Ihrer Browser-Software entsprechend anpassen. Wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht alle Funktionen dieser Website uneingeschränkt nutzen können. Sie können auch verhindern, dass Google die durch den Cookie erzeugten Daten sammelt und Ihre Nutzung der Website (einschließlich Ihrer IP-Adresse) analysiert und diese Daten durch Google verarbeitet, indem Sie das Browser-Plugin herunterladen und installieren, das unter",
        GoogleAnalytics8_2: "https://tools.google.com/dlpage/gaoptout?hl=en",
        GoogleAnalytics8_3: "verfügbar ist.",
        Receiver: "Datenweitergabe und Empfänger",
        Receiver1: "Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet nicht statt, außer",
        Receiver1_1: "wenn wir in der Beschreibung der jeweiligen Datenverarbeitung explizit darauf hingewiesen haben,",
        Receiver1_2: "wenn Sie ausdrückliche Ihre Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO dazu erteilt haben, (z. B. Datenweitergabe der Helfer an Presseleute),",
        Receiver1_3: "die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,",
        Receiver1_4: "im Falle, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht und",
        Receiver1_5: "soweit dies nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.",
        Receiver2: "Wir nutzen darüber hinaus für die Abwicklung unserer Services externe Dienstleister, die wir sorgfältig ausgewählt und schriftlich beauftragt haben. Sie sind an unsere Weisungen gebunden und werden von uns regelmäßig kontrolliert. Mit welchen wir erforderlichenfalls Auftragsverarbeitungsverträge gem. Art. 28 DSGVO geschlossen haben. Diese sind Dienstleister für das Webhosting, den Versand von E-Mails sowie Wartung und Pflege unserer IT-Systemen usw. Die Dienstleister werden diese Daten nicht an Dritte weitergeben.",
        Security: "Datensicherheit",
        Security1: "Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung.",
        Storage: "Dauer der Speicherung personenbezogener Daten",
        Storage1: "Die Dauer der Speicherung von personenbezogenen Daten bemisst sich an den einschlägigen gesetzlichen Aufbewahrungsfristen (z. B. aus dem Handelsrecht und dem Steuerrecht). Nach Ablauf der jeweiligen Frist werden die entsprechenden Daten routinemäßig gelöscht. Sofern Daten zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind oder unsererseits ein berechtigtes Interesse an der Weiterspeicherung besteht, werden die Daten gelöscht, wenn Sie zu diesen Zwecken nicht mehr erforderlich sind oder Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch gemacht machen.",
        YourRights: "Ihre Rechte",
        YourRights1: "Im Folgenden finden Sie Informationen dazu, welche Betroffenenrechte das geltende Datenschutzrecht Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten gewährt:",
        YourRights1_1: "Das Recht, gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen.",
        YourRights1_2: "Das Recht, gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.",
        YourRights1_3: "Das Recht, gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.",
        YourRights1_4: "Das Recht, gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben.",
        YourRights1_5: "Das Recht, gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.",
        YourRights1_6: "Das Recht, sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde des Bundeslandes unseres oben angegebenen Sitzes oder ggf. die Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes wenden.",
        YourRights1_7: "Das Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO: Sie haben das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit Wirkung für die Zukunft zu widerrufen. Im Falle des Widerrufs werden wir die betroffenen Daten unverzüglich löschen, sofern eine weitere Verarbeitung nicht auf eine Rechtsgrundlage zur einwilligungslosen Verarbeitung gestützt werden kann. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.",
        Objection: "Widerspruchsrecht",
        Objection1: "Sofern Ihre personenbezogenen Daten von uns auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie gemäß Art. 21 DSGVO das Recht, Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dies aus Gründen erfolgt, die sich aus Ihrer besonderen Situation ergeben. Soweit sich der Widerspruch gegen die Verarbeitung personenbezogener Daten zum Zwecke von Direktwerbung richtet, haben Sie ein generelles Widerspruchsrecht ohne das Erfordernis der Angabe einer besonderen Situation.",
        Objection2: "Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an",
        ExternalLinks: "Externe Verlinkungen",
        ExternalLinks1: "Soziale Netzwerke (Facebook, Twitter und Xing) sind auf unserer Website lediglich als Link zu den entsprechenden Diensten eingebunden. Nach dem Anklicken des eingebundenen Text-/Bild-Links werden Sie auf die Seite des jeweiligen Anbieters weitergeleitet. Erst nach der Weiterleitung werden Nutzerinformationen an den jeweiligen Anbieter übertragen. Informationen zum Umgang mit Ihren personenbezogenen Daten bei Nutzung dieser Websites entnehmen Sie bitte den jeweiligen Datenschutzbestimmungen der von Ihnen genutzten Anbieter.",
        Changes: "Änderungsvorbehalt",
        Changes1: "Wir behalten uns vor, diese Datenschutzerklärung erforderlichenfalls unter Beachtung der geltenden Datenschutzvorschriften anzupassen bzw. zu aktualisieren. Auf diese Weise können wir sie den aktuellen rechtlichen Anforderungen anpassen und Änderungen unserer Leistungen berücksichtigen, z. B. bei der Einführung neuer Services. Für Ihren Besuch gilt die jeweils aktuellste Fassung.",
        LastChange: "Stand dieser Datenschutzerklärung: 29.07.2021",
    },
};

const Privacy = () => {
    return (
        <>
            <ScrollView style={[globalStyle.container, {paddingBottom: 20}]}>
                <View style={TYPO.before_main_title}/>
                <Text style={TYPO.main_title}>{strings.de.Statement}</Text>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Introduction}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Introduction1}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.ResponsiblePerson}</Text>
                    <Text style={TYPO.paragraph}>WirHelfen gGmbH</Text>
                    <Text style={TYPO.paragraph}>Kistlerhofstr. 70 I Haus 2</Text>
                    <Text style={TYPO.paragraph}>81379 München</Text>
                    <Text style={TYPO.link}
                          onPress={() => Linking.openURL('mailto:datenschutz@wirhelfen.eu')}>datenschutz@wirhelfen.eu</Text>
                    <Text style={TYPO.paragraph}>+49 89 93909910</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.DpoContact}</Text>
                    <Text style={TYPO.paragraph}>Proliance GmbH / <Text style={TYPO.link}
                                                                        onPress={() => Linking.openURL('https://www.datenschutzexperte.de')}>www.datenschutzexperte.de</Text></Text>
                    <Text style={TYPO.paragraph}>Datenschutzexperte</Text>
                    <Text style={TYPO.paragraph}>Leopoldstr. 21</Text>
                    <Text style={TYPO.paragraph}>80802 München</Text>
                    <Text style={TYPO.link}
                          onPress={() => Linking.openURL('mailto:datenschutzbeauftragter@datenschutzexperte.de')}>datenschutzbeauftragter@datenschutzexperte.de</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Terms}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Terms1}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Logs}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Logs1}</Text>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Logs1_1}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Logs1_2}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Logs1_3}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Logs1_4}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Logs1_5}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Logs1_6}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Logs1_7}</Text></Unorderedlist>
                    <Text style={TYPO.paragraph}>{strings.de.Logs2}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Logs3}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Cookies}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Cookies2}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Cookies3}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Cookies4}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Cookies5}</Text>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Cookies5_1}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Cookies5_2}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Cookies5_3}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Cookies5_4}</Text></Unorderedlist>
                    <Text style={TYPO.paragraph}>{strings.de.Cookies6}</Text>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://support.google.com/chrome/answer/95647')}>Google
                        Chrome</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.link} onPress={() => Linking.openURL('strings.de.Cookies6_1')}>Mozilla
                        Firefox</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d')}>Edge
                        (Microsoft)</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://support.apple.com/de-de/guide/safari/sfri11471/mac')}>Safari</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://help.opera.com/en/latest/web-preferences/#cookies')}>Opera</Text></Unorderedlist>
                    <Text style={TYPO.paragraph}>
                        {strings.de.Cookies7_1}
                        <Text style={TYPO.link}
                              onPress={() => Linking.openURL('https://www.aboutads.info/choices/')}> https://www.aboutads.info/choices/ </Text>
                        {strings.de.Cookies7_2}
                        <Text style={TYPO.link}
                              onPress={() => Linking.openURL('http://www.youronlinechoices.com/uk/your-ad-choices')}> http://www.youronlinechoices.com/uk/your-ad-choices</Text>.
                    </Text>
                    <Text style={TYPO.paragraph}>{strings.de.Cookies8}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Cookies9}</Text>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://support.google.com/chrome/answer/2790761?co=GENIE.Platform%3DDesktop')}>Google
                        Chrome</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature')}>Mozilla
                        Firefox</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d')}>Edge
                        (Microsoft)</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://support.apple.com/de-de/guide/safari/sfri40732/13.0/mac/10.15')}>Safari</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.link}
                                         onPress={() => Linking.openURL('https://help.opera.com/en/latest/features/#tracker-blocker')}>Opera</Text></Unorderedlist>
                    <Text style={TYPO.paragraph}>
                        {strings.de.Cookies10}
                        <Text style={TYPO.link}
                              onPress={() => Linking.openURL('https://addons.mozilla.org/de/firefox/addon/noscript/')}> https://addons.mozilla.org/de/firefox/addon/noscript/</Text>).
                    </Text>
                    <Text style={TYPO.paragraph}>{strings.de.Cookies11}</Text>
                </View>

                {/* <ngx-cookiebot-declaration></ngx-cookiebot-declaration>
                <Text style={{ fontWeight: "bold" }}>{ strings.de.CookieSettings }</Text>
                https://github.com/WirHelfen-eu/flood/issues/58
                <Text style={TYPO.paragraph}>{ strings.de.CookieSettings1 }</Text>--> */}

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Contact}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Contact1}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Registration}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Registration1}</Text>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Registration1_1}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Registration1_2}</Text></Unorderedlist>
                    <Text style={TYPO.paragraph}>{strings.de.Registration2}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Newsletter}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter1}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter2}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter3}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter4}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter5}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.GoogleAnalytics}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.GoogleAnalytics1}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.GoogleAnalytics2}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.GoogleAnalytics3}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.GoogleAnalytics4}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.GoogleAnalytics5}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.GoogleAnalytics6}</Text>
                    <Text style={TYPO.link}
                          onPress={() => Linking.openURL('http://www.google.com/analytics/terms/de.html')}>http://www.google.com/analytics/terms/de.html</Text>
                    <Text style={TYPO.link}
                          onPress={() => Linking.openURL('https://www.google.de/intl/de/policies/ ')}>https://www.google.de/intl/de/policies/</Text>
                    <Text style={TYPO.paragraph}>{strings.de.GoogleAnalytics7}</Text>
                    <Text style={TYPO.paragraph}>
                        {strings.de.GoogleAnalytics8_1}
                        <Text style={TYPO.link}
                              onPress={() => Linking.openURL('strings.de.GoogleAnalytics8_2')}> {strings.de.GoogleAnalytics8_2} </Text>
                        {strings.de.GoogleAnalytics8_3}
                    </Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>Google Maps</Text>
                    <Text style={TYPO.paragraph}>Unsere Homepage nutzt über eine Schnittstelle den
                        Online-Kartendienstanbieter Google Maps.
                        Dadurch können wir im Umkreis der suchenden Person Helfer oder Hilfesuchende besser bestimmen.
                        Anbieter des Kartendienstes ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                        Ireland. Zur Nutzung der Funktionalitäten von Google Maps ist es notwendig, Ihre IP-Adresse zu
                        speichern.</Text>
                    <Text style={TYPO.paragraph}>Google setzt hierbei Cookies ein, um Informationen über das
                        Nutzerverhalten zu sammeln. Die
                        Verarbeitung Ihrer personenbezogenen Daten ist für Ermittlung und Zusammenführung von Helfer und
                        Hilfesuchenden nach unseren Nutzungsbedingungen gem. Art. 6 Abs. 1 S. 1 lit. b DSGVO
                        erforderlich.</Text>
                    <Text style={TYPO.paragraph}>Da eine Übertragung personenbezogener Daten in die USA erfolgt, sind
                        weitere Schutzmechanismen
                        erforderlich, die das Datenschutzniveau der DSGVO sicherstellen. Um dies zu gewährleisten, setzt
                        Google Standarddatenschutzklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO ein. Diese verpflichten den
                        Empfänger der Daten in den USA, die Daten entsprechend dem Schutzniveau in Europa zu
                        verarbeiten. In Fällen, in denen dies auch durch diese vertragliche Erweiterung nicht
                        sichergestellt werden kann, bemühen wir uns um darüberhinausgehende Regelungen und Zusagen des
                        Empfängers in den USA.</Text>
                    <Text style={TYPO.paragraph}>Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
                        Datenschutzerklärung von
                        Google:</Text>
                    <Text style={TYPO.link}
                          onPress={() => Linking.openURL('https://www.google.de/intl/de/policies/privacy/')}>https://www.google.de/intl/de/policies/privacy/</Text>
                    <Text style={TYPO.paragraph}>Opt-out:<Text style={TYPO.link}
                                                               onPress={() => Linking.openURL('https://www.google.com/settings/ads/')}> https://www.google.com/settings/ads/</Text></Text>
                </View>


                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Receiver}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Receiver1}</Text>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_1}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_2}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_3}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_4}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_5}</Text></Unorderedlist>
                    <Text style={TYPO.paragraph}>{strings.de.Receiver2}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Security}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Security1}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Storage}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Storage1}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.YourRights}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.YourRights1}</Text>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_1}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_2}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_3}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_4}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_5}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_6}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_7}</Text></Unorderedlist>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Objection}</Text>
                    <Text style={{fontWeight: "bold"}}>{strings.de.Objection1}</Text>
                    <Text style={TYPO.paragraph}>
                        {strings.de.Objection2}
                        <Text style={TYPO.link}
                              onPress={() => Linking.openURL('mailto:datenschutz@wirhelfen.eu')}> datenschutz@wirhelfen.eu</Text>.
                    </Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.ExternalLinks}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.ExternalLinks1}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <View style={TYPO.before_sub_title}/>
                    <Text style={TYPO.sub_title}>{strings.de.Changes}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Changes1}</Text>
                </View>

                <Text style={TYPO.paragraph}>{strings.de.LastChange}</Text>
            </ScrollView>
        </>
    )
}

export default Privacy;