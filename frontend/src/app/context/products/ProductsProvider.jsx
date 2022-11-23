
import { useProduct } from "../../hooks/useProduct";
import { ProductsContext } from "./ProductsContext";


export const ProductsProvider = ({ children }) => {

    const { products, onAddProduct, onDeleteProduct, onPatchProduct } = useProduct();

    return (
        <ProductsContext.Provider value={ { products, onAddProduct, onDeleteProduct, onPatchProduct } }>
            { children }
        </ProductsContext.Provider>
    )
}
