import React, {Dispatch, FC, SetStateAction} from 'react';
import style from './AddToCartButton.module.scss'
import {useActions} from "../../hooks/useActions";
import {IProduct} from "../../types/InterfaceProduct";
import {TypeSize} from "../../store/cart/cart.types";
import {useCart} from "../../hooks/useCart";

interface ICarouselButton {
    product: IProduct
    selectedSize: TypeSize
}

export const AddToCartButton: FC<ICarouselButton> = ({product, selectedSize}) => {

    const {addToCart, removeFromCart} = useActions()
    const {cart} = useCart()
    const currentItem = cart.find(cartItem => cartItem.product.id === product.id && cartItem.size === selectedSize)

    return (
        <button className={style.openButton}
                onClick={() => currentItem ? removeFromCart({id: currentItem.id}) : addToCart({product, quantity: 1, size: selectedSize})}
        > {currentItem ? 'REMOVE FROM BASKET' : 'ADD TO BASKET' }</button>
    );
};

