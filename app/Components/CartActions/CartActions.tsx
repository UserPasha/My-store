import React, {useEffect, useState} from 'react';
import style from './CartActions.module.scss'

export const CartActions = () => {

    let [quantity, setQuantity] = useState<number>(0)
    const increment = () => {
        setQuantity(quantity + 1)
    }
    const decrement = () => {
        setQuantity(quantity - 1)
    }



    return (
        <div className={style.wrapper}>
            <button className={style.button}
                    onClick={decrement}
            disabled={quantity<1}>-</button>
            <div className={style.quantity}>{quantity}</div>
            <button className={style.button} onClick={increment}>+</button>
        </div>
    );
};

