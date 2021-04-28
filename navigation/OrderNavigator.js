import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

//Screen
import Pending from '../screens/Order/Pending';
import Shipping from '../screens/Order/Shipping';
import Deliveried from '../screens/Order/Deliveried';
import OrderScreen from '../screens/Order/OrderScreen';
const Tab = createMaterialTopTabNavigator();

function MyTab () {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Pending" component={Pending}/>
            <Tab.Screen name="Shipping" component={Shipping}/>
            <Tab.Screen name="Deliveried" component={Deliveried}/>
           
        </Tab.Navigator>
    )
}

export default function OrderNavigator() {
    return <MyTab/>
}