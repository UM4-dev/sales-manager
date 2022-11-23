import { useContext } from "react"
import { ProductList } from "../components/ProductList";
import { ProductsContext } from "../context/products/ProductsContext"


export const Products = () => {

    const { products } = useContext( ProductsContext );

    return (
        <div className="container">
            <h1 className="my-2">Productos</h1>
            <hr />
            <ProductList products={ products }/>
        </div>
    )
}
