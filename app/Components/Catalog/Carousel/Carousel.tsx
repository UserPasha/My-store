import React, {FC} from 'react';
import {cart} from "../../CartItem/DataCart";
import {CarouselItem} from "../CarouselItem/CarouselItem";
import style from './Carousel.module.scss'
import {IProduct} from "../../../types/InterfaceProduct";

export const Carousel: FC<{ products: IProduct[] }> = ({products}) => {



    return (
        <section className={style.wrapper}>
            {cart.map((cart, index) => <CarouselItem key={cart.product.name}
                                                     product={cart.product}
                                                    index={index}
            />)}
        </section>
    );
};

