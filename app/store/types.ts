import {ICartItem} from "../types/InterfaceCardItem";

export interface IInitialState{
    items: ICartItem[]
}

export interface IAddToCart extends Omit<ICartItem, 'id'> {}