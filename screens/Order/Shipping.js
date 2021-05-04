import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Shipping = () => {
  return (
    <View>
      <View>
        <Text style={styles.container}>Bàn giao vận chuyển</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    color: "green",
    padding: 24,
  },
});
export default Shipping;
