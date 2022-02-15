import { useState } from "react";
import { View, Text } from "react-native";
import { Chip } from "react-native-paper";
import { useDispatch } from "react-redux";
import { add_Property } from "../../Store/reducers/createCardSlice";
import { COLORS } from "../../Styles/colors";

export default ({ subcategories }) => {
  const [choice, setchoice] = useState([]);
  const dispatch = useDispatch();
  const add_new_choice = (choice_name) => {
    choice.includes(choice_name)
      ? setchoice(choice.filter((choice_) => choice_ !== choice_name))
      : setchoice([...choice, choice_name]);
  };
  dispatch(add_Property({ subcategories: choice }));

  return (
    <View>
      {subcategories.map((category, i) => {
        const ticked = choice.includes(category);

        return (
          <Chip
            style={{
              margin: 8,
              backgroundColor: ticked ? COLORS.primaryColor : COLORS.bgColor,
            }}
            onPress={() => {
              add_new_choice(category);
            }}
            key={i}
          >
            <Text>{category}</Text>
          </Chip>
        );
      })}
    </View>
  );
};
