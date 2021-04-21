import React from "react";
import { View, StyleSheet, Dimensions, Button, TouchableOpacity, Image } from "react-native";
import { container, Text, Left, Right, H1, ListItem, Thumbnail, Body, Container } from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import CartItem from './CartItem';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from "react-redux";
import * as actions from '../../Redux/Actions/cartActions';

var { height, width } = Dimensions.get('window');

const CartScreen = (props) => {

    var total = 0;
    props.cartItems.forEach(cart => {
        return (total += cart.product.price)
    });

    return (
        <>
            {props.cartItems.length > 0 ? (
                <Container>
                    <H1 style={{ alignSelf: 'center' }}>Cart</H1>
                    <SwipeListView
                        data={props.cartItems}
                        renderItem={(data) => (
                            <CartItem item={data}/>
                        )}
                        renderHiddenItem={(data) => (
                            <View style={styles.hiddenContainer}>
                                <TouchableOpacity 
                                    style={styles.hiddenButton}
                                    onPress={() => props.removeFromCart(data.item)}
                                >
                                    <Icon 
                                        name="trash" 
                                        color={'white'} 
                                        size={30}
                                        style={{
                                            borderRadius: 10,
                                            padding: 10,
                                            backgroundColor: '#ff6c00'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                        disableRightSwipe={true}
                        previewOpenDelay={3000}
                        friction={1000}
                        tension={40}
                        leftOpenValue={75}
                        stopLeftSwipe={75}
                        rightOpenValue={-75}
                    />
                    <View style={styles.bottomContainer}>
                        <View style={{ flex: 1 }}>
                            <Left>
                                <Text style={{ fontSize: 18, fontWeight: '200' }}>Tổng tiền</Text>
                            </Left>
                            <Right >
                                <Text style={styles.price}>{total} đồng</Text>
                            </Right>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Right>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '300',
                                        color: 'white'
                                    }}>
                                        Xác nhận
                                    </Text>
                                </TouchableOpacity>
                            </Right>
                            <Right>
                                <TouchableOpacity 
                                    style={[styles.buttonContainer, { marginRight: 20 }]}
                                    onPress={() => props.clearCart()}
                                >
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '300',
                                        color: 'white'
                                    }}>
                                        Xóa
                                    </Text>
                                </TouchableOpacity>
                            </Right>
                        </View>
                    </View>
                </Container>
            ) : (
                <Container style={styles.emptyContainer}>
                    <Image
                        source={require("../../assets/empty-cart.png")}
                        style={{
                            width: width,
                            height: height / 3
                        }}
                    />
                    <Text>Có vẻ như giỏ hàng của bạn đang trống</Text>
                    <Text>Hãy thêm món ăn vào giỏ hàng nào !!!</Text>
                </Container>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
         clearCart: () => dispatch(actions.clearCart()),
         removeFromCart: (item) => dispatch(actions.removeFromCart(item))
     }
}

const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        elevation: 20
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: "red"
    },
    buttonContainer: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#ff6c00',
        padding: 10
    },
    hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    hiddenButton: {
        //backgroundColor: '#ff6c00',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width/1.2
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
