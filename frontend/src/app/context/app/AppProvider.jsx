
import { useProduct } from "../../hooks/useProduct";
import { AppContext } from "./AppContext";


export const AppProvider = ({ children }) => {

    const productProps = useProduct();

    return (
        <AppContext.Provider value={ { ...productProps } }>
            { children }
        </AppContext.Provider>
    )
}
