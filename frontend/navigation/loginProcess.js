import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from "react-native";

// styles
import { COLORS } from '../Styles/colors';
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Login/Login";
import Signin from "../Screens/Signin/Signin";

const navHeaderStyle = {
  headerStyle: {
    backgroundColor: COLORS.bgColor
  },
  headerTintColor: COLORS.primaryColor,
  headerTitleStyle: {
    fontSize: 18,
    fontFamily: 'Rubik-Black',
  },
  headerTitleAlign: "center",
}

const LoginProcessStack = createStackNavigator();
const LoginProcessStackNav = ({ userName, ...props }) => (
  <NavigationContainer>
    <LoginProcessStack.Navigator screenOption={navHeaderStyle}>
      <LoginProcessStack.Screen
        name='Login'
        component={Login}
      />
      <LoginProcessStack.Screen
        name='Signin'
        component={Signin}
      />
    </LoginProcessStack.Navigator>
  </NavigationContainer>
)

export {
  LoginProcessStackNav
};