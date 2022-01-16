import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

const globalStyle = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.bgColor,
    borderTopColor: '#eeeeee',
    borderTopWidth: 1
  },
  sectionContaimer: {
    paddingBottom: 75
  }
})

export default globalStyle;