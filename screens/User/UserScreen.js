import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import FormContainer from "../../Shared/form/formContainer";
import EditInfor from "./editInfor";
import DateTimePickerModal from "react-native-modal-datetime-picker";

var { width, height } = Dimensions.get("window");

const UserScreen = ({ navigation }) => {
  const [focus, setFocus] = useState(false);
  const [title, setTitle] = useState();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("Nguyễn Văn A");
  const [dateOfBirth, setDateOfBirth] = useState("15/8/1990");
  const [sex, setSex] = useState("Nam");
  const [address, setAddress] = useState(
    "khu phố 6, Linh Trung, Thủ Đức, Hồ Chí Minh"
  );
  const [phone, setPhone] = useState("0987654321");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          width: width,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
          }}
          source={require("../../assets/buncha.jpg")}
        />
      </View>

      <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 10 }}>
        <FormContainer
          title={"Tên"}
          value={name}
          onPress={() => {
            setVisible(true), setTitle("tên");
          }}
        />
        <FormContainer
          title={"Ngày sinh"}
          value={dateOfBirth}
          onPress={() => {
            setFocus(true), setTitle("ngày sinh");
          }}
        />

        <FormContainer
          title={"Địa chỉ"}
          value={
            address.length > 20 ? address.substring(0, 20 - 3) + "..." : address
          }
          onPress={() => {
            setVisible(true), setTitle("địa chỉ");
          }}
        />

        <FormContainer
          title={"Giới tính"}
          value={sex}
          onPress={() => {
            setVisible(true), setTitle("giới tính");
          }}
        />

        <FormContainer
          title={"Số điện thoại"}
          value={phone}
          onPress={() => {
            setVisible(true), setTitle("số điện thoại");
          }}
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
        >
          <Text style={{ color: "white", fontSize: 20 }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <View style={styles.container}>
        <Modal
          visible={visible}
          animationType={"slide"}
          transparent={true}
          //onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <EditInfor
            title={title}
            setVisible={setVisible}
            setName={setName}
            setAddress={setAddress}
            setPhone={setPhone}
            setSex={setSex}
            setDateOfBirth={setDateOfBirth}
          />
        </Modal>
        <DateTimePickerModal
          isVisible={focus}
          locale={"vi"}
          onConfirm={(date) => {
            setFocus(false),
              setDateOfBirth(
                `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
              );
          }}
          onCancel={() => {
            setFocus(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ff6c00",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UserScreen;
