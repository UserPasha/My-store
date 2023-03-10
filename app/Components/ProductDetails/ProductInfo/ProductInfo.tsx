import React, {Dispatch, FC, SetStateAction} from 'react';
import style from "./ProductInfo.module.scss"
import Image from "next/image";
import {IProductDetails} from "../../../types/InterfaceProduct";

interface IProductInfo  extends IProductDetails {
    currentImageIndex: number
    setCurrentImageIndex: Dispatch<SetStateAction<number>>
}

export const ProductInfo:FC<IProductInfo> = ({product, currentImageIndex, setCurrentImageIndex}) => {

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
                <button key={product.id * index}
                        onClick={()=>setCurrentImageIndex(index)}
                className={currentImageIndex === index ? style.selected : ''}>
                <Image src={image} alt={product.name} width={60} height={60}/>
            </button>))}
            </div>
        </div>
    );
};

