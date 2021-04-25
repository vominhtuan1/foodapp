import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/Cart/CartScreen';
import Checkout from '../screens/Cart/Checkout/Checkout';
import Thankyou from '../screens/Cart/Checkout/Thankyou';


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
                component={Checkout}
                options={{
                    title : 'Thanh toán'
                }}
            />
            <Stack.Screen
                name = "Thankyou"
                component={Thankyou}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function CartNavigator(){
    return <MyStack/>
}