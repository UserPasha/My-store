import React, {FC} from 'react';
import style from './ProductDetails.module.scss'
import {IProduct} from "../../types/InterfaceProduct";
import {IProductDetails} from "../../../pages/product/[slug]";
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
                <ProductCard/>
            </Title>
        </div>
    );
};

