import React from 'react';
import { Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import LinkButton from '../../components/LinkButton';

// styles
import globalStyle from '../../Styles/globalStyles';
import profileStyle from './profileStyle';

const Profile = () => {
    const userData = useSelector(state => state.login.userData)
    return (
        <>
            <View style={globalStyle.container}>
                <Text>{userData.firstName}</Text>
                <Text>{userData.lastName}</Text>
                <Text>{userData.email}</Text>
                <LinkButton title={'Foto hochladen'} type={'primary'} link={'Camera'} />
            </View>
        </>
    )
}



export default Profile;