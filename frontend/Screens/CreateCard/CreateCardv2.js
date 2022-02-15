import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native";
import globalStyle from "../../Styles/globalStyles";
import Description from "./Description";
import Howtohelp from "./HowtoHelp";
import Positioner from "./positioner";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";

export default function CreateCard() {
  const [progress, setProgress] = useState(1);
  useSelector((state) => console.log(state.createcards));

  const nav = () => {
    switch (progress) {
      case 1:
        return (
          <View>
            <Howtohelp></Howtohelp>
          </View>
        );
      case 2:
        return (
          <>
            <Description></Description>
          </>
        );
      default:
        return setProgress(1);
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: "20%", backgroundColor: "dodgerblue" }}>
        <Sidebar></Sidebar>
      </View>
      <ScrollView style={stls.scrollview}>
        {nav()}
        <View style={stls.ButtonsView}>
          <Button
            title="zurück"
            style={{ backgroundColor: "lightgray" }}
            onPress={() => setProgress(progress - 1)}
          ></Button>
          <View style={{ flex: 1 }}></View>
          <Button
            title="weiter"
            style={{ backgroundColor: "dodgerblue" }}
            onPress={() => setProgress(progress + 1)}
          ></Button>
        </View>
      </ScrollView>
    </View>
  );
}
const stls = StyleSheet.create({
  scrollview: {
    width: "90%",
    padding: "2%",
  },
  ButtonsView: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-around",
  },
});
