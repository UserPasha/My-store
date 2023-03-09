import React, {FC} from 'react';
import style from "./ProductInfo.module.scss"
import Image from "next/image";
import {IProductDetails} from "../../../types/InterfaceProduct";

export const ProductInfo:FC<IProductDetails> = ({product}) => {

    return (
        <div className={style.wrapper}>
            <h2>{product.name}</h2>
            <div className={style.descriptionContainer}>
                <p>
                    {product.description}
                </p>
            </div>
            <div className={style.buttons}>
            {product.images.map((image, index) => (
                <button key={product.id * index}>
                <Image src={image} alt={product.name} width={80} height={80}/>
            </button>))}
            </div>
        </div>
    );
};

