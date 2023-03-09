import {ICartItem} from "../../types/InterfaceCardItem";
import {products} from "../ProductDetails/DataProduct";

export const cart: ICartItem[] = [
    {
        id: 1,
        quantity: 1,
        product: products[0],
        size: '30 ml'
    },
    {
        id: 2,
        quantity: 2,
        product: products[1],
        size: '30 ml'
    },
    {
        id: 3,
        quantity: 1,
        product: products[2],
        size: '30 ml'
    },
    {
        id: 4,
        quantity: 2,
        product: products[3],
        size: '30 ml'
    },
    {
        id: 5,
        quantity: 1,
        product: products[4],
        size: '30 ml'
    }
]