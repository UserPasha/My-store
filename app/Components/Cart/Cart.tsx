import React, {FC, useRef, useState} from 'react';
import style from './Cart.module.scss'
import {CartItem} from "../CartItem/CartItem"; 
import {formatCurrency} from "../../utils/formatCurrency";
import {useCart} from "../../hooks/useCart";


export const Cart: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const locker = () => {
        setIsOpen(!isOpen)
    }
    const buttonRef = useRef<HTMLButtonElement>(null)

    const {cart, total} = useCart()

    return (
        <div className={style.wrapper}>
            <button className={style.heading}
                    onClick={locker}
                    ref={buttonRef}>
                {cart.length > 0 && <span className={style.badge}>
                 {cart.length}
            </span>}
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
                            {cart.length ? cart.map((item, index) =>
                                    <CartItem key={index} item={item}/>
                                )
                                :
                                <div className={style.empty}> No products found </div>}
                        </div>


                        <div className={style['total-amount']}>
                            <div>Total:</div>
                            <div>{formatCurrency(total)}</div>
                        </div>

                    </div>
                </div>
                :
                <div className={style.closed}>

                </div>}


        </div>
    );
};

