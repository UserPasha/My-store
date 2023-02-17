import React, {Dispatch, FC, SetStateAction} from 'react';
import style from './CarouselButton.module.scss'
import {useActions} from "../../../hooks/useActions";
import {IProduct} from "../../../types/InterfaceProduct";
import {TypeSize} from "../../../store/cart/cart.types";
 interface ICarouselButton {
     product: IProduct
     selectedSize: TypeSize
     setSelectedSize: Dispatch<SetStateAction<TypeSize>>
 }

export const CarouselButton:FC<ICarouselButton> = ({product,selectedSize,setSelectedSize}) => {

    const {addToCart} = useActions()

    return (
        <button className={style.openButton} onClick={() => addToCart({product, quantity: 1, size: selectedSize} )}> ADD TO BASKET </button>
    );
};

