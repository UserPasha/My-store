import {IProduct} from "../../types/InterfaceProduct";
import EnergyImage from './../../../assets/images/product/EnergyDrink.jpg'
import Tobacco from './../../../assets/images/product/JDTobacco.jpg'

export const products: IProduct[] =[
    {

        id: 11,
        name: 'Viking',
        description: 'Scandinavian Fresh',
        images: [EnergyImage,
            Tobacco],
        price: 15,
        reviews: []
    },
    {
        id: 12,
        name: 'Brand New',
        description: 'Brand New Fresh',
        images: [Tobacco,
            EnergyImage],
        price: 20,
        reviews: []
    }
]