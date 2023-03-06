import React, {FC} from 'react';
import style from './ProductCard.module.scss'
import {ProductInfo} from "../ProductInfo/ProductInfo";
import {ProductImage} from "../ProductImage/ProductImage";
import {ProductVariations} from "../ProductVariations/ProductVariations";

export const ProductCard:FC = () => {
    return (
        <div className={style.wrapper}>
            <ProductInfo/>
            <ProductImage/>
            <ProductVariations/>
        </div>
    );
};

