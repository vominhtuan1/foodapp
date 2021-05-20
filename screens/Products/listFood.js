import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import codeOrder from '../../data/codeOrder';
const List = () => {
  return (
    
      <ScrollView>
        {codeOrder.map((item, index) => (
          <View key={item.id} style={styles.container}>
            
              <View style={styles.header}>
              
                  <Text style={styles.bodyText}>Image</Text>
                  <Text style={styles.bodyText}>Name </Text>
                  <Text style={styles.bodyText}>Category </Text>
                  <Text style={styles.bodyText}>Price </Text>
            
              </View>
            
          </View>
        ))}
      </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  bodyText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center" 
  },
  header: {
    flexDirection: "row",
    backgroundColor: "white",
   
    width: "100%",
    height:55,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    flex: 1,
    padding: 30,
  },
});
export default List;
