import React, {FC, useState} from 'react'
import {Rating} from 'react-simple-star-rating'
import style from './ProductRating.module.scss'
import {IProductDetails} from "../../../types/InterfaceProduct";

export const ProductRating: FC<IProductDetails> = ({product}) => {
    const calculateAverageValue = (arr: number[]) => {
        return arr.reduce((a, b)=> a+b)/arr.length
    }
    const [rating, setRating] = useState(calculateAverageValue(product.reviews))



    const handleRating = (rate: number) => {
        setRating(rate)

    }

    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div className='App'>
             <span className={style.review}>
                Review:
            </span>
            <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                initialValue={rating}
                allowFraction
                size={40}
            />
        </div>
    )
}