import {IProduct} from "./InterfaceProduct";

export interface ICartItem {
    product: IProduct
    quantity: number
    id: number
}