import React, {FC, useState} from 'react';
import style from './ProductVariations.module.scss'
import {ProductRating} from "../ProductRating/ProductRating";
import {CarouselVariation} from "../../Catalog/CarouselVariation/CarouselVariation";
import {TypeSize} from "../../../store/cart/cart.types";
import {IProductDetails} from "../../../types/InterfaceProduct";
import {AddToCartButton} from "../../AddToCartButton/AddToCartButton";

export const ProductVariations:FC<IProductDetails> = ({product}) => {

    const [selectedSize, setSelectedSize] = useState<TypeSize>('30 ml')

    return (
        <div className={style.wrapper}>
           <ProductRating product={product}/>
            <CarouselVariation productId={product.id} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
            <AddToCartButton product={product} selectedSize={selectedSize}/>
        </div>
    );
};

