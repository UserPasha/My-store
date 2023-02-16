import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {IProduct} from "../../../types/InterfaceProduct";
import Image from "next/image";
import style from "./CarouselItem.module.scss"
import {useActions} from "../../../hooks/useActions";
import {CarouselButton} from "../CarouselButton/CarouselButton";
import {CarouselVariation} from "../CarouselVariation/CarouselVariation";
import {TypeSize} from "../../../store/types";
import {CarouselNavigation} from "../CarouseelNavigation/CarouselNavigation";
import {ICarousel} from "../../../types/InterfaceCarousel";


export const CarouselItem: FC<ICarousel> = ({product, isActive, setActive, nextIndexHandler, prevIndexHandler}) => {

    const [selectedSize, setSelectedSize] = useState<TypeSize>('30 ml')
    const {addToCart} = useActions()

    return (
        <button className={isActive ? style.selected : style.wrapper}
                onClick={setActive}>
            <div>
                <div className={style.itemContainer}>

                    <CarouselNavigation isActive={isActive}
                                        product={product}
                                        nextIndexHandler={nextIndexHandler}
                                        prevIndexHandler={prevIndexHandler}/>

                </div>
                <div className={isActive ? style.active : style.header}>
                    <div>
                        {product.name}
                    </div>
                </div>
            </div>
            {isActive
                ?
                <>
                    <CarouselVariation productId={product.id} selectedSize={selectedSize}
                                       setSelectedSize={setSelectedSize}/>
                    <CarouselButton product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
                </>

                :
                <div className={style.description}>
                    {product.description}
                </div>}

        </button>
    );
};

