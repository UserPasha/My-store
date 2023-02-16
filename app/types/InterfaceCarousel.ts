import {IProduct} from "./InterfaceProduct";

export interface ICarousel{
    product: IProduct
    isActive: boolean
    setActive: () => void
    nextIndexHandler: () => void
    prevIndexHandler: () => void
}

export interface ICarouselNavigation extends Omit<ICarousel, 'setActive'>{}