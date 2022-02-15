import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import { COLORS } from "../../Styles/colors";

export default function Sidebar() {
  return (
    <View style={stls.sidebar_container}>
      <TouchableNativeFeedback>
        <Text>hello world</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const stls = StyleSheet.create({
  sidebar_container: {
    backgroundColor: COLORS.bgColor,
    flex: 1,
    alignItems: "center",
  },
  sidebar_txt: {
    fontSize: 15,
  },
});
