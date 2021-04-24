import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  ProgressViewIOSComponent,
} from "react-native";
import { Button, Container, Text } from "native-base";
import ListFood from "../components/food/ListFood";
import HeaderSearch from "../components/header";
import SearchListFood from "../components/food/searchFoodList";
import Banner from "../components/food/banner";
import ListCategory from "../components/category/listCategory";
import { Foods } from "../data/food.js";
import { getFoodByName } from "../data/fakeApi";
const FoodScreen = ({ navigation }) => {
  const [foods, setFoods] = useState(Foods);

  const [focus, setFocus] = useState(false);
  const [foodName, setFoodName] = useState();
  function isFocus(focus) {
    setFocus(focus);
  }
  function getFoodName(name) {
    setFoodName(name);
  }

  console.log("render foodScreen");
  return (
    <Container >
      <HeaderSearch isFocus={isFocus} foodName={getFoodName} />

      {focus ? (
        <SearchListFood data={getFoodByName(foodName)} navigation={navigation}/>
      ) : (
        <ScrollView style={{ backgroundColor: "white" }}>
          <Banner />
          <ListCategory navigation={navigation} />
          <ListFood data={foods} navigation={navigation} />
        </ScrollView>
      )}
    </Container>
  );
};
export default FoodScreen;
