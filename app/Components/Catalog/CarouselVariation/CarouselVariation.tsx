import React, {FC} from 'react';
import style from './CarouselVariation.module.scss'
import {TypeSize} from "../../../store/types";
import {useCart} from "../../../hooks/useCart";


const SIZES:TypeSize[] = ['30 ml', '50 ml', '100 ml']

export const CarouselVariation:FC<{productId: number}> = ({productId}) => {
    const {cart} = useCart()

    return (
        <div className={style.wrapper}>
            {SIZES.map( size => <button className={style.variationButton} key={size}>{size}</button>)}
        </div>
    );
};

