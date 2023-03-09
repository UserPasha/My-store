import {IReview} from "../../types/InterfaceReview";
import {products} from "./DataProduct";

export const dataReview: IReview[] = [
    {
        id: 1,
        product: products[0],
        rating: 5,
        text: 'great'
    },
    {
        id: 2,
        product: products[1],
        rating: 4,
        text: 'good'
    }
]