import { useContext } from "react"
import { ProductList } from "../components/ProductList";
import { AppContext } from "../context/app/AppContext";


export const Products = () => {

    const { products } = useContext( AppContext );

    return (
        <div className="container">
            <h1 className="my-2">Productos</h1>
            <hr />
            <ProductList products={ products }/>
        </div>
    )
}
