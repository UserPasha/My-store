import {ICardItem} from "../../types/InterfaceCardItem";
import {products} from "./DataProduct";

export const cart:ICardItem[] = [
    {
     id: 1,
     quantity: 1,
     product:products[0]
    },
    {
        id: 2,
        quantity: 2,
        product:products[1]
    }
]