import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "./categoryItem";
import { Categories } from "../../data/category";
const ListCategory = (props) => {
  const [categories, setCategories] = useState(Categories);
  const renderCategoryItem = ({ item }) => {
    return <CategoryItem item={item} navigation={props.navigation} />;
  };
  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
    />
  );
};
export default ListCategory;
