import React, { Component, useEffect, useState } from "react";
import {
  RefreshControl,
  Button,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

// styles
import globalStyle from "../../Styles/globalStyles";
import { TYPO } from "../../Styles/typo";

// components
import CategoryFilterSection from "./categoryFilterSection";
import TypeFilterSection from "./typeFilterSection";
import Card from "../../components/Card";

import store from "../../Store/store";
import {
  fetch_cards,
  set_card_loading_status,
} from "../../Store/reducers/cardsSlice";
import { fetch_categories } from "../../Store/reducers/categoriesSlice";

const Search = () => {
  //local Hooks
  const [refreshing, setrefreshing] = useState(false);
  const [categoryfilter, setcategoryfilter] = useState([]);
  const [selectorfilter, setselectorfilter] = useState([]);
  const dispatch = useDispatch();

  // get auto-updating loading-status from store
  const card_status = useSelector((state) => state.cards.status);
  const cate_status = useSelector((state) => state.categories.status);

  // load store
  useEffect(() => {
    if (card_status === "idle") {
      dispatch(fetch_cards());
    }
    if (cate_status === "idle") {
      dispatch(fetch_categories());
    }
  }, [card_status, cate_status, dispatch]);
  // Define needed variables
  let categoriesDataLoadet = false;
  let cardsDataLoadet = false;
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  //functions for lifting up the state (adding Filters)
  const add_Filter = (categoryname) => {
    let new_cat_filter = [];
    categoryfilter.includes(categoryname)
      ? (new_cat_filter = categoryfilter.filter((cat) => cat !== categoryname)) //if true
      : (new_cat_filter = [...categoryfilter, categoryname]); // if false

    setcategoryfilter(new_cat_filter);
  };
  const add_selector = (selectorname) => {
    let new_selector_filter = [];
    selectorfilter.includes(selectorname)
      ? (new_selector_filter = selectorfilter.filter(
          (selector) => selector !== selectorname
        )) //if true
      : (new_selector_filter = [...selectorfilter, selectorname]); // if false

    setselectorfilter(new_selector_filter);
  };

  // Get Data from store
  const cardsData = useSelector((state) => state.cards.data);
  const categoryData = useSelector((state) => state.categories.data);
  cardsDataLoadet = card_status === "finished" && cardsData !== undefined;
  categoriesDataLoadet =
    cate_status === "finished" && categoryData !== undefined;

  // log data
  //console.log('search ====> store:',store.getState())
  //console.log('card_search', cardsData)
  //console.log('category_search', categoryData)
  //console.log('filter (cat,sel)', categoryfilter, selectorfilter)

  return (
    <>
      <ScrollView
        style={globalStyle.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setrefreshing(true);
              wait(800).then(() => {
                setrefreshing(false);
                dispatch(set_card_loading_status("idle"));
              });
            }}
          />
        }
      >
        <TypeFilterSection addFilter={add_selector} />
        {categoriesDataLoadet ? (
          <CategoryFilterSection
            categoryData={categoryData}
            addfilter={add_Filter}
          />
        ) : (
          <ActivityIndicator size={"small"} color={"#111111"} />
        )}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <View style={TYPO.before_sub_title} />
          <Text style={TYPO.sub_title}>Resultate</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          {cardsDataLoadet ? (
            // Filter
            cardsData.map((data) =>
              0 === selectorfilter.length ||
              selectorfilter.includes(data.cardType) ? (
                0 === categoryfilter.length ||
                categoryfilter.includes(data.category) ? (
                  <Card
                    key={data._id}
                    type={data.cardType}
                    description={data.description}
                    category={data.category}
                    sender={data.sender}
                    created_at={data.postdate}
                  />
                ) : (
                  <View key={data._id}></View>
                )
              ) : (
                <></>
              )
            )
          ) : (
            <ActivityIndicator size={"large"} color={"#ff0000"} />
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default Search;
