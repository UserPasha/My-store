import React, {FC, useRef, useState} from 'react';
import style from './Cart.module.scss'
import {CartItem} from "../CartItem/CartItem";
import {cart} from "../CartItem/DataCart";

export const Cart: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const locker = () =>{
        setIsOpen(!isOpen)
    }
    const buttonRef = useRef<HTMLButtonElement>(null)

    return (
        <div className={style.wrapper}>
            <button className={style.heading}
            onClick={locker}
            ref={buttonRef}>
            <span className={style.badge}>
                 1
            </span>
            <span className={style.basket}>
                  My basket
            </span>
            </button>
            {isOpen &&  <div className={style.menu}>
                {cart.map((item, index)=>
                    <CartItem key={index} item={item}/>
                )}
            </div>}

        </div>
    );
};

