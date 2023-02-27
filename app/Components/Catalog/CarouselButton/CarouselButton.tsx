import React, {Dispatch, FC, SetStateAction} from 'react';
import style from './CarouselButton.module.scss'
import {useActions} from "../../../hooks/useActions";
import {IProduct} from "../../../types/InterfaceProduct";
import {TypeSize} from "../../../store/cart/cart.types";
import {useCart} from "../../../hooks/useCart";

interface ICarouselButton {
    product: IProduct
    selectedSize: TypeSize
    setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}

export const CarouselButton: FC<ICarouselButton> = ({product, selectedSize, setSelectedSize}) => {

    const {addToCart, removeFromCart} = useActions()
    const {cart} = useCart()
    const currentItem = cart.find(cartItem => cartItem.product.id === product.id && cartItem.size === selectedSize)

    return (
        <button className={style.openButton}
                onClick={() => currentItem ? removeFromCart({id: currentItem.id}) : addToCart({product, quantity: 1, size: selectedSize})}
        > {currentItem ? 'REMOVE FROM BASKET' : 'ADD TO BASKET' }</button>
    );
};

