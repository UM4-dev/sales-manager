import { useEffect, useReducer } from "react"
import { appReducer } from "../reducers/appReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('products') ) || [];
};

export const useProduct = () => {

    const [ products, dispatch ] = useReducer( appReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify( products ));
    }, [ products ])

    const onAddProduct = ( formState ) => {
        const product = {
            ...formState
        }

        const action = {
            type : '[PRODUCT] add product',
            payload : product
        }

        dispatch( action );
    }
    
    return({
        products,
        onAddProduct,
        ...products,
    })

}