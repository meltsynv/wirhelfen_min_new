import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Snackbar } from 'react-native-paper';
import LinkButton from '../../components/LinkButton';
import { COLORS } from '../../Styles/colors';

// styles
import globalStyle from '../../Styles/globalStyles';
import ApiUrl from "../../data/globalData";

const Signin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastNamem, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [coronaCertification, setcoronaCertification] = useState('');

  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackBarText] = useState('');

  const navigation = useNavigation()

  const onDismissSnackBar = () => setVisible(false);

  const handleRergistrationProcess = async (event) => {

    if (email == emailConfirm && password == passwordConfirm) {
      try {
        const response = await axios.post(`${ApiUrl}/users`, {
          firstName: firstName,
          lastName: lastNamem,
          email: email,
          password: password,
          coronaCertificate: ''
        });
      } catch (error) {
        console.log(error)
      }

      navigation.navigate('Login');
    } else {
      setVisible(true);
      setSnackBarText('bitte überprüfe deine Eingabe');
    }

  }

  return (
    <>
      <ScrollView style={globalStyle.container}>
        <View style={{ marginBottom: 10, paddingBottom: 10, borderBottomWidth: 1 }}>
          <TextInput placeholder='Ihr Name' onChangeText={setFirstName} value={firstName} />
          <TextInput placeholder='Ihr Nachname' onChangeText={setLastName} value={lastNamem} />
        </View>
        <View style={{ marginBottom: 10, paddingBottom: 10, borderBottomWidth: 1 }}>
          <TextInput placeholder='email' onChangeText={setEmail} value={email} />
          <TextInput placeholder='email bestätigen' onChangeText={setEmailConfirm} value={emailConfirm} />
          <TextInput placeholder='password' onChangeText={setPassword} value={password} secureTextEntry={true} />
          <TextInput placeholder='password bestätigen' onChangeText={setPasswordConfirm} value={passwordConfirm} secureTextEntry={true} />
        </View>
        <LinkButton title={'Foto hochladen'} type={'primary'} link={'Camera'} />
        <Button title='registrieren' onPress={() => handleRergistrationProcess()} />
        <View style={{ marginTop: 100 }}>
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            duration={2000}
            style={{ backgroundColor: COLORS.needHelpColor }}
          >{snackbarText}</Snackbar>
        </View>
      </ScrollView>
    </>
  )
}

export default Signin;