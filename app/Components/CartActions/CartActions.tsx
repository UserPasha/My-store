import React, {FC, useState} from 'react';
import style from './CartActions.module.scss'
import {cartSlice} from "../../store/slice";
import {useDispatch} from "react-redux";
import {ICartItem} from "../../types/InterfaceCardItem";
import {useActions} from "../../hooks/useActions";


export const CartActions: FC<{ item: ICartItem }> = ({item}) => {

    // const dispatch = useDispatch()
    const {removeFromCart} = useActions()

    let [quantity, setQuantity] = useState<number>(1)
    const [addPainting, setAddPainting] = useState<boolean>(false)
    const [RemovePainting, setRemovePainting] = useState<boolean>(false)

    const increment = () => {
        setQuantity(quantity + 1)
        setAddPainting(true)
        setTimeout(() => {
            setAddPainting(false)
        }, 500)
    }
    const decrement = () => {
        setQuantity(quantity - 1)
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
                    onClick={decrement}
                    disabled={quantity < 1}>
                -
            </button>
            <div
                className={addPainting ? style.addPainting : RemovePainting ? style.removePainting : style.quantity}>{quantity}</div>
            <button className={style.button}
                    onClick={increment}>
                +
            </button>
        </div>
    );
};

