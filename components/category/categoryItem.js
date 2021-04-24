import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const CategoryItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("FoodByCategory", {
          category: props.item.name,
          categoryId: props.item.id,
          navigation: props.navigation
        });
      }}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={props.item.image} />
        <Text style={styles.text}>{props.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 60,
    backgroundColor: "#ff8000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    marginLeft: 5,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Comfortaa_Bold',
    color: 'white',
    marginRight: 20,
    marginLeft: 10
  }
});

export default CategoryItem;
