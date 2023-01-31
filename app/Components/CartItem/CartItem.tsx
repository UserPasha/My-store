import React, {FC} from 'react';
import style from './CartItem.module.scss'
import {ICartItem} from "../../types/InterfaceCardItem";
import Image from "next/image";
import {CartActions} from "../CartActions/CartActions";
import {formatCurrency} from "../../utils/formatCurrency";



export const CartItem: FC<{ item: ICartItem }> = ({item}) => {



    return (
        <div className={style.wrapper}>
            <Image
                src={item.product.images[0]}
                width='100'
                height='100'
                alt={item.product.name}/>
           <div className={style.description}>
               <div className={style.name}>{item.product.name}</div>
               <div className={style.price}>
                   {formatCurrency(item.product.price)}
                   </div>
               <CartActions item={item} />
           </div>
        </div>
    );
};

