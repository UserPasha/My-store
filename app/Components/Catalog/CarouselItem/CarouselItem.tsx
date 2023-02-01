import React, {FC} from 'react';
import {IProduct} from "../../../types/InterfaceProduct";
import Image from "next/image";
import style from "./CarouselItem.module.scss"

export const CarouselItem: FC<{ product: IProduct }> = ({product}) => {
    return (
        <div className={style.wrapper}>
            <Image className={style.image}
                   src={product.images[0]}
                   alt={product.description}
                   width={200}/>
            <div className={style.header}>
                {product.name}
            </div>
            <div className={style.description}>
                {product.description}
            </div>
        </div>
    );
};

