import {StaticImageData} from "next/image";
import {IReview} from "./InterfaceReview";

export interface IProduct {
    id: number
    name: string
    slug: string
    description: string
    price: number
    reviews: IReview[]
    images: string[] | StaticImageData[]
}

export interface IProductDetails{
    product: IProduct
}