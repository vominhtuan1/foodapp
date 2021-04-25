import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

//Screens
import UserScreen from "../screens/UserScreen";
import SettingScreen from "../screens/SettingScreen";

import { Feather } from "@expo/vector-icons";

//Stacks
import HomeStack from "./HomeNavigator";
import CartNavigator from './CartNavigator';
import OrderNavigator from './OrderNavigator';


import { View } from "native-base";
import CartIcon from "../Shared/CartIcon";

const Tab = createBottomTabNavigator();


const MyTab = () => {
    return (

        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    keyboardHidesTabBar: true,

                    showLabel: false,
                    activeTintColor: "#ff6c00",
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
                    component={OrderNavigator}
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
                    name="Cart"
                    component={CartNavigator}
                    options={{
                        tabBarLabel: "Cart",
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    <Ionicons name="cart-sharp" size={size} color={color} />
                                    <CartIcon/>
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{
                        tabBarLabel: "Setting",
                        tabBarIcon: ({focused, color, size}) => {
                            return (
                                <View>
                                    <FontAwesome name="cog" size={size} color={color} />
                                </View>
                            )
                        }
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
