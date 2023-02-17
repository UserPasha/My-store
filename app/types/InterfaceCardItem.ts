import {IProduct} from "./InterfaceProduct";
import {TypeSize} from "../store/cart/cart.types";

export interface ICartItem {
    product: IProduct
    quantity: number
    id: number
    size: TypeSize
}