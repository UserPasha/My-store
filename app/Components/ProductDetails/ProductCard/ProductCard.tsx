import React, {FC} from 'react';
import style from './ProductCard.module.scss'
import {ProductInfo} from "../ProductInfo/ProductInfo";
import {ProductImage} from "../ProductImage/ProductImage";
import {ProductVariations} from "../ProductVariations/ProductVariations";
import {IProductDetails} from "../../../types/InterfaceProduct";

export const ProductCard:FC<IProductDetails> = ({product}) => {
    return (
        <div className={style.wrapper}>
            <ProductInfo product={product}/>
            <ProductImage product={product}/>
            <ProductVariations product={product}/>
        </div>
    );
};

