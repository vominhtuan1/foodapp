import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'

var { width, height } = Dimensions.get('window');

const SingleFood = (props) => {

    const [food, setFood] = useState(props.route.params.food);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: 10 }}>
                <Image
                    style={styles.image}
                    source={food.src}
                />
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.title}>{food.name}</Text>
                </View>
                <View style={styles.underTitle}>
                    <Text style={[{ flex: 1 }, styles.price]}>{food.price} đồng</Text>
                    <View style={[styles.quantity, { flex: 1 }]}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontSize: 25 }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>2</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontSize: 20 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>Mô tả</Text>
                    <Text style={{ fontSize: 15, color: '#808080' }}>Hủ tiếu xào đúng chuẩn là sợi hủ tiếu trắng đục vì được làm từ bột gạo nguyên chất. Sau khi nấu, hủ tiếu vẫn giữ được độ dai chứ không bở. Cách làm hủ tiếu xào với sự kết hợp với thịt và rau, tuy đơn giản, nhưng hủ tiếu xào lại là món ngon đầy đủ dinh dưỡng cho ngày bận rộn đấy.</Text>

                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Tổng tiền</Text>
                    <Text style={{ fontSize: 20, marginTop: 5 }}>20.000 đồng</Text>
                </View>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 10,
        height: '100%'
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 20
    },
    title: {
        fontSize: 30,
    },
    button: {
        width: 60,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#ececec',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 20
    },
    underTitle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomContainer: {
        width: width,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,

        elevation: 5,
        backgroundColor: 'white'
    },
    buttonAdd: {
        borderRadius: 20,
        padding: 20,
        width: 200,
        backgroundColor: "#ff6c00",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SingleFood;