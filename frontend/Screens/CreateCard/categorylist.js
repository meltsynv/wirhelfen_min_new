import { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetch_categories } from "../../Store/reducers/categoriesSlice";
import { add_Property } from "../../Store/reducers/createCardSlice";
import Category_button from "./CategoryCard";

export default function Categorylist() {
  const categories = useSelector((store) => store.categories);
  const cate_status = categories.status;
  const dispatch = useDispatch();
  const [choice, setchoice] = useState();

  // speichern
  dispatch(add_Property({ category: choice }));

  //console.log(categories.data);
  useEffect(async () => {
    // if the categories aren't loaded from the Db yet, it should load them
    if (cate_status === "idle") {
      dispatch(fetch_categories());
    }
  });

  return (
    <View>
      {categories.data.map((category) => {
        const extended = choice === category.name;
        return (
          <Category_button
            key={category._id}
            titletext={category.name}
            extended={extended}
            setchoice={setchoice}
            subcategories={category.subcategories}
          />
        );
      })}
    </View>
  );
}
