import { ProductCard } from "./ProductCard"


export const ProductList = ({ products }) => {
    return (
        <div className="product-list container">
            {
                products.map( product => <ProductCard { ...product } /> )
            }
        </div>
    )
}
