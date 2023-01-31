import React, {FC, useState} from 'react';
import style from './CartActions.module.scss'
import {ICartItem} from "../../types/InterfaceCardItem";
import {useActions} from "../../hooks/useActions";


export const CartActions: FC<{ item: ICartItem }> = ({item}) => {

    const {removeFromCart, changeQuantity} = useActions()

    const [addPainting, setAddPainting] = useState<boolean>(false)
    const [RemovePainting, setRemovePainting] = useState<boolean>(false)

    const increment = (id: number) => {
        changeQuantity({id, type: "plus"})
        setAddPainting(true)
        setTimeout(() => {
            setAddPainting(false)
        }, 500)
    }
    const decrement = (id: number) => {
        changeQuantity({id, type: "minus"})
        setRemovePainting(true)
        setTimeout(() => {
            setRemovePainting(false)
        }, 500)
    }


    return (
        <div className={style.wrapper}>
            <button className={style.closedButton}
                    onClick={() =>
                        removeFromCart({id: item.id})
                    }> X
            </button>
            <button className={style.button}
                    onClick={() => decrement(item.id)}
                    disabled={item.quantity < 1}>
                -
            </button>
            <div
                className={addPainting
                    ?
                    style.addPainting : RemovePainting
                        ?
                        style.removePainting : style.quantity}>{item.quantity}</div>
            <button className={style.button}
                    onClick={() => increment(item.id)}>
                +
            </button>
        </div>
    );
};

