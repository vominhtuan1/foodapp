import { createStackNavigator } from "@react-navigation/stack";
import React, {useState } from 'react';
import {StyleSheet,View,Image,TextInput,TouchableOpacity,Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import BT_Login from "./ClassButton/BT_Login";
import BT_Register from "./ClassButton/BT_Resigter";
const Stack = createStackNavigator();

function Login({navigation}) {
    const [focus,setFocus]=useState(false)
    return(
        <View style={styles.container}>
            {/* LOGO  */}
            <View style={styles.Logocontainer}>
                <Image
                    style ={styles.logo} 
                    source = {require ('../assets/logo.png')} 
                />
                
            </View>
            {/* USERNAME */}
            <View style={styles.inputView}>
                <FontAwesome style = {styles.UserIcon} name="user" size={24} color="gray" />
                <TextInput
                    style={styles.TextInput}
                    placeholder="UserName"
                    placeholderTextColor="gray"
                />
               
                
            </View>
            {/* PASSWORD */}
            <View style={styles.PassinputView}>
                <FontAwesome5 style={styles.keyIcon} name="key" size={24} color="gray" />
                <TextInput
                    style={styles.PassTextInput}
                    placeholder="PassWord"
                    placeholderTextColor="gray"
                    secureTextEntry={focus?true:false}
                />
                {!focus ? 
                
                <FontAwesome style = {styles.eyeIcon} name="eye" size={24} color="gray" onPress={()=>{
                    setFocus(true)
                   
                }} />
                   :    <Feather name="eye-off" style = {styles.eyeIcon}  size={24} color="gray"onPress={()=>setFocus(false)} />
                 }                               
            </View>
            {/* FOGOT */}
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            {/* LOGIN */}
            <BT_Register navigation={navigation}/>
            <BT_Login navigation={navigation}/>
            
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    Logocontainer: {
        
        backgroundColor: 'pink',
        //marginTop: 50,
        marginBottom:50,
        justifyContent: "center",
        alignItems: "center",
        
    },
    logo: {
        
        width:400,
        height:400,

      },
    forgot_button: {
        height: 30,
       // marginBottom: 30,
      },
    inputView: {
        
        flexDirection: 'row',
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        justifyContent:'center',

      },
    UserIcon: {
        flex:2,
        padding: 10,
    },  
    TextInput: {
        
        height: 50,
        flex: 6,
        padding: 10,
        alignItems: 'center',
        justifyContent:'center',
      },
    PassinputView: {
        flexDirection:"row",
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
    keyIcon:{
        flex: 2,
        padding: 10,
    },
    eyeIcon:{
        flex: 1,
        padding: 10,
    },
    PassTextInput: {
        height: 50,
        flex: 4,
        padding: 10,
        alignItems: 'center',
        
      }

});
export default Login;