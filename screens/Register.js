import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, Alert, KeyboardAvoidingView, TouchableOpacity ,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BT_Register from "./ClassButton/BT_Resigter";
import axios from "axios";

function Register({ navigation }) {
  const [focus, setFocus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleRegister = () => {
    if (!username) {
      Alert.alert("\n", "Vui lòng nhập tài khoản");
    } else if (!password) {
      Alert.alert("\n", "Vui long nhập mật khẩu");
    } else if (password !== repassword) {
      Alert.alert("\n", "Mật khẩu không khớp");
    } else if (!phone) {
      Alert.alert("\n", "Vui lòng nhập số điện thoại");
    } else {
      axios
        .post("https://food-order-app12.herokuapp.com/api/users/register", {
          username,
          password,
          phone,
          isAdmin: false,
        })
        .then((res) => {
          Alert.alert("Đăng kí tài khoản thành công");
          setTimeout(() => {
            console.log(res.data);
            navigation.navigate("Login");
          }, 1000);
        })
        .catch((err) => {
          console.error(err.response.data);
          Alert.alert("Tài khoản đã tồn tại");
        });
    }
  };
  return (
    <View style={styles.container}>
      {/* LOGO  */}
      <View style={styles.Logocontainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      {/* USERNAME */}
      <View style={styles.inputView}>
        <Feather style={styles.UserIcon} name="user" size={24} color="gray" />
        <TextInput
          value={username}
          style={styles.TextInput}
          placeholder="Tên tài khoản"
          placeholderTextColor="gray"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      {/* PASSWORD */}
      <View style={styles.PassinputView}>
        <Feather style={styles.keyIcon} name="key" size={24} color="gray" />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.PassTextInput}
          placeholder="Mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry={focus ? true : false}
        />
        {!focus ? (
          <Feather
            name="eye-off"
            style={styles.eyeIcon}
            size={24}
            color="gray"
            onPress={() => setFocus(true)}
          />
        ) : (
          <FontAwesome
            style={styles.eyeIcon}
            name="eye"
            size={24}
            color="gray"
            onPress={() => {
              setFocus(false);
            }}
          />
        )}
      </View>
      {/* REPASSWORD */}
      <View style={styles.PassinputView}>
        <Feather style={styles.keyIcon} name="key" size={24} color="gray" />
        <TextInput
          value={repassword}
          onChangeText={(text) => setRepassword(text)}
          style={styles.PassTextInput}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry={focus ? true : false}
        />
        {!focus ? (
          <Feather
            name="eye-off"
            style={styles.eyeIcon}
            size={24}
            color="gray"
            onPress={() => setFocus(true)}
          />
        ) : (
          <FontAwesome
            style={styles.eyeIcon}
            name="eye"
            size={24}
            color="gray"
            onPress={() => {
              setFocus(false);
            }}
          />
        )}
      </View>

      {/* SDT */}
      <KeyboardAvoidingView
                behavior ={Platform.OS==='android'? 'padding':null}
            >
        <View style={styles.inputView}>
          <Feather
            style={styles.UserIcon}
            name="phone-call"
            size={24}
            color="gray"
          />
          <TextInput
            value={phone}
            onChangeText={(number) => setPhone(number)}
            style={styles.TextInput}
            placeholder="Số điện thoại"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            maxLength={10}
          />
        </View>
      </KeyboardAvoidingView>
      {/* Register*/}
      <BT_Register onPress={handleRegister} />
      {/* THANKS */}
      <TouchableOpacity>
                <Text style={styles.forgot_button}>Thanks for your information </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Logocontainer: {
    
    backgroundColor: "pink",
    marginTop: 0,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 300,
  },
  forgot_button: {
    color: 'gray',
    fontSize: 14,
    height: 30,
    marginTop : 30,
    marginBottom: 60,
    // marginBottom: 30,
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  UserIcon: {
    flex: 2,
    padding: 10,
  },
  TextInput: {
    height: 50,
    flex: 6,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  PassinputView: {
    flexDirection: "row",
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  keyIcon: {
    flex: 2,
    padding: 10,
  },
  eyeIcon: {
    flex: 1,
    padding: 10,
  },
  PassTextInput: {
    height: 50,
    flex: 4,
    padding: 10,
    alignItems: "center",
  },
});
export default Register;
