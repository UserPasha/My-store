import React, {FC} from 'react';
import style from './ProductImage.module.scss'
import Image from "next/image";
import {IProductDetails} from "../../../types/InterfaceProduct";
import {formatCurrency} from "../../../utils/formatCurrency";

interface IProductImage  extends IProductDetails {
    currentImageIndex: number
}

export const ProductImage: FC<IProductImage> = ({product, currentImageIndex}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <Image src={product.images[currentImageIndex]}
                       alt={product.name}
                       width={250}
                       height={250}
                className={style.image}/>
                <div className={style.price}>
                    {formatCurrency(product.price)}
                </div>
            </div>
        </div>
    );
};

