import {IProduct} from "./InterfaceProduct";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

export interface ICarousel {
    product: IProduct
    index: number
}

export interface ICarouselNavigation extends Omit<ICarousel, 'index'> {
    isActive: boolean
    selectSlide: ActionCreatorWithPayload<number>
    index: number
}