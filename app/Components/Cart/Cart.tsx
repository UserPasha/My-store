import React, {FC, useRef, useState} from 'react';
import style from './Cart.module.scss'
import {CartItem} from "../CartItem/CartItem";
import {useTypedSelector} from "../../hooks/useTypedSelector";


export const Cart: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const locker = () => {
        setIsOpen(!isOpen)
    }
    const buttonRef = useRef<HTMLButtonElement>(null)

    const cart = useTypedSelector(state => state.cart.items)

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

            {isOpen ? <div className={style.overlay}
                    // onClick={locker}
                >
                    <div className={style.menu}>
                        <div className={style.title}>MY BASKET</div>
                        <button className={style.closedButton} onClick={locker}> X</button>
                        <div className={style.products}>
                            {cart.map((item, index) =>
                                <CartItem key={index} item={item}/>
                            )}
                        </div>


                        <div className={style['total-amount']}>
                            <div>Total:</div>
                            <div>$100</div>
                        </div>

                    </div>
                </div>
                :
                <div className={style.closed}></div>}


        </div>
    );
};

