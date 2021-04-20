import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import FoodCard from "./foodCard";

const ListFood = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Hôm nay ăn gì </Text>
      <FlatList
        data={props.data}
        renderItem={(item) => {
          return <FoodCard item={item} navigation={props.navigation} />;
        }}
        keyExtractor={(x) => x.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 12,
  },
});
export default ListFood;
