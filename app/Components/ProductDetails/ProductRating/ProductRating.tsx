import React, {FC, useState} from 'react'
import {Rating} from 'react-simple-star-rating'
import style from './ProductRating.module.scss'
import {IProductDetails} from "../../../types/InterfaceProduct";
import {IReview} from "../../../types/InterfaceReview";

export const ProductRating: FC<IProductDetails> = ({product}) => {
    const calculateAverageValue = (arr: IReview[]):number => {
        return arr.reduce((acc, review)=> acc+review.rating, 0)/arr.length
    }
    const [rating, setRating] = useState(calculateAverageValue(product.reviews) || 0)

    // const handleRating = (rate: number) => {
    //     setRating(rate)
    //
    // }
    //
    // const onPointerEnter = () => console.log('Enter')
    // const onPointerLeave = () => console.log('Leave')
    // const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div className='App'>
             <span className={style.review}>
                Review:
            </span>
            <Rating
                // onClick={handleRating}
                // onPointerEnter={onPointerEnter}
                // onPointerLeave={onPointerLeave}
                // onPointerMove={onPointerMove}
                 readonly={true}
                initialValue={rating}
                allowFraction
                size={40}
            />
        </div>
    )
}