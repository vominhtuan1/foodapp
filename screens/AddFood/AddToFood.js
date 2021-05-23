import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
const AddToFood = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.PageTile}>Foods</Text>
            <View style={styles.inputView}>
                <TouchableOpacity onPress={()=> navigation.navigate("AddInforFood")}>
                <Ionicons 
                    style={styles.Addicon}
                    name="add"
                    size={50}
                    color="#FFCC00"/>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        marginTop:40

    },
    PageTile:{
        
        fontSize:50,
        textAlign:"center",
        
    },
    inputView:{
        alignItems:"center",
        padding:10,


    },
    Addicon:{
        
    }
})

export default AddToFood;