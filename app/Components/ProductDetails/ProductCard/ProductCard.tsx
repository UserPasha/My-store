import React, {FC, useState} from 'react';
import style from './ProductCard.module.scss'
import {ProductInfo} from "../ProductInfo/ProductInfo";
import {ProductImage} from "../ProductImage/ProductImage";
import {ProductVariations} from "../ProductVariations/ProductVariations";
import {IProductDetails} from "../../../types/InterfaceProduct";

export const ProductCard:FC<IProductDetails> = ({product}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    return (
        <div className={style.wrapper}>
            <ProductInfo product={product} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex}/>
            <ProductImage product={product} currentImageIndex={currentImageIndex}/>
            <ProductVariations product={product}/>
        </div>
    );
};

