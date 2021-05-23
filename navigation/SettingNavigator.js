import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SettingScreen from "../screens/SettingScreen"
import AddInforFood from "../screens/AddFood/AddInforFood";
    
import AddToFood from '../screens/AddFood/AddToFood';
import AddFoodStack from './AddFoodNavigator';

const Stack = createStackNavigator();
function SettingStack(){
    return(
            <Stack.Navigator>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="SettingScreen"
                    component={SettingScreen}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="AddToFood"
                    component={AddFoodStack}
                />
            </Stack.Navigator>
    )

}
export default SettingStack;