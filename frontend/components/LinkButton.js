import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../Styles/colors';

const LinkButton = ({ title, onPress, type, link, ...props }) => {
  const navigation = useNavigation();


  const setButtonColor = () => {
    if (type == 'primary') {
      return COLORS.primaryColor
    } else if (type == 'secondary') {
      return COLORS.needHelpColor
    } else {
      return COLORS.defaultColor;
    }
  }

  return (
    <Pressable
      style={[styles.button, { borderColor: setButtonColor() }]}
      onPress={() => navigation.navigate(`${link}`)}
    >
      <Text style={[styles.buttonText, { color: setButtonColor() }]}>{title}</Text>
    </Pressable >
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default LinkButton;