import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Container} from 'native-base'
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
  Avatar,
} from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import Axios from "axios";
import * as ImagePicker from "expo-image-picker";
const ProfileScreen = (prop) => {
  const getUser = async () => {
    const token = await AsyncStorage.getItem("token");
    const userID = await AsyncStorage.getItem("userID");
    return { token, userID };
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      const token = await AsyncStorage.getItem("token");
      const userID = await AsyncStorage.getItem("userID");
      let apiUrl = `https://food-order-app12.herokuapp.com/api/users/avatar/${userID}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let data = new FormData();
      data.append("image", {
        uri: result.uri,
        type: "image/png",
        name: "image.jpg",
      });
      Axios.put(apiUrl, data, config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response.data));
    }
  };
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Xin lỗi chúng tôi không được phép truy cập vào thư viện");
        }
      }
    })();
    getUser().then((user) => {
      const token = user.token;
      const userID = user.userID;
      const apiUrl = `https://food-order-app12.herokuapp.com/api/users/${userID}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      Axios.get(apiUrl, config)
        .then((res) => {
          setImage(res.data.image);
          setUsername(res.data.username);
          setEmail(res.data.email);
          setAddress(res.data.address);
          setPhone(res.data.phone);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err.response.data);
          Alert.alert(
            "\n",
            "Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại",
            [
              {
                text: "OK",
                onPress: () => {
                  AsyncStorage.setItem("token", null);
                  prop.navigation.navigate("Login");
                },
              },
            ]
          );
        });
    });
  }, []);

  return (
    <>
      {loading == false ? (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.user_edit}>
              <TouchableOpacity
                onPress={() => {
                  prop.navigation.dangerouslyGetParent().setOptions({
                    tabBarVisible: false,
                  });
                  prop.navigation.navigate("EditProfileScreen");
                }}
              >
                <FontAwesome5 name="user-edit" size={22} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.avatarInfo}>
              <TouchableOpacity onPress={pickImage}>
                <Avatar.Image
                  source={{
                    uri: image
                      ? image
                      : "https://res.cloudinary.com/hoquanglinh/image/upload/v1620296815/Linh/avatar_sokxzf.jpg",
                  }}
                  size={150}
                />
              </TouchableOpacity>

              <Title style={styles.title}>{username}</Title>
            </View>

            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>{address}</Text>
              </View>
              <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>{phone}</Text>
              </View>
              <View style={styles.row}>
                <Icon name="email" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>{email}</Text>
              </View>
            </View>

            <View style={styles.infoBoxWrapper}>
              <View
                style={[
                  styles.infoBox,
                  {
                    borderRightColor: "#dddddd",
                    borderRightWidth: 1,
                  },
                ]}
              >
                <Title>2.000.000</Title>
                <Caption>VND</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>12</Title>
                <Caption>Đơn hàng</Caption>
              </View>
            </View>

            <View style={styles.menuWrapper}>
              <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                  <Icon name="credit-card" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Thanh toán</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => console.log("ok")}>
                <View style={styles.menuItem}>
                  <Icon name="share-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Chia sẻ ứng dụng</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                  <Icon name="account-check-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Đổi mật khẩu</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                onPress={() => {
                  prop.navigation.navigate("Login");
                }}
              >
                <View style={styles.menuItem}>
                  <AntDesign name="logout" size={25} color="#FF6347" />
                  <Text style={styles.menuItemText}>Đăng xuất</Text>
                </View>
              </TouchableRipple>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        //Loading 
        <Container
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require('../../assets/loading.gif')}
            style={{
              width: 300,
              height: 100
            }}
          />
        </Container>
      )}
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user_edit: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 10,
  },
  avatarInfo: { alignItems: "center", marginTop: 20 },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 80,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuItem: {
    marginTop: 5,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
