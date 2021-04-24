import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Dimensions, LogBox } from "react-native";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

//  Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

// Navigations
import FoodScreen from "./screens/FoodScreen";
import CategoryItem from "./components/category/categoryItem";

import MyTab from "./navigation/Tab";


export default function App() {
    LogBox.ignoreAllLogs();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("font is loaded");
        async function loadFont() {
            await Font.loadAsync({
                Comfortaa_Bold: require("./assets/font/Comfortaa-Bold.ttf"),
                Comfortaa_Light: require("./assets/font/Comfortaa-Light.ttf"),
                Comfortaa_Medium: require("./assets/font/Comfortaa-Medium.ttf"),
                Comfortaa_Regular: require("./assets/font/Comfortaa-Regular.ttf"),
                Coiny_Regular: require("./assets/font/Coiny-Regular.ttf"),
                ...Ionicons.font,
            });
            setLoading(false);
        }
        loadFont();
    }, [loading]);
    //check if icon is selected

    if (loading) {
        console.log("font is not load");
        return (
            <View>
                <Text></Text>
            </View>
        );
    } else {
        return (
            <Provider store={store}>
                <MyTab />
            </Provider>
        );
    }
}
