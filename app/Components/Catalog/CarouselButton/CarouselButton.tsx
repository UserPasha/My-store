import React, {FC} from 'react';
import style from './CarouselButton.module.scss'
import {useActions} from "../../../hooks/useActions";
import {IProduct} from "../../../types/InterfaceProduct";

export const CarouselButton:FC<{ product: IProduct }> = ({product}) => {

    const {addToCart} = useActions()

    return (
        <button className={style.openButton} onClick={() => addToCart({product, quantity: 1} )}> ADD TO BASKET </button>
    );
};

