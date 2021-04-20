import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button,
    Image,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
var { width } = Dimensions.get("window");
const HandleText = (text) => {
    if (text.length > 72) {
        return `${text.substr(0, 70)}......`;
    }
    return `${text}`;
};
const FoodCard = (props) => {

    const [food, setFood] = useState(props.item)

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {props.navigation.navigate("FoodDetail", {food : food.item})}}
        >
            <Image source={food.item.src} style={styles.image} resizeMode="contain" />
            <View style={styles.content}>
                <Text style={styles.name}>{food.item.name}</Text>

                <View style={styles.price_addImage}>
                    <Text>{food.item.price} đồng</Text>
                    <Image
                        source={require("../../assets/add.png")}
                        style={styles.imageAdd}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: 220,
        width: width / 2 - 35,

        borderRadius: 20,
        alignItems: "center",
        marginHorizontal: 10,
    },
    image: {
        width: width / 2 - 35,
        height: 150,
        borderRadius: 20,
        backgroundColor: "transparent",
    },
    content: {},
    name: {
        color: "#4f4a4a",
        fontSize: 15,
        fontWeight: "bold",
    },

    price_addImage: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageAdd: {
        marginLeft: 20,

        width: 25,
        height: 25,
    },
});
export default FoodCard;
