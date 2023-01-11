import {IProduct} from "../../types/InterfaceProduct";
import EnergyImage from './../../../assets/images/product/EnergyDrink.jpg'
import Tobacco from './../../../assets/images/product/JDTobacco.jpg'

export const product: IProduct = {
    id: 11,
    name: 'Viking',
    description: 'Scandinavian Fresh',
    images: ['./../../../assets/images/product/EnergyDrink.jpg',
        './../../../assets/images/product/JDTobacco.jpg'],
    price: 15,
    reviews: []
}