import React from 'react'
import { connect, useSelector } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackNav, SearchStackNav, ImpressumStackNav, ProfileStackNav } from './stackNavigator';

// screens
import ProfileScreen from '../Screens/Profile/Profile';
import ImpressumScreen from '../Screens/Impressum/Impressum';
import { COLORS } from '../Styles/colors';
import UserData from '../data/User';
import Login from '../Screens/Login/Login';
import Signin from '../Screens/Signin/Signin';
import CameraScreen from '../Screens/Camera/Camera';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function NastedNavigator  ()  {
    const loginState = useSelector(state => state.login.loginState);
    const userData = useSelector(state => state.login.userData);
    return (
        <NavigationContainer>
            {loginState ? (
                <Tab.Navigator
                    initialRouteName={'Home'}
                    activeColor={COLORS.primaryColor}
                    inactiveColor="#95a5a6"
                    barStyle={{ backgroundColor: COLORS.bgColor }}
                >
                    <Tab.Screen
                        name="Home"
                        children={() => (
                            <HomeStackNav title={''} />
                        )}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='home' color={color} size={26} />
                            )
                        }}
                    />
                    <Tab.Screen
                        name="Search"
                        children={() => (
                            <SearchStackNav title={''} />
                        )}
                        options={{
                            title: 'Suche',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='magnify' color={color} size={26} />
                            )
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        children={() => (
                            <ProfileStackNav userName={userData.firstName} />
                        )}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='account' color={color} size={26} />
                            )
                        }}
                    />
                    <Tab.Screen
                        name="Menu"
                        component={ImpressumStackNav}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='menu' color={color} size={26} />
                            )
                        }}
                    />
                    
                </Tab.Navigator>

            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={Signin} />
                    <Stack.Screen name="Camera" component={CameraScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}



//export default connect(null, null)(NastedNavigator);