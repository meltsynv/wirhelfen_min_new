import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { COLORS } from "../../Styles/colors";
import Subcategorylist from "./Subcategorylist";

export default function Category_button({
  titletext,
  extended,
  setchoice,
  subcategories,
}) {
  return (
    <View style={stls.category_card}>
      <TouchableWithoutFeedback
        onPress={() => {
          setchoice(titletext);
        }}
        style={stls.category_button}
      >
        <Image
          source={require("../../assets/favicon.png")}
          style={stls.category_icon}
        ></Image>
        <Text style={stls.category_text}>{titletext}</Text>
      </TouchableWithoutFeedback>
      {extended ? (
        <>
          <View style={stls.extended_container}>
            <Subcategorylist subcategories={subcategories}></Subcategorylist>
          </View>
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
const stls = StyleSheet.create({
  category_button: {
    width: "100%",
    height: 160,
    alignItems: "center",
  },
  category_card: {
    borderRadius: 15,
    marginTop: 8,
    borderColor: COLORS.primaryColor,
    borderWidth: 1.5,
    alignItems: "center",
    width: "100%",
  },
  category_icon: {
    marginTop: 20,
    width: 75,
    height: 75,
  },
  category_text: {
    fontSize: 20,
    marginTop: 10,
    fontStyle: "normal",
  },
  extended_container: {
    width: "92%",
    borderTopWidth: 1.5,
    borderColor: COLORS.primaryColor,
  },
});
