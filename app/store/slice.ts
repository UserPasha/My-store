import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAddToCart, IInitialState} from "./types";
import {cart} from "../Components/CartItem/DataCart";

const initialState: IInitialState = {
    items: cart
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IAddToCart>) => {
            const id = state.items.length
            state.items.push({...action.payload, id})
        },
        removeFromCart: (state, action: PayloadAction<{id: number}>) => {
            state.items = state.items.filter(
                item => item.product.id !== action.payload.id
            )
        }
    }
})