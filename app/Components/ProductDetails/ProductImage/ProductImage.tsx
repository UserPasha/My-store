import React, {FC} from 'react';
import style from './ProductImage.module.scss'
import Image from "next/image";
import {IProductDetails} from "../../../types/InterfaceProduct";
import {formatCurrency} from "../../../utils/formatCurrency";

export const ProductImage:FC<IProductDetails> = ({product})=> {
    return (
        <div className={style.wrapper}>
            <Image src={product.images[0]} alt={product.name} width={250} height={250}/>
          <div>
              {formatCurrency(product.price)}
          </div>
        </div>
    );
};

