import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import FoodScreen from "../screens/FoodScreen";
import CartScreen from "../screens/CartScreen";
import OrderScreen from "../screens/OrderScreen";
import UserScreen from "../screens/UserScreen";
import SettingScreen from "../screens/SettingScreen";
const Tab = createBottomTabNavigator();
import { Feather } from "@expo/vector-icons";
import HomeStack from "./HomeNavigator";
const MyTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,

          showLabel: false,
          activeTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Food"
          component={HomeStack}
          options={{
            tabBarLabel: "Trang chủ",
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarLabel: "Đơn hàng",
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <FontAwesome name="first-order" size={size} color={color} />
              );
            },
          }}
        />

        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="cart-sharp" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: "Tôi",
            tabBarIcon: ({ focused, color, size }) => {
              return <Feather name="user" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MyTab;
