import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import codeOrder from '../../data/codeOrder';
const Pending = () => {
   
    return(
        <View>
            <ScrollView>
                <View style={styles.container}>
                    
                    <View style={styles.header}>
                        <SimpleLineIcons style={styles.Icon} name="notebook" size={40} color="black" />
                        <View style={styles.insize}>
                            <Text     style={styles.TextInput}>
                                Mã ĐH: DH001
                            </Text>
                            <Text     style={styles.TextInput}>
                                Tên ĐH: Cơm trắng
                            </Text>
                            <Text     style={styles.TextInput}>
                                Thành tiền: 165.000đ
                            </Text>
                        </View>
                        
                    </View>
                </View>
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
        backgroundColor: "#c4c3bc",
        borderRadius: 30,
        width: "90%",
        height: "100%",
        marginBottom: 20,
        alignItems: "center",
        justifyContent:'center',
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