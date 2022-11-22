import products from '../data/products.json'


export const addProducts = ( _products ) => {
    _products.forEach( prod => products = [{ ...prod }] );
}