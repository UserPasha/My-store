import {IProduct} from "./InterfaceProduct";
import {TypeSize} from "../store/types";

export interface ICartItem {
    product: IProduct
    quantity: number
    id: number
    size: TypeSize
}