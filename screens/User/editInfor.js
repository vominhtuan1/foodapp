import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import RadioButton from "../../components/RadioButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";

var { width } = Dimensions.get("window");

const sex = [
  { text: "Nam", key: 1 },
  { text: "Nữ", key: 2 },
];

const EditInfor = (props) => {
  const [visible, setVisible] = useState(true);

  switch (props.title) {
    case "giới tính":
      return (
        <View style={styles.container}>
          <Text
            style={{
              color: "#ff6c00",
              fontSize: 20,
              marginBottom: 5,
            }}
          >
            Sửa đổi {props.title}
          </Text>
          <RadioButton PROP={sex} setSelected={props.setSex} />

          <TouchableOpacity
            style={{
              width: 200,
              padding: 15,
              borderRadius: 20,
              backgroundColor: "#ff6c00",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 20,
            }}
            onPress={() => props.setVisible(false)}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      );
    default:
      return (
        <View style={styles.container}>
          <Text
            style={{
              color: "#ff6c00",
              fontSize: 20,
              marginBottom: 5,
            }}
          >
            Sửa đổi {props.title}
          </Text>
          <TextInput
            placeholder={"Nhập thông tin vào đây"}
            onChangeText={(text) => {
              switch (props.title) {
                case "tên":
                  props.setName(text);
                  break;
                case "địa chỉ":
                  props.setAddress(text);
                  break;
                case "số điện thoại":
                  props.setPhone(text);
                  break;
              }
            }}
            style={{
              fontSize: 16,
              textAlign: "center",
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 20,
              width: width * 0.7,
              alignSelf: "center",
              borderColor: "#a4a4a4",
            }}
            multiline={true}
            keyboardType={
              props.title == "số điện thoại" ? "numeric" : "default"
            }
          />
          <TouchableOpacity
            style={{
              width: 200,
              padding: 15,
              borderRadius: 20,
              backgroundColor: "#ff6c00",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 20,
            }}
            onPress={() => props.setVisible(false)}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: width * 0.8,
    height: 200,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 100,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default EditInfor;
