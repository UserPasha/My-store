import {ICartItem} from "../../types/InterfaceCardItem";
import {products} from "./DataProduct";

export const cart: ICartItem[] = [
    {
        id: 1,
        quantity: 1,
        product: products[0]
    },
    {
        id: 2,
        quantity: 2,
        product: products[1]
    },
    {
        id: 3,
        quantity: 1,
        product: products[0]
    },
    {
        id: 4,
        quantity: 2,
        product: products[1]
    },
    {
        id: 5,
        quantity: 1,
        product: products[3]
    },
    {
        id: 6,
        quantity: 2,
        product: products[2]
    }
]