import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { connect, useDispatch } from 'react-redux';
import LinkButton from '../../components/LinkButton';

import { COLORS } from '../../Styles/colors';

import { LOGIN_URI } from '../../db_data'

// styles
import globalStyle from '../../Styles/globalStyles';
import { set_login, set_userData } from '../../Store/reducers/loginSlice';

export default function Login  ()  {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackBarText] = useState('');
  const dispatch = useDispatch()

  const handleLoginProcess = async () => {
    const resultUser = await axios(LOGIN_URI +`users/${emailText}`);

    if (resultUser.data.length == 0 || resultUser.data[0].password != passwordText) {
      setVisible(true);
      setSnackBarText('keine email Übereinstimmung ');
    } else {
      if (resultUser.data[0].password != passwordText || resultUser.data[0].email != emailText) {
        setVisible(true);
        setSnackBarText('bitte überprüfe deine Log In Daten')
      } else {
        dispatch(set_login(true));
        dispatch(set_userData(resultUser.data[0]));
        console.log(`\n\n\n----------------------------------------\n\n\n\n\n` + resultUser.data[0].firstName + ` loged in \n\n`);
        
      }
    }
  }

  const onDismissSnackBar = () => setVisible(false);

  return (
    <>
      <View style={globalStyle.container}>
        <TextInput
          placeholder='e-mail'
          onChangeText={setEmailText}
          value={emailText} />
        <TextInput
          placeholder='password'
          secureTextEntry={true}
          onChangeText={setPasswordText}
          value={passwordText} />
        <Button title='anmelden' onPress={() => handleLoginProcess()} />
        <LinkButton title={'Registrieren'} link={'SignUp'} type={'primary'} />
      </View>
      <View style={{ marginTop: 100 }}>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={2000}
          style={{ backgroundColor: COLORS.needHelpColor }}
        >{snackbarText}</Snackbar>
      </View>
    </>
  )
}

