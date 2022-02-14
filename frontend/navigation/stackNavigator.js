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
import Impressum from "../Screens/Impressum/Impressum";
import Profile from "../Screens/Profile/Profile";
import CreateCard from "../Screens/CreateCard/CreateCard";
import CameraScreen from "../Screens/Camera/Camera";

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
        
        <HomeStack.Screen
            name="CreateCard"
            component={CreateCard}
            options={{
                title: 'Beitrag Erstellen'
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
        
    </SearchStack.Navigator>
)

const ProfileStack = createStackNavigator();
const ProfileStackNav = ({ userName, ...props }) => (
    <ProfileStack.Navigator screenOption={navHeaderStyle}>
        <ProfileStack.Screen
            name='ProfileScreen'
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


const ImpressumStack = createStackNavigator();
const ImpressumStackNav = ({ navigation }) => (
    <ImpressumStack.Navigator screenOption={navHeaderStyle}>
        <ImpressumStack.Screen
            name="Impressum"
            component={Impressum}
        />
    </ImpressumStack.Navigator>
)

export {
    HomeStackNav,
    SearchStackNav,
    ProfileStackNav,
    ImpressumStackNav
};
