import React, {FC} from 'react';
import style from './ProductDetails.module.scss'
import {IProduct} from "../../types/InterfaceProduct";
import {IProductDetails} from "../../../pages/product/[slug]";
import {Title} from "../Catalog/Title/Title";

export const ProductDetails:FC<IProductDetails> = ({product}) => {
    return (
        <div>
            <Title>
                {product.name}
            </Title>
        </div>
    );
};

