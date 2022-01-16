import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TeamCard from '../../components/teamCard';

// data
import CoreTeamData from '../../data/CoreTeamData';

// styles
import globalStyle from '../../Styles/globalStyles';
import { TYPO } from '../../Styles/typo';

const TeamSection = () => {
  return (
    <View style={globalStyle.sectionContaimer}>
      <View>
        <View style={TYPO.before_main_title} />
        <Text style={TYPO.main_title}>Unser Core Team</Text>
        <Text style={TYPO.paragraph}>Unser Team besteht neben dem Geschäftsführer aus ca. 30 Ehrenamtlichen, die nicht nur den Einsatz für das Gemeinnützige teilen, sondern alle in ihrem Fachbereich Expert*innen sind. Unter anderem befinden sich in diesem Team Journalist*innen, Programmierer*innen, Networker*innen und Marketing Manager*innen. Unser gesamtes Team</Text>
      </View>
      <View style={{ marginVertical: 16 }}>
        <ScrollView horizontal={true}>
          {CoreTeamData.data.map((data, i) => (
            <TeamCard key={i} name={data.name} imgPath={data.imgPath} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}



export default TeamSection;