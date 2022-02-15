import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
import { useDispatch } from "react-redux";
import { add_Property } from "../../Store/reducers/createCardSlice";
import { COLORS } from "../../Styles/colors";

import Categorylist from "./categorylist";

export default function Howtohelp() {
  const [hilfesuchend, setHilfesuchend] = useState(true);
  const dispatch = useDispatch();
  // save to parent
  dispatch(
    add_Property({ cardType: hilfesuchend ? "Hilsgesuche" : "Hilfsangebot" })
  );

  return (
    <View style={stls.chipbuttons}>
      <View>
        <Chip
          style={{
            margin: 8,
            backgroundColor: hilfesuchend
              ? COLORS.primaryColor
              : COLORS.bgColor,
          }}
          onPress={() => {
            setHilfesuchend(true);
          }}
        >
          <Text style={{ fontSize: 15 }}>Helfer finden</Text>
        </Chip>
        <Chip
          style={{
            margin: 8,
            backgroundColor: !hilfesuchend
              ? COLORS.primaryColor
              : COLORS.bgColor,
          }}
          onPress={() => {
            setHilfesuchend(false);
          }}
        >
          <Text style={{ fontSize: 15 }}>Hilfe anbieten</Text>
        </Chip>
      </View>

      <Categorylist></Categorylist>
    </View>
  );
}

const stls = StyleSheet.create({
  chipbuttons: {
    alignContent: "center",
    //   alignItems: "center",
    marginTop: 15,
  },
});
