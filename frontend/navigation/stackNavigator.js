import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from "react-native";

import Logo from '../assets/app/logo_green.svg';

// styles
import { COLORS } from '../Styles/colors';

// screens
import Home from "../Screens/Home/Home";
import Search from "../Screens/Search/Search";
import SearchDetails from "../Screens/Search/SearchDetails";
import Privacy from "../Screens/Privacy/Privacy";
import Imprint from "../Screens/Imprint/Imprint";
import Profile from "../Screens/Profile/Profile";
import CreateCard from "../Screens/CreateCard/CreateCard";
import CameraScreen from "../Screens/Camera/Camera";
import Menu from "../Screens/Menu/Menu";

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

const HomeStack = createStackNavigator();
const HomeStackNav = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={navHeaderStyle}>
        <HomeStack.Screen
            name="WirHelfen"
            component={Home}
            options={{
                headerLeft: () => (
                    <View style={{ width: 26, height: 26, marginLeft: 16 }}>
                        <Logo />
                    </View>
                )
            }}
        />
    </HomeStack.Navigator>
)

const SearchStack = createStackNavigator();
const SearchStackNav = ({ navigation }) => (
    <SearchStack.Navigator screenOption={navHeaderStyle}>
        <SearchStack.Screen
            name="Suche"
            component={Search}
            options={{
                headerLeft: () => (
                    <View style={{ width: 26, height: 26, marginLeft: 16 }}>
                        <Logo />
                    </View>
                )
            }}
        />
        <SearchStack.Screen
            name="SearchDetails"
            component={SearchDetails}
        />
        <SearchStack.Screen
            name="CreateCard"
            component={CreateCard}
            options={{
                title: 'Beitrag Erstellen'
            }}
        />
    </SearchStack.Navigator>
)

const ProfileStack = createStackNavigator();
const ProfileStackNav = ({ userName, ...props }) => (
    <ProfileStack.Navigator screenOption={navHeaderStyle}>
        <ProfileStack.Screen
            name='Profile'
            component={Profile}
            options={{
                title: `Hallo ${userName}`,
                headerRight: ({ color, size }) => (
                    <View style={{ width: 26, height: 26, marginRight: 16 }}>
                        <MaterialCommunityIcons name='account' color={color} size={26} />
                    </View>
                )
            }}
        />
        <ProfileStack.Screen
            name='Camera'
            component={CameraScreen}
        />
    </ProfileStack.Navigator>
)

const ImprintStack = createStackNavigator();
const ImprintStackNav = ({ navigation }) => (
    <ImprintStack.Navigator screenOption={navHeaderStyle}>
        <ImprintStack.Screen
            name="Imprint"
            component={Imprint}
        />
    </ImprintStack.Navigator>
)

const MenuStack = createStackNavigator();
const MenuStackNav = ({ navigation }) => (
    <MenuStack.Navigator screenOption={navHeaderStyle}>
        <MenuStack.Screen
            name="Menu"
            component={Menu}
        />
    </MenuStack.Navigator>
)

const PrivacyStack = createStackNavigator();
const PrivacyStackNav = ({ navigation }) => (
    <PrivacyStack.Navigator screenOption={navHeaderStyle}>
        <PrivacyStack.Screen
            name="Privacy"
            component={Privacy}
        />
    </PrivacyStack.Navigator>
)

export {
    HomeStackNav,
    SearchStackNav,
    ProfileStackNav,
    PrivacyStackNav,
    ImprintStackNav,
    MenuStackNav
};
