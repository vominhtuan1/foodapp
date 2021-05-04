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
import BT_Login from "./ClassButton/BT_Login";
import BT_Register from "./ClassButton/BT_Resigter";
import axios from "axios";
function Login({ navigation }) {
  const [focus, setFocus] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleLogin = () => {
    if (!username) {
      return Alert.alert("\n", "Vui lòng nhập tài khoản");
    }
    if (!password) {
      return Alert.alert("\n", "Vui lòng nhập mật khẩu");
    }

    axios
      .post("https://food-order-app12.herokuapp.com/api/users/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(navigation);
        navigation.navigate("Home");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          Alert.alert(
            "Thông báo",
            "Tên tài khoản hoặc mật khẩu không chính xác"
          );
        }
      });
  };
  return (
    <View style={styles.container}>
      {/* LOGO  */}
      <View style={styles.Logocontainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      {/* USERNAME */}
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
          placeholder="Tên tài khoản"
          placeholderTextColor="gray"
          onChangeText={(text) => setUsername(text)}
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
          value={password}
          placeholder="Mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry={focus ? false : true}
          onChangeText={(text) => setPassword(text)}
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
      {/* FOGOT PASSWORD */}
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      {/* LOGIN */}

      <BT_Login onPress={handleLogin} />
      <BT_Register onPress={() => navigation.navigate("Register")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Logocontainer: {
    backgroundColor: "pink",
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 360,
  },
  forgot_button: {
    height: 30,
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
export default Login;
