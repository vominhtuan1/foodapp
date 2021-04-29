import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BT_Register from "./ClassButton/BT_Resigter";
import axios from "axios";
const Stack = createStackNavigator();

function Register({ navigation }) {
  const [focus, setFocus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const handleRegister = () => {
    // console.log({ username, password, repassword });
    if (!username) {
      Alert.alert("\n", "Vui lòng nhập tài khoản");
    } else if (!password) {
      Alert.alert("\n", "Vui long nhập mật khẩu");
    } else if (password !== repassword) {
      Alert.alert("\n", "Mật khẩu không khớp");
    } else {
      axios
        .post("https://food-order-app12.herokuapp.com/api/users/register", {
          username,
          password,
          isAdmin: false,
        })
        .then((res) => {
          Alert.alert("Đăng kí tài khoản thành công");
          setTimeout(() => {
            navigation.navigate("Home");
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
      <View style={styles.content}>
        <View style={styles.inputView}>
          <FontAwesome
            style={styles.UserIcon}
            name="user"
            size={24}
            color="gray"
          />
          <TextInput
            style={styles.TextInput}
            value={username}
            placeholder="UserName"
            placeholderTextColor="gray"
            onChangeText={(value) => setUsername(value)}
          />
        </View>
        {/* PASSWORD */}
        <View style={styles.PassinputView}>
          <FontAwesome5
            style={styles.keyIcon}
            name="key"
            size={24}
            color="gray"
          />
          <TextInput
            style={styles.PassTextInput}
            placeholder="PassWord"
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholderTextColor="gray"
            secureTextEntry={focus ? true : false}
          />
          {!focus ? (
            <FontAwesome
              style={styles.eyeIcon}
              name="eye"
              size={24}
              color="gray"
              onPress={() => {
                setFocus(true);
              }}
            />
          ) : (
            <Feather
              name="eye-off"
              style={styles.eyeIcon}
              size={24}
              color="gray"
              onPress={() => setFocus(false)}
            />
          )}
        </View>
        {/* REPASSWORD */}
        <View style={styles.PassinputView}>
          <FontAwesome5
            style={styles.keyIcon}
            name="key"
            size={24}
            color="gray"
          />
          <TextInput
            style={styles.PassTextInput}
            value={repassword}
            onChangeText={(value) => setRepassword(value)}
            placeholder="Repeat PassWord"
            placeholderTextColor="gray"
            secureTextEntry={focus ? true : false}
          />
          {!focus ? (
            <FontAwesome
              style={styles.eyeIcon}
              name="eye"
              size={24}
              color="gray"
              onPress={() => {
                setFocus(true);
              }}
            />
          ) : (
            <Feather
              name="eye-off"
              style={styles.eyeIcon}
              size={24}
              color="gray"
              onPress={() => setFocus(false)}
            />
          )}
        </View>
        <BT_Register onPress={handleRegister} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginTop: 10,
    alignItems: "center",
  },
  Logocontainer: {
    backgroundColor: "pink",
    //marginTop: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 200,
  },
  forgot_button: {
    height: 30,
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
