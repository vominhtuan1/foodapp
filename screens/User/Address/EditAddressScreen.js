import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

const EditAddressScreen = ({ route, navigation }) => {
  const [province, setProvince] = useState("Hồ Chí Minh");
  const [district, setDistrict] = useState("Thủ Đức");
  const [ward, setWard] = useState("Linh Trung");
  useEffect(() => {
    if (route.params) {
      setProvince(route.params.province);
      setDistrict(route.params.district);
      setWard(route.params.ward);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Họ & Tên</Text>
        <View style={styles.content}>
          <Text style={styles.text}>Hồ Quang Linh</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Tỉnh/Thành phố</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProvincesScreen");
          }}
        >
          <View style={styles.content}>
            <Text style={styles.text}>{province}</Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Quận/Huyện</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DistrictsScreen", { province: province });
          }}
        >
          <View style={styles.content}>
            <Text style={styles.text}>{district}</Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Phường/Xã</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WardsScreen", {
              wards: route.params ? route.params.wards : "",
            });
          }}
        >
          <View style={styles.content}>
            <Text style={styles.text}>{ward}</Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#e3dada",
          marginHorizontal: 10,
          padding: 10,
        }}
      >
        <Text style={styles.text}>Địa chỉ cụ thể</Text>
        <Text style={{ color: "#bfb6b6" }}>
          Số nhà, tên toà nhà, tên đường, khu vực{" "}
        </Text>
        <TextInput
          style={styles.text}
          multiline={true}
          value="Kí túc xá khu B Đại học quốc gia"
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
  container: {
    marginTop: 100,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e3dada",
    justifyContent: "space-between",
    marginHorizontal: 10,
    padding: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginRight: 5,
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
export default EditAddressScreen;
