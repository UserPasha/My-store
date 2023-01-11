import React, {FC} from 'react';
import style from './Cart.module.scss'

export const Cart: FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.heading}></div>
            <span className={style.badge}>
                 1
            </span>
            <span className={style.basket}>
                  My basket
            </span>
            <div className={style.menu}>

            </div>
        </div>
    );
};

