import React, {FC} from 'react';
import style from "./ProductInfo.module.scss"
import Image from "next/image";
import {IProductDetails} from "../../../types/InterfaceProduct";

export const ProductInfo:FC<IProductDetails> = ({product}) => {

    console.log(product)

    return (
        <div className={style.wrapper}>
            <h1>{product.name}</h1>
            <div>
                <p>
                    {product.description}
                </p>
            </div>
            {product.images.map(image => (
                <button key={product.id}>
                <Image src={image} alt={product.name} width={100} height={100}/>
            </button>))}
        </div>
    );
};

