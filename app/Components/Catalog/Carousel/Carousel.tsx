import React, {FC, useState} from 'react';
import {cart} from "../../CartItem/DataCart";
import {CarouselItem} from "../CarouselItem/CarouselItem";
import style from './Carousel.module.scss'
import {IProduct} from "../../../types/InterfaceProduct";

export const Carousel: FC<{ products: IProduct[] }> = ({products}) => {

    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1)
    const nextIndexHandler = () => {
        if (selectedItemIndex !== products.length - 1) {
            setSelectedItemIndex(selectedItemIndex + 1)
        }
    }
    const prevIndexHandler = () => {
        if (selectedItemIndex > 0) {
            setSelectedItemIndex(selectedItemIndex - 1)
        }
    }

    return (
        <section className={style.wrapper}>
            {cart.map((cart, index) => <CarouselItem key={cart.product.name}
                                                     product={cart.product}
                                                     isActive={index === selectedItemIndex}
                                                     setActive={() => setSelectedItemIndex(index)}
                                                     nextIndexHandler={nextIndexHandler}
                                                     prevIndexHandler={prevIndexHandler}
            />)}
        </section>
    );
};

