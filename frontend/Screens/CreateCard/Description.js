import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Modal, Switch, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { add_Property } from "../../Store/reducers/createCardSlice";

export default function ({ onChangeTextHandler }) {
  const [selectedValue, setSelectedValue] = useState(0);
  const [isEnabled, setEnabled] = useState(false);
  const toggleSwitch = () => setEnabled((previousState) => !previousState);
  const dispatch = useDispatch();
  const calculate_expiration_date = (timespan) => {
    const date_now = Date.now();

    if (timespan === 0) {
      return dispatch(add_Property({ activetill: null }));
    }
    return dispatch(
      add_Property({
        activetill: new Date(
          Date.now().getTime() + timespan * (30.5 * 24 * 60 * 60000)
        ),
      })
    );
  };

  return (
    <View style={{ margin: 9 }}>
      <Text style={{ fontSize: 25, marginTop: 20 }}>
        Detaillierte Beschreibung:
      </Text>
      <Text style={{ fontSize: 18, marginTop: 20 }}>Sichtbarkeit:</Text>
      <Picker
        style={{
          borderBottomWidth: 1,
          backgroundColor: "lightgray",
          borderRadius: 20,
        }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="1 Monat" value={1} />
        <Picker.Item label="3 Monate" value={2} />
        <Picker.Item label="6 Monate" value={3} />
        <Picker.Item label="unbegrenzt" value={0} />
      </Picker>
      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <Text style={{ fontSize: 18, top: 3 }}>Zeitraum:</Text>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: "lightgray",
            borderWidth: 0,
            borderRadius: 20,
            marginLeft: 8,
            padding: 3,
            paddingStart: 14,
          }}
          placeholder="16-18 Uhr"
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ fontSize: 18, top: 10, marginRight: 10 }}>
          Werktags{" "}
        </Text>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch()}
          value={isEnabled}
        />
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>weitere Angaben / Beschreibung:</Text>
        <TextInput
          style={{
            flex: 0.8,
            borderRadius: 9,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "lightgray",
          }}
          textAlignVertical="top"
          onChangeText={onChangeTextHandler}
          multiline
          numberOfLines={5}
          placeholder="Description"
        ></TextInput>
      </View>
    </View>
  );
}
