import React, {FC} from 'react';
import style from './ProductDetails.module.scss'
import {IProduct, IProductDetails} from "../../types/InterfaceProduct";

import {Title} from "../Catalog/Title/Title";
import {BreadCrumbs} from "./BreadCrumbs/BreadCrumbs";
import {ProductNavigation} from "./ProductNavigation/ProductNavigation";
import {ProductCard} from "./ProductCard/ProductCard";

export const ProductDetails:FC<IProductDetails> = ({product}) => {
    return (
        <div>
            <Title>
                {product.name}
                <BreadCrumbs/>
                <ProductNavigation productId={product.id}/>
                <ProductCard product={product}/>
            </Title>
        </div>
    );
};

