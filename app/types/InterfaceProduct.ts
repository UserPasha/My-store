import {StaticImageData} from "next/image";

export interface IProduct {
    id: number
    name: string
    slug: string
    description: string
    price: number
    reviews: string[]
    images: string[] | StaticImageData[]
}

export interface IProductDetails{
    product: IProduct
}