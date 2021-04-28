import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import codeOrder from '../../data/codeOrder';
const Pending = () => {
   
    return(
        <View >
            <ScrollView>
                {
                    codeOrder.map((item, index) => (
                        <View key = {item.id} style={styles.container}>
                            <TouchableOpacity>
                                <View  style={styles.header} >
                                    <SimpleLineIcons style={styles.Icon} name="notebook" size={40} color="black" />
                                    <View style={styles.insize}>
                                        <Text     style={styles.TextInput}>
                                            Mã ĐH: {item.code}
                                        </Text>
                                        <Text     style={styles.TextInput}>
                                            Tên ĐH: {item.name}
                                        </Text>
                                        <Text     style={styles.TextInput}>
                                            Thành tiền: {item.cost}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    insize:{
        flex: 5,
        flexDirection: 'column',
    },
    header:{
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 30,
        width: "90%",
        height: 140,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    container: {
        alignItems: "center",
        justifyContent:'center',
    },
    Icon: {
        flex:1,
        padding: 30,
    },  
    TextInput: {
        height: 42,
        padding: 10,
        alignItems: 'center',
        justifyContent:'center',
        color:'black',
      },
});
export default Pending;