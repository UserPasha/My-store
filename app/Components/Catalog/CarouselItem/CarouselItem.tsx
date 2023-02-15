import React, {FC, useState} from 'react';
import {IProduct} from "../../../types/InterfaceProduct";
import Image from "next/image";
import style from "./CarouselItem.module.scss"
import {useActions} from "../../../hooks/useActions";
import {CarouselButton} from "../CarouselButton/CarouselButton";
import {CarouselVariation} from "../CarouselVariation/CarouselVariation";

export const CarouselItem: FC<{ product: IProduct }> = ({product}) => {

    const [isActive, setIsActive] = useState<boolean>(true)
    const {addToCart} = useActions()

    return (
        <div className={isActive ? style.selected : style.wrapper}>
            <div>
                <Image className={isActive ? style.imageActive : style.image}
                       src={product.images[0]}
                       alt={product.description}
                       width={200}/>
                <div className={isActive ? style.active : style.header}>
                    <div>
                        {product.name}
                    </div>
                </div>
            </div>
            {isActive
                ?
                <>
                    <CarouselVariation productId={product.id}/>
                    <CarouselButton product={product}/>
                </>

                :
                <div className={style.description}>
            {product.description}
                </div>}

        </div>
    );
};

