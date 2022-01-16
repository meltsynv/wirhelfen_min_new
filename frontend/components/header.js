import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../assets/app/logo_green.svg';

export default function Header({ title, navigation }) {

  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <Logo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',

    flexDirection: 'row',
    backgroundColor: '#ffffff',
    position: 'relative'
  },
  icon: {
    width: '35%',
    height: '35%',
    position: 'absolute',
    bottom: 10,
  }
});