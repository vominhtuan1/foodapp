import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Avatar, RadioButton } from "react-native-paper";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import DateTimePickerModal from "react-native-modal-datetime-picker";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const EditProfileScreen = (prop) => {
  const [checked, setChecked] = React.useState("first");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarInfo}>
        <ImageBackground
          source={{
            uri:
              "https://res.cloudinary.com/hoquanglinh/image/upload/v1620405345/Linh/pngtree-creative-minimalist-peach-flower-beautiful-background-synthesis-image_229506_mp96ei.jpg",
          }}
          style={styles.backgroundImage}
        />
        <TouchableOpacity>
          <Avatar.Image
            source={{
              uri:
                "https://res.cloudinary.com/hoquanglinh/image/upload/v1620296815/Linh/avatar_sokxzf.jpg",
            }}
            size={120}
            style={styles.avatarImage}
          />
        </TouchableOpacity>
        <Text style={styles.username}>Linh Hồ</Text>
      </View>

      <View style={styles.row}>
        <FontAwesome
          style={styles.icon}
          name="user-o"
          size={24}
          color="black"
        />
        <TextInput style={styles.text} placeholder="Họ và tên" />
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="email-outline"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.text}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.row}>
        <Feather name="phone" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.text}
          placeholder="Số điện thoại"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.row}>
        <FontAwesome
          style={styles.icon}
          name="intersex"
          size={24}
          color="black"
        />
        <Text style={styles.text}>Giới tính</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <RadioButton
            color="#42aaf5"
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={styles.text}>Nam</Text>
          <RadioButton
            value="second"
            color="#42aaf5"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={styles.text}>Nữ</Text>
          <RadioButton
            value="third"
            color="#42aaf5"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text style={styles.text}>Khác</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          prop.navigation.navigate("EditAddressScreen");
        }}
      >
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={[styles.text, { color: "#877f7f" }]}>Địa chỉ</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity style={styles.icon} onPress={showDatePicker}>
          <AntDesign name="calendar" size={24} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.text} placeholder="Ngày sinh" />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          display="spinner"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  username: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Comfortaa_Bold",
  },
  avatarInfo: {
    alignItems: "center",
  },
  backgroundImage: {
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#039dfc",
    width: width,
    height: height / 4 + 10,
    marginBottom: -60,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#e3dada",
    padding: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#347aeb",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: width / 2,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default EditProfileScreen;
