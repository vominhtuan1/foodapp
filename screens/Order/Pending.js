import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import { Container } from 'native-base';
import { SimpleLineIcons } from "@expo/vector-icons";
import codeOrder from "../../data/codeOrder";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

var {width} = Dimensions.get("window")

const Pending = () => {
  const [orders, setOrders] = useState()
  const [loading, setLoading] = useState(true)


  const getUser = async () => {
    const userID = await AsyncStorage.getItem("userID")
    const token = await AsyncStorage.getItem("token")
    return { userID, token }
  }

  useEffect(() => {
    getUser().then((user) => {
      const token = user.token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get("https://food-order-app12.herokuapp.com/api/orders", config)
        .then((res) => {
          setOrders(res.data),
            setLoading(false)
        })
        .catch((err) => console.log(err))
    })

  }, [])
  return (
    <>
      {loading == false ? (
        <View style={{backgroundColor: 'white', alignItems:'center'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={orders}
              keyExtractor={item => item._id}
              renderItem={(item) => {
                return (
                    <TouchableOpacity style={styles.container}>
                      <View style={styles.header}>
                        <SimpleLineIcons
                          name="notebook"
                          size={40}
                          color="black"
                        />
                        <View >
                          <Text style={styles.insize}>Mã ĐH: {item.item._id.substring(0,10)}</Text>
                          <Text style={styles.insize}>Thành tiền: {item.item.totalPrice}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                
                )
              }}
            />
          </ScrollView>
        </View>
      ) : (
        <Container
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require('../../assets/loading.gif')}
            style={{
              width: 300,
              height: 100
            }}
          />
        </Container>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  insize: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-around"
    
  },
  container: {
    backgroundColor: "#ffffff",
    width: width*0.8,
    marginBottom: 30,
    borderRadius: 20,
    padding : 30,
    marginHorizontal: 7,
    borderWidth: 1,
    borderColor: "#ececec",
    bottom: -10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  }
});
export default Pending;
