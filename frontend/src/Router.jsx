import { Navigate, Route, Routes } from "react-router-dom"
import { Products } from "./app/pages"
import { AppRoutes } from "./app/routers/AppRoutes"
import { LoginPage } from "./auth/pages/LoginPage"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/products" />} />
            <Route path="/login" element={ <LoginPage />} />


            <Route path="/*" element={ <AppRoutes />} />
        </Routes>
    )
}
