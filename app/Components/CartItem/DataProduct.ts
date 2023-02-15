import {IProduct} from "../../types/InterfaceProduct";
import EnergyImage from './../../../assets/images/product/EnergyDrink.png'
import Tobacco from './../../../assets/images/product/JDTobacco.png'

export const products: IProduct[] =[
    {

        id: 11,
        name: 'Salt Ice Viking Taste One',
        description: 'Scandinavian Fresh with ice really good choice',
        images: [EnergyImage,
            Tobacco],
        price: 15,
        reviews: []
    },
    {
        id: 12,
        name: 'Salt Brand New Taste Two',
        description: 'Brand New Fresh brand new taste ',
        images: [Tobacco,
            EnergyImage],
        price: 20,
        reviews: []
    },
    {
        id: 13,
        name: 'Brand Test length symbols  yeahh tyy',
        description: 'Brand New Fresh Test length symbols,' +
            ' Brand New Fresh Test length symbols',
        images: [Tobacco,
            EnergyImage],
        price: 20,
        reviews: []
    },
    {
        id: 14,
        name: 'Salt Brand Test Taste',
        description: 'Brand New Fresh Test length symbols',
        images: [EnergyImage,
            Tobacco],
        price: 20,
        reviews: []
    },
    {
        id: 15,
        name: 'Salt Brand Test New',
        description: 'Brand New Fresh Test length symbols',
        images: [EnergyImage,
            Tobacco],
        price: 20,
        reviews: []
    }
]