import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import FoodCard from "./foodCard";

const ListFood = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Hôm nay ăn gì? </Text>
      <FlatList
        data={props.data}
        renderItem={(item) => {
          return <FoodCard item={item} navigation={props.navigation} />;
        }}
        keyExtractor={(x) => x.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  tittle: {
    fontSize: 25,
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
    fontFamily: 'Coiny_Regular'
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 12
  },
});
export default ListFood;
