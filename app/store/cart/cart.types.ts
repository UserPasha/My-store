import {ICartItem} from "../../types/InterfaceCardItem";

export interface ICartInitialState{
    items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
    type: 'minus' | 'plus'
}

export type TypeSize = '30 ml'|'50 ml'| '100 ml'

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
    size: TypeSize
}