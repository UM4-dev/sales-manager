import { useEffect, useReducer } from "react"
import { getProducts as _getProducts } from '../helpers/getProducts';
import { appReducer } from "../reducers/appReducer";

import uniqid from 'uniqid';

const init = () => {
    return JSON.parse( localStorage.getItem('products') ) || [];
};

export const useProduct = () => {

    const [ products, dispatch ] = useReducer( appReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify( products ));
    }, [ products ])

    const getProducts = () => {
        return _getProducts();
    }

    const onAddProduct = ( formState ) => {
        const product = {
            ...formState,
            id : uniqid()
        }

        const action = {
            type : '[PRODUCT] add product',
            payload : product
        }

        dispatch( action );
    }
    
    return({
        ...products,
        products,
        onAddProduct,
        getProducts,
    })

}