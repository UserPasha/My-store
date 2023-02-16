import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAddToCartPayload, IChangeQuantityPayload, IChangeSizePayload, IInitialState} from "./types";
import {cart} from "../Components/CartItem/DataCart";

const initialState: IInitialState = {
    items: cart
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //Check if the item exists in the cart. If it doesn't exist, we add it
        addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
            const iSize = state.items.some(item => item.size === action.payload.size)
            if(!iSize) state.items.push({...action.payload, id: state.items.length})
        },
        removeFromCart: (state, action: PayloadAction<{id: number}>) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
        },
        changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>)=>{
            const {id, type} = action.payload
            const item = state.items.find(item => item.id === id)
            if(item) type === 'plus' ?  item.quantity ++ : item.quantity --
        }
    }
})