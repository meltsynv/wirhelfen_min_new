import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const TYPO = StyleSheet.create({
    main_title: {
        fontFamily: 'Rubik-Black',
        fontWeight: '900',
        fontSize: 30,
        color: COLORS.blackColor,
        marginBottom: 15
    },
    before_main_title: {
        backgroundColor: COLORS.blackColor,
        width: 50,
        height: 5,
        borderRadius: 5,
        marginBottom: 7
    },
    sub_title: {
        fontFamily: 'Rubik-Black',
        fontWeight: '500',
        fontSize: 26,
        color: COLORS.blackColor,
        marginBottom: 15
    },
    before_sub_title: {
        backgroundColor: COLORS.blackColor,
        width: 30,
        height: 4,
        borderRadius: 5,
        marginBottom: 2
    },
    small_heading: {
        fontSize: 20,
        color: COLORS.blackColor,
        marginBottom: 15
    },
    paragraph: {
        fontSize: 16,
        color: COLORS.blackColor,
        lineHeight: 22
    },
    link: {
        fontSize: 16,
        color: COLORS.linkColor,
        lineHeight: 22
    },
    wirhelfen_name: {
        color: COLORS.primaryColor,
        fontWeight: '500',
    },
});