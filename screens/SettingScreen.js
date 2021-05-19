import React from "react";
import { Text, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
const SettingScreen = () => {
  return (
    <View style={styles.header}>
      <Text>Product</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center" 
  },
})
export default SettingScreen;
