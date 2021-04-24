import { CardItem } from 'native-base';
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_QTY
} from '../constants';
const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem !== action.payload)
        case CLEAR_CART:
            return state=[]
        case UPDATE_QTY:
            let cartItem = state.find(item => item.product.id === action.payload.product.id)
            if (action.payload.plusOrMinus == "+"){
                cartItem.quantity++
            }else {
                cartItem.quantity--
            }
            
            console.log(cartItem.product.id)
            console.log(cartItem.product.name)
            console.log(cartItem.product.price)
            console.log(cartItem.quantity)
            return [...state]
    }
    return state;
}

export default cartItems;