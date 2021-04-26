//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

// create a component
const BT_Register = ({navigation}) =>{
     
        return (
            <View>
                <TouchableOpacity style={styles.registerbtn}
                onPress={()=>{
                    console.log(navigation)
                    navigation.navigate('Register')
                }}
                >
                     <Text style={styles.registerText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        );
    
}

// define your styles
const styles = StyleSheet.create({
    registerbtn: {
        width: 200,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#ebdb2d",
    },
});

//make this component available to the app
export default BT_Register;
