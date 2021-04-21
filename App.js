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
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
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
