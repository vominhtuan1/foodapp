import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { Container } from 'native-base';
import { SimpleLineIcons } from "@expo/vector-icons";
import codeOrder from "../../data/codeOrder";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";



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
        <View>
          <ScrollView>
            <FlatList
              data={orders}
              keyExtractor={item => item._id}
              renderItem={(item) => {
                return (
                  <View style={styles.container}>
                    <TouchableOpacity activeOpacity={0.7}>
                      <View style={styles.header}>
                        <SimpleLineIcons
                          style={styles.Icon}
                          name="notebook"
                          size={40}
                          color="black"
                        />
                        <View style={styles.insize}>
                          <Text style={styles.TextInput}>Mã ĐH: {item.item._id.substring(0,10)}</Text>
                          <Text style={styles.TextInput}>Thành tiền: {item.item.totalPrice}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
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
    flex: 5,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    width: "90%",
    height: 140,
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
  TextInput: {
    height: 42,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
});
export default Pending;
