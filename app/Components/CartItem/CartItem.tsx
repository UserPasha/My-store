import React, {FC} from 'react';
import style from './CartItem.module.scss'
import {ICardItem} from "../../types/InterfaceCardItem";
import Image from "next/image";
import {CartActions} from "../CartActions/CartActions";


export const CartItem: FC<{ item: ICardItem }> = ({item}) => {
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
                   {new Intl.NumberFormat(undefined, {style: 'currency', currency: 'USD'})
                       .format(item.product.price)}</div>
               <CartActions/>
           </div>
        </div>
    );
};

