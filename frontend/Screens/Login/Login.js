import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { connect } from 'react-redux';
import LinkButton from '../../components/LinkButton';

import { COLORS } from '../../Styles/colors';

// styles
import globalStyle from '../../Styles/globalStyles';

const Login = ({ navigation, ...props }) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackBarText] = useState('');

  const handleLoginProcess = async () => {
    const resultUser = await axios(`http://192.168.2.231:3000/api/v1/users/${emailText}`);

    if (resultUser.data.length == 0 || resultUser.data[0].password != passwordText) {
      setVisible(true);
      setSnackBarText('keine email Übereinstimmung ');
    } else {
      if (resultUser.data[0].password != passwordText || resultUser.data[0].email != emailText) {
        setVisible(true);
        setSnackBarText('bitte überprüfe deine Log In Daten')
      } else {
        props.setUserData(resultUser.data[0]);

        console.log(resultUser.data[0]);
        props.setLogin(true);
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

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (loginState) =>
      dispatch({ type: "SET_LOGIN", loginState: loginState }),
    setUserData: (userData) =>
      dispatch({ type: "SET_USERDATA", userData: userData })
  };
};

export default connect(null, mapDispatchToProps)(Login);