import {IProduct} from "./InterfaceProduct";

export interface IReview {
    id: number
    product: IProduct
    text: string
    rating: number
}