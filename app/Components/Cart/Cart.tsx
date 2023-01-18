import React, {FC} from 'react';
import style from './Cart.module.scss'
import {CartItem} from "../CartItem/CartItem";
import {cart} from "../CartItem/DataCart";

export const Cart: FC = () => {
    return (
        <div className={style.wrapper}>
            <button className={style.heading}>
            <span className={style.badge}>
                 1
            </span>
            <span className={style.basket}>
                  My basket
            </span>
            </button>
            <div className={style.menu}>
                {cart.map((item, index)=>
                    <CartItem key={index} item={item}/>
                )}
            </div>
        </div>
    );
};

