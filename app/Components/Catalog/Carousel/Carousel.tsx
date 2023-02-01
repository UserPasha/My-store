import React, {FC} from 'react';
import {cart} from "../../CartItem/DataCart";
import {CarouselItem} from "../CarouselItem/CarouselItem";
import style from './Carousel.module.scss'
import {IProduct} from "../../../types/InterfaceProduct";

export const Carousel:FC<{products: IProduct[]}> = ({products}) => {
    return (
        <div className={style.wrapper}>
            {cart.map(cart=> <CarouselItem key={cart.product.name} product={cart.product}/>)}
        </div>
    );
};

