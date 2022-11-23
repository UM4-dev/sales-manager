
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { AppProvider } from '../context/app/AppProvider';

import { 
    NewProduct, 
    Products, 
    ShoopingCart, 
    Sales, 
    ProductDetail 
} from '../pages';
import { Search } from '../pages/Search';


export const AppRoutes = () => {
    return (
        <AppProvider>
            <Navbar />
            <Routes>
                <Route path="/products" element={ <Products /> } />
                <Route path="/shooping-cart" element={ <ShoopingCart /> } />
                <Route path="/product/:id" element={ <ProductDetail /> } />
                <Route path="/sales" element={ <Sales /> } />
                <Route path="/new-product" element={ <NewProduct /> } />
                <Route path="/search" element={ <Search /> } />

                <Route path="/*" element={ <Navigate to="/products" /> } />
            </Routes>
        </AppProvider>
    )
}
