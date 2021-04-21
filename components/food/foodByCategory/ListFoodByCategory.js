import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import { Food } from "../../../data/food";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { getFoodByCategory } from "../../../data/fakeApi";
const ListFoodByCategory = ({ route }) => {
  renderFood = ({ item,navigation }) => {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        onPress={() => navigation.navigate("FoodDetail", {item})}
      >
        <View style={styles.container}>
          <Image style={styles.photo} source={item.src} />
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.content}>
            <Text style={styles.price}>{item.price}</Text>
            <Ionicons
              name="add-circle"
              size={30}
              color="black"
              onPress={() => console.log("icon click")}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={getFoodByCategory(route.params.categoryId)}
        navigation={route.params.navigation}
        renderItem={renderFood}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default ListFoodByCategory;
