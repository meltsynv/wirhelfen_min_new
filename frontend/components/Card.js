import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { COLORS } from "../Styles/colors";

const Card = ({ type, description, category, sender, created_at }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate("SearchDetails", {
            type: type,
            description: description,
            category: category,
          })
        }
      >
        <View
          style={[
            styles.Card,
            {
              borderLeftColor:
                type === "Hilfsgesuche"
                  ? COLORS.needHelpColor
                  : COLORS.primaryColor,
              borderLeftWidth: 5,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                styles.card_type,
                {
                  color:
                    type === "Hilfsgesuche"
                      ? COLORS.needHelpColor
                      : COLORS.primaryColor,
                },
              ]}
            >
              {type}
            </Text>
            <Text style={styles.card_date}>
              {created_at.toString().split("T")[0]}
            </Text>
          </View>
          <Text style={styles.card_category}>{category}</Text>
          <Text>
            {visible ? description : description.slice(0, 75) + "..."}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "#ffffff",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 5,
  },
  card_type: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  card_category: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card_date: {
    fontSize: 12,
  },
});

export default Card;
