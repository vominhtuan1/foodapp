import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Left, Right, ListItem, Thumbnail, Body } from 'native-base';

const CartItem = (props) => {
    const data = props.item.item.product
    const [quantity, setQuantity] = useState(props.item.quantity)

    return (
        <ListItem
            style={styles.listItem}
            key={Math.random()}
            avatar
        >
            <Left>
                <Thumbnail source={data.src} />
            </Left>
            <Body style={styles.body}>
                <Left>
                    <Text>{data.name}</Text>
                </Left>
                <Right>
                    <Text>{data.price} đồng</Text>
                </Right>
            </Body>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default CartItem;