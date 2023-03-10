import {IProduct} from "../../types/InterfaceProduct";
import EnergyImage from '../../../assets/images/product/EnergyDrink.png'
import Tobacco from '../../../assets/images/product/JDTobacco.png'
import {dataReview} from "./DataReview";

export const products: IProduct[] =[
    {

        id: 11,
        name: 'Salt Ice Viking Taste One',
        slug: 'salt-ice-viking-taste-one',
        description: 'Scandinavian Fresh with ice really good choice',
        images: [EnergyImage,
            Tobacco],
        price: 15,
        reviews: []
    },
    {
        id: 12,
        name: 'Salt Brand New Taste Two',
        slug: 'salt-brand-new-taste-two',
        description: 'Brand New Fresh brand new taste ',
        images: [Tobacco,
            EnergyImage],
        price: 20,
        reviews: [dataReview[0], dataReview[1], dataReview[2]]
    },
    {
        id: 13,
        name: 'Brand Test length symbols  yeahh tyy',
        slug: 'brand-test-length-symbols-yeahh-tyy',
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
        slug: 'salt-brand-test-taste',
        description: 'Brand New Fresh Test length symbols',
        images: [EnergyImage,
            Tobacco],
        price: 20,
        reviews: []
    },
    {
        id: 15,
        name: 'Salt Brand Test New',
        slug: 'salt-brand-test-new',
        description: 'Brand New Fresh Test length symbols',
        images: [EnergyImage,
            Tobacco],
        price: 20,
        reviews: []
    }
]