import React, { useState, useEffect,useRef } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { Picker, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import NumberFormat from "react-number-format";
import FoodCard from "./Foodcard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants';


var { width } = Dimensions.get("window");

import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const OrderCard = (props) => {

    const [expoPushToken, setExpoPushToken] = useState(props.order.item.user.exponentPushToken);
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => console.log(token));
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
          });
      
          responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
          });
      
          return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
          };
    }, []);


    const [state, setState] = useState()
    const [token, setToken] = useState()

    useEffect(() => {
        AsyncStorage.getItem("token")
            .then((res) => {
                setToken(res)
            })
            .catch((err) => console.log(err))
    }, []);

    const updateState = (id, status) => {
        if (status == "shipping"){
            sendPushNotification(expoPushToken)
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.put(`https://food-order-app12.herokuapp.com/api/orders/updateStatus/${id}`, { status }, config)
            .then((res) => {
                alert("Bạn đã UPDATE thành công !")
                console.log(id)
                console.log(status)
            })
            .catch((err) => {
                console.log(err)
                alert("UPDATE thất bại.")
            })
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.textContainer}>MĐH : </Text>
                    <Text style={styles.textContainer}>{props.order.item._id}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.textContainer}>ĐC : </Text>
                    <Text style={[styles.textContainer, { width: width * 0.65, textAlign: "right" }]}>{props.order.item.shippingAddrees}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.textContainer}>SĐT : </Text>
                    <Text style={styles.textContainer}>{props.order.item.user.phone}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.textContainer}>Người nhận : </Text>
                    <Text style={styles.textContainer}>{props.order.item.user.fullname}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.textContainer}>TT : </Text>
                    <NumberFormat
                        value={props.order.item.totalPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => (
                            <Text style={styles.textContainer}>{value} VNĐ</Text>
                        )}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textContainer}>Trạng thái : </Text>
                    <Item picker style={{ top: -28 }}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" color="#ff6c00" />}
                            placeholder="Chọn trạng thái"
                            selectedValue={props.order.item.status}
                            placeholderStyle={{ fontFamily: 'Comfortaa_Regular' }}
                            onValueChange={(e) => [setState(e)]}
                            style={{ marginTop: 15, width: width * 0.4, height: 50 }}
                            textStyle={{ fontFamily: 'Comfortaa_Regular' }}
                        >
                            <Picker.Item key={1} label={"Pending"} value={"pending"} />
                            <Picker.Item key={2} label={"Shipping"} value={"shipping"} />
                            <Picker.Item key={3} label={"Delivered"} value={"delivered"} />
                        </Picker>
                    </Item>
                </View>
            </View>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                data={props.order.item.orderItems}
                renderItem={(item) => {
                    return <FoodCard item={item} />;
                }}
                keyExtractor={(item) => `${item.food.id}`}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => updateState(props.order.item._id, state)}
            >
                <Text style={{ color: 'white', alignSelf: 'center' }}>Update</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 20,
        width: width * 0.9,
        justifyContent: 'center',
        padding: 15,
        marginTop: 10
    },
    textContainer: {
        fontFamily: 'Comfortaa_Regular',
        fontSize: 14,
    },
    buttonContainer: {
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#ff6c00',
        padding: 10
    }
})

const sendPushNotification = async (expoPushToken) => {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title: "Đơn hàng của bạn đang được giao! 📬",
        body: 'Hãy chuẩn bị tiền để nhận đơn hàng nào!',
        data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      //console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
}

export default OrderCard;