import React, { useState,useEffect} from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity,FlatList } from "react-native";
import { Picker, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import NumberFormat from "react-number-format";
import FoodCard from "./Foodcard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


var { width } = Dimensions.get("window");

const OrderCard = (props) => {
    const [state, setState] = useState()
    const [token, setToken] = useState()

    useEffect(() => {
        AsyncStorage.getItem("token")
            .then((res) => {
                setToken(res)
            })
            .catch((err) => console.log(err))
        }, []);
   
    const updateState = (id,status) =>{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.put(`https://food-order-app12.herokuapp.com/api/orders/updateStatus/${id}`,{status},config)
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
                onPress={() => updateState(props.order.item._id,state)}    
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
export default OrderCard;