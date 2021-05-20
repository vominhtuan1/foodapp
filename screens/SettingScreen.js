import React from "react";
import { Text, View,StyleSheet, TextInput, ScrollView } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import BT_Order from './Products/bt_Order'
import BT_search from './Products/bt_Seach';
import BT_Products from './Products/bt_Products';
import BT_Categories from './Products/bt_Category';
import List from "./Products/listFood";
const SettingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.textinput}>Product</Text>
        <View style={styles.header1}>
            <BT_Order/> 
            <BT_Products/>
            <BT_Categories/>
        </View>
        
      </View>
      <View style={styles.seach}>
            <BT_search/>
        </View>
      <View style={styles.body}>
            <View style={styles.body1}>
              <Text style={styles.bodyText}> </Text>
              <Text style={styles.bodyText}>Name </Text>
              <Text style={styles.bodyText}>Category </Text>
              <Text style={styles.bodyText}>Price </Text>
            </View>
            
            <View style={styles.body2}>
                <List/>
            </View>
      </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center" 
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center" 
  },
  body: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center" 
  },
  header1: {
    flex:1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center" 
  },
  body1: {
    flex:1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center" ,
    backgroundColor:'#dfdce0',
  },
  body2: {
    flex:8,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center" ,
    
  },
  bodyText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center" 
  },
  seach: {
    flex:2,
    justifyContent: "center",
    alignItems: "center" 
  },
  textinput: {
    marginTop: 30,
    flex:1,
    justifyContent: "center",
    alignItems: "center" ,
    fontSize: 30,
  },
})
export default SettingScreen;
