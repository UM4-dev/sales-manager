import { ProductCard } from "./ProductCard"


export const ProductList = ({ products }) => {
    return (
        <div className="row container">
            {
                products.map( product => <ProductCard { ...product } /> )
            }
        </div>
    )
}
