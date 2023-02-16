import React, {Dispatch, FC, SetStateAction} from 'react';
import style from './CarouselVariation.module.scss'
import {TypeSize} from "../../../store/types";



const SIZES:TypeSize[] = ['30 ml', '50 ml', '100 ml']

interface ICarouselVariation {
    productId: number
    selectedSize: TypeSize
    setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}
export const CarouselVariation:FC<ICarouselVariation> = ({productId,selectedSize,setSelectedSize}) => {

    return (
        <div className={style.wrapper}>
            {SIZES.map( size =>
                <button className={selectedSize===size ? style.selected : style.variationButton} key={size} onClick={()=>setSelectedSize(size)}>{size}</button>)}
        </div>
    );
};

