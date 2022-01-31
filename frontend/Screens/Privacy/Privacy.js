import React from 'react';
import {Text, View, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Unorderedlist from 'react-native-unordered-list';

// styles
import globalStyle from '../../Styles/globalStyles';
import {TYPO} from "../../Styles/typo";

const strings = {
    en: {
        Statement: "Privacy Policy",
        Introduction: "Introduction and general information",
        Introduction1: "Thank you for your interest in our website. The protection of your personal data is very important to us. In the following, you will find information on how we handle your data that is collected through your use of our website. Your data will be processed in accordance with the legal regulations on data protection.",
        ResponsiblePerson: "Responsible person in the sense of the DSGVO",
        DpoContact: "Contact details of the data protection officer",
        Terms: "Definitions",
        Terms1: "Our privacy policy is intended to be simple and understandable for everyone. In this Privacy Policy, the official terms of the General Data Protection Regulation (GDPR) are generally used. The official definitions are explained in Art. 4 DSGVO.",
        Logs: "Server log files",
        Logs1: "When you call up our website, it is technically necessary for data to be transmitted to our web server via your Internet browser. The following data is recorded during an ongoing connection for communication between your internet browser and our web server:",
        Logs1_1: "Date and time of request",
        Logs1_2: "Name of the requested file",
        Logs1_3: "Page from which the file was requested",
        Logs1_4: "Access-status",
        Logs1_5: "Web browser used and operating system used",
        Logs1_6: "(Full) IP address of the requesting computer",
        Logs1_7: "Amount of data transferred",
        Logs2: "We collect the listed data to ensure a smooth connection setup of the website and to enable a comfortable use of our website by the users. In addition, the log file is used to evaluate system security and stability as well as for administrative purposes. The legal basis for the temporary storage of the data or the log files is Art. 6 para. 1 lit. f DSGVO.",
        Logs3: "For reasons of technical security, in particular to defend against attempted attacks on our web server, we store this data for a short period of time. Based on this data, it is not possible for us to draw conclusions about individual persons.",
        Cookies: "Cookies",
        Cookies1: "Our website uses so-called \"cookies\". Cookies are small text files that are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your terminal device. Session cookies are automatically deleted at the end of your visit. Permanent cookies remain stored on your end device until you delete them yourself or an automatic solution is provided by your web browser.",
        Cookies2: "Cookies have various functions. Numerous cookies are technically necessary, as certain website functions would not work without them (e.g., the shopping cart function or language settings). Other cookies are used to evaluate user behavior or display advertising.",
        Cookies3: "Technically necessary cookies are stored on the basis of Art. 6 (1) lit. f DSGVO. We have a legitimate interest in storing cookies for the technically error-free and optimized provision of our services. Other cookies are only stored with your consent on the basis of Art. 6 para. 1 lit. a DSGVO. The consent can be revoked at any time for the future. The legal basis may also arise from Art. 6 (1) lit. b DSGVO if the processing is necessary for the performance of a contract to which the data subject is a party, or for the performance of pre-contractual measures taken at the request of the data subject.",
        Cookies4: "Insofar as cookies are used for analysis purposes, we will inform you separately about this within the scope of this privacy policy and obtain your consent.",
        Cookies5: "You can set your browser to allow you to",
        Cookies5_1: "be informed about the setting of cookies,",
        Cookies5_2: "allow cookies only in individual cases,",
        Cookies5_3: "exclude the acceptance of cookies for certain cases or in general,",
        Cookies5_4: "enable the automatic deletion of cookies when closing the browser.",
        Cookies6: "Cookie settings can be managed under the following links for the respective browsers:",
        Cookies6_1: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
        Cookies7_1: "You can also manage cookies of many companies and functions used for advertising individually. To do this, use the appropriate user tools, available at",
        Cookies7_2: "or",
        Cookies8: "Most browsers also offer a so-called \"do-not-track\" function. When this feature is enabled, the respective browser tells advertising networks, websites and applications that you do not want to be tracked for the purpose of behavioral advertising and the like.",
        Cookies9: "For information and instructions on how to edit this feature, depending on your browser provider, see the links below:",
        Cookies10: "Additionally, you can prevent so-called scripts from loading by default. \"NoScript\" allows JavaScripts, Java and other plug-ins to run only on trusted domains of your choice. Information and instructions on how to edit this feature can be obtained from your browser provider (e.g., for Mozilla Firefox at:",
        Cookies11: "Please note that if you disable cookies, the functionality of our website may be limited.",
        CookieSettings: "Change cookie settings",
        CookieSettings1: "You can revoke or change your cookie settings at any time. To do so, access the cookie settings again via this link (embed hyperlink to cookie settings).",
        Contact: "Contact form and contact by  email",
        Contact1: "If you send us inquiries via contact form or  email, your information from the inquiry form or your  email, including the first and last name you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. The specification of an  email address is required to contact us, the specification of your name and telephone number is voluntary. Under no circumstances will we pass on this data without your consent. The legal basis for the processing of the data is our legitimate interest in responding to your request pursuant to Art. 6 (1) lit. f DSGVO and, if applicable, Art. 6 (1) lit. b DSGVO, if your request is aimed at concluding a contract. Your data will be deleted after final processing of your request, provided that there are no legal obligations to retain data. You may object to the processing of your personal data at any time in the case of Art. 6 para. 1 lit. f DSGVO.",
        Registration: "Registration",
        Registration1: "You have the option to register for certain services provided on our website and thus create a user profile. As part of the registration and setup process, we generally collect and use the following personal data:",
        Registration1_1: "email address",
        Registration1_2: "first and last name",
        Registration2: "In addition, voluntary information may be provided (e.g., telephone number etc.). Mandatory information, which is provided for the purpose of registration, is marked as mandatory in the input mask with an asterisk. With your user account, you will be given the opportunity to use further parts of our website and to log in for the offers you have purchased. The legal basis for data processing is Art. 6 para. 1 lit. a DSGVO in the case of consent or Art. 6 para. 1 lit. b DSGVO if processing is necessary to provide the requested services. Your data will be deleted as soon as the user account on our website is deleted and insofar as no legal retention obligations exist. You can usually make a change and/or delete your user account, including the data you have provided, directly in your user account after logging in or by sending a corresponding message to the responsible person mentioned at the beginning.",
        Newsletter: "Newsletter",
        Newsletter1: "If you would like to receive the newsletter offered on the website with regular information about our offers and products, we require your  email as mandatory information. ",
        Newsletter2: "Additional data may be provided in order to address you personally in the newsletter and/or to identify you in case you wish to exercise your rights as a data subject.",
        Newsletter3: "For sending the newsletter we use the so-called double opt-in procedure. This means that we will only send you our newsletter by  email if you have expressly confirmed that you consent to the sending of newsletters. In the first step, you will receive an  email with a link that you can use to confirm that you, as the owner of the corresponding  email address, want to receive newsletters in the future. With the confirmation, you give us your consent pursuant to Art. 6 (1) lit. a DSGVO that we may use your personal data for the purpose of sending the desired newsletter.",
        Newsletter4: "When you register for the newsletter, we store, in addition to the  email address required for sending, the IP address through which you registered for the newsletter, as well as the date and time of registration and confirmation, in order to be able to trace possible misuse at a later date.",
        Newsletter5: "You can unsubscribe from the newsletter at any time via the link included in each newsletter or by sending an  email to the responsible person named above. After unsubscribing, your email address will be immediately deleted from our newsletter distribution list, unless you have expressly consented to the continued use of the collected data or the continued processing is otherwise permitted by law.",
        GoogleAnalytics: "Google Analytics",
        GoogleAnalytics1: "Our website uses Google Analytics, an internet analytics service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (\"Google\"). Google Analytics uses so-called \"cookies\".",
        GoogleAnalytics2: "Google will use this information on behalf of the operator of this website for the purpose of evaluating your use of the website and compiling reports on website activity. Google will also use this information to provide the website operator with other services related to the use of the website and the internet. The IP address sent by your browser as part of Google Analytics is not combined with other data from Google. The processing is carried out in accordance with Art. 6 para. 1 lit. a DSGVO on the basis of the consent given by you.",
        GoogleAnalytics3: "We use Google Analytics only with IP anonymization enabled. This means your IP address is only processed further by Google in a shortened form.",
        GoogleAnalytics4: "We have concluded an order processing agreement with the service provider, in which we oblige him to protect our customers' data and not to pass it on to third parties.",
        GoogleAnalytics5: "Since there is a transfer of personal data to the USA, further protection mechanisms are required to ensure the level of data protection of the GDPR. To ensure this, we have agreed standard data protection clauses with the provider in accordance with Art. 46 (2) lit. c DSGVO. These oblige the recipient of the data in the USA to process the data in accordance with the level of protection in Europe. In cases where this cannot be ensured even by this contractual extension, we will endeavor to obtain additional regulations and commitments from the recipient in the USA.",
        GoogleAnalytics6: "The Google Analytics terms of use and privacy information can be accessed via the following links:",
        GoogleAnalytics7: "The data will be deleted as soon as it is no longer necessary to achieve the purpose for which it was collected. Deletion of user-level and event-level data associated with cookies, user identifiers (e.g., User ID), and advertising IDs (e.g., DoubleClick cookies, Android advertising ID, IDFA [Apple identifier for advertisers]) will occur no later than 14 months after collection.",
        GoogleAnalytics8_1: "You can prevent cookies from being stored by adjusting the settings of your browser software accordingly. However, we would like to point out that in this case you may not be able to use all functions of this website without restrictions. You can also prevent Google from collecting the data generated by the cookie and from analyzing your use of the website (including your IP address) and from processing this data by Google by downloading and installing the browser plugin available at",
        GoogleAnalytics8_2: "https://tools.google.com/dlpage/gaoptout?hl=en",
        GoogleAnalytics8_3: "available",
        Receiver: "Data sharing and recipients",
        Receiver1: "There will be no transfer of your personal data to third parties except",
        Receiver1_1: "if we have explicitly indicated this in the description of the respective data processing,",
        Receiver1_2: "if you have given your express consent to this in accordance with Art. 6 (1) p. 1 lit. a DSGVO, (e.g., data transfer of helpers to press people),",
        Receiver1_3: "the disclosure is necessary for the assertion, exercise or defense of legal claims pursuant to Art. 6 (1) p. 1 lit. f DSGVO and there is no reason to assume that you have an overriding interest worthy of protection in the non-disclosure of your data,",
        Receiver1_4: "in the event that there is a legal obligation for disclosure pursuant to Art. 6 (1) p. 1 lit. c DSGVO and",
        Receiver1_5: "as far as this is necessary for the processing of contractual relationships with you according to Art. 6 para. 1 p. 1 lit. b DSGVO.",
        Receiver2: "We also use external service providers for the processing of our services, which we have carefully selected and commissioned in writing. They are bound by our instructions and are regularly monitored by us. With which we have, if necessary, concluded order processing contracts in accordance with Art. 28 DSGVO. These are service providers for web hosting, sending emails and maintenance and care of our IT systems, etc. The service providers will not disclose this data to third parties.",
        Security: "Data security",
        Security1: "We take appropriate technical and organizational measures to ensure a level of protection appropriate to the risk in accordance with Art. 32 of the GDPR, taking into account the state of the art, the costs of implementation and the nature, scope, circumstances and purposes of the processing, as well as the varying likelihood and severity of the risk to the rights and freedoms of natural persons. This website uses SSL encryption for security reasons and to protect the transmission of confidential content.",
        Storage: "Personal data retention period",
        Storage1: "The duration of the storage of personal data is measured by the relevant statutory retention periods (e.g., from commercial law and tax law). After expiry of the respective period, the corresponding data is routinely deleted. Insofar as data is required for the fulfillment or initiation of a contract or there is a legitimate interest on our part to continue storing the data, the data will be deleted when it is no longer required for these purposes or you have exercised your right of revocation or objection.",
        YourRights: "Your rights",
        YourRights1: "The following provides information on what data subject rights the applicable data protection law grants you against the controller with respect to the processing of your personal data:",
        YourRights1_1: "The right to request information about your personal data processed by us pursuant to Art. 15 DSGVO. In particular, you may request information about the purposes of processing, the category of personal data, the categories of recipients to whom your data have been or will be disclosed, the planned storage period, the existence of a right to rectification, erasure, restriction of processing or objection, the existence of a right of complaint, the origin of your data if it has not been collected by us, and the existence of automated decision-making, including profiling, and, where applicable, meaningful information about its details.",
        YourRights1_2: "The right to request, without undue delay, the rectification of inaccurate or incomplete personal data held by us, in accordance with Art. 16 DSGVO.",
        YourRights1_3: "The right to request, in accordance with Art. 17 DSGVO, the erasure of your personal data stored by us, unless the processing is necessary for the exercise of the right to freedom of expression and information, for compliance with a legal obligation, for reasons of public interest, or for the establishment, exercise or defense of legal claims.",
        YourRights1_4: "The right to request the restriction of the processing of your personal data in accordance with Art. 18 DSGVO, insofar as the accuracy of the data is disputed by you, the processing is unlawful, but you object to its erasure and we no longer need the data, but you need it for the assertion, exercise or defense of legal claims or you have objected to the processing in accordance with Art. 21 DSGVO.",
        YourRights1_5: "The right to obtain, in accordance with Art. 20 DSGVO, your personal data that you have provided to us in a structured, commonly used and machine-readable format or to request that it be transferred to another controller.",
        YourRights1_6: "The right to lodge a complaint with a supervisory authority pursuant to Art. 77 DSGVO. As a rule, you can contact the supervisory authority of the federal state of our registered office stated above or, if applicable, that of your usual place of residence or place of work for this purpose.",
        YourRights1_7: "The right to revoke consent given in accordance with Art. 7 (3) DSGVO: You have the right to revoke consent to the processing of data once given at any time with effect for the future. In the event of revocation, we will delete the data concerned without delay, unless further processing can be based on a legal basis for processing without consent. The revocation of consent shall not affect the lawfulness of the processing carried out on the basis of the consent until the revocation.",
        Objection: "Right of objection",
        Objection1: "Insofar as your personal data is processed by us on the basis of legitimate interests pursuant to Art. 6 (1) p. 1 lit. f DSGVO, you have the right to object to the processing of your personal data pursuant to Art. 21 DSGVO, insofar as this is done for reasons arising from your particular situation. To the extent that the objection is directed against the processing of personal data for the purposes of direct marketing, you have a general right to object without the requirement to specify a particular situation.",
        Objection2: "If you wish to exercise your right of withdrawal or objection, it is sufficient to send an  email to",
        ExternalLinks: "External links",
        ExternalLinks1: "Social networks (Facebook, Twitter and Xing) are only included on our website as links to the corresponding services. After clicking on the embedded text/image link, you will be redirected to the page of the respective provider. User information will only be transferred to the respective provider after the forwarding. For information on the handling of your personal data when using these websites, please refer to the respective data protection provisions of the providers you use.",
        Changes: "Subject to change",
        Changes1: "We reserve the right to adapt or update this data protection declaration if necessary in compliance with the applicable data protection regulations. In this way, we can adapt it to the current legal requirements and take into account changes to our services, e.g., when introducing new services. The most current version applies to your visit.",
        LastChange: "Status of this privacy policy: 29.07.2021",
    },
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

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Introduction}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Introduction1}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.ResponsiblePerson}</Text>
                    <Text style={TYPO.paragraph}>WirHelfen gGmbH</Text>
                    <Text style={TYPO.paragraph}>Kistlerhofstr. 70 I Haus 2</Text>
                    <Text style={TYPO.paragraph}>81379 München</Text>
                    <Text style={TYPO.link}
                          onPress={() => Linking.openURL('mailto:datenschutz@wirhelfen.eu')}>datenschutz@wirhelfen.eu</Text>
                    <Text style={TYPO.paragraph}>+49 89 93909910</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.DpoContact}</Text>
                    <Text style={TYPO.paragraph}>Proliance GmbH / <Text style={TYPO.link}
                                                                        onPress={() => Linking.openURL('https://www.datenschutzexperte.de')}>www.datenschutzexperte.de</Text></Text>
                    <Text style={TYPO.paragraph}>Datenschutzexperte</Text>
                    <Text style={TYPO.paragraph}>Leopoldstr. 21</Text>
                    <Text style={TYPO.paragraph}>80802 München</Text>
                    <Text style={TYPO.link}
                          onPress={() => Linking.openURL('mailto:datenschutzbeauftragter@datenschutzexperte.de')}>datenschutzbeauftragter@datenschutzexperte.de</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Terms}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Terms1}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Logs}</Text>
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

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Cookies}</Text>
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

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Contact}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Contact1}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Registration}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Registration1}</Text>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Registration1_1}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Registration1_2}</Text></Unorderedlist>
                    <Text style={TYPO.paragraph}>{strings.de.Registration2}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Newsletter}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter1}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter2}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter3}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter4}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Newsletter5}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.GoogleAnalytics}</Text>
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

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>Google Maps</Text>
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


                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Receiver}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Receiver1}</Text>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_1}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_2}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_3}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_4}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.Receiver1_5}</Text></Unorderedlist>
                    <Text style={TYPO.paragraph}>{strings.de.Receiver2}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Security}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Security1}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Storage}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Storage1}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.YourRights}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.YourRights1}</Text>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_1}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_2}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_3}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_4}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_5}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_6}</Text></Unorderedlist>
                    <Unorderedlist><Text style={TYPO.paragraph}>{strings.de.YourRights1_7}</Text></Unorderedlist>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Objection}</Text>
                    <Text style={{fontWeight: "bold"}}>{strings.de.Objection1}</Text>
                    <Text style={TYPO.paragraph}>
                        {strings.de.Objection2}
                        <Text style={TYPO.link}
                              onPress={() => Linking.openURL('mailto:datenschutz@wirhelfen.eu')}> datenschutz@wirhelfen.eu</Text>.
                    </Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.ExternalLinks}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.ExternalLinks1}</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <Text style={TYPO.small_heading}>{strings.de.Changes}</Text>
                    <Text style={TYPO.paragraph}>{strings.de.Changes1}</Text>
                </View>

                <Text style={TYPO.paragraph}>{strings.de.LastChange}</Text>
            </ScrollView>
        </>
    )
}

export default Privacy;