import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ProductDetails} from "../../app/Components/ProductDetails/ProductDetails";
import {IProduct, IProductDetails} from "../../app/types/InterfaceProduct";
import {products} from "../../app/Components/CartItem/DataProduct";



const ProductDetailsPage: NextPage<IProductDetails> = ({product}) => {
    return <ProductDetails product={product}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = products.map(product => {
        return {
            params: {slug: product.slug}
        }
    })

    return {paths, fallback: 'blocking'}
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({params}) => {

    const product = products.find(product => product.slug === params?.slug) || ({}as IProduct)

    return {
        props: {
            product
        }
    }
}
export default ProductDetailsPage