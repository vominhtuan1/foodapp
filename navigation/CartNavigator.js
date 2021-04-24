import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/Cart/CartScreen';
import CheckoutNavigator from './CheckoutNavigator';

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Cart"
                component={CartScreen}
                options={{
                    headerShown: false
                }}
            /> 
            <Stack.Screen
                name = "Checkout"
                component={CheckoutNavigator}
                options={{
                    title: "Checkout"
                }}
            /> 
        </Stack.Navigator>
    )
}

export default function CartNavigator(){
    return <MyStack/>
}