
import { useContext } from 'react';
import { ProductsContext } from '../context/products/ProductsContext';
import { useForm } from '../hooks/useForm';


export const NewProduct = () => {

    const { formState, nombre, cantidad, precio, descripcion, onChangeInput } = useForm({
        nombre : '',
        cantidad : '',
        precio : '',
        descripcion : '',
    })

    
    const { onAddProduct } = useContext( ProductsContext );
    
    const onSubmitForm = ( e ) => {
        e.preventDefault();
        onAddProduct( formState );
    }

    return (
        <div className="container my-4">
            <h1>Crear producto</h1>
            <hr />
            <div className="container">
                <form onSubmit={ onSubmitForm }>
                    <input 
                        className="form-control my-4"
                        type="text"
                        placeholder="nombre"
                        name="nombre"
                        value={ nombre }
                        onChange={ onChangeInput }
                    />

                    <input 
                        className="form-control my-4"
                        type="number"
                        placeholder="cantidad"
                        name="cantidad"
                        value={ cantidad }
                        onChange={ onChangeInput }
                    />

                    <input 
                        className="form-control my-4"
                        type="number"
                        placeholder="precio"
                        name="precio"
                        value={ precio }
                        onChange={ onChangeInput }
                    />
                    
                    <textarea
                        className="form-control my-4"
                        placeholder="descripcion del producto"
                        name="descripcion"
                        value={ descripcion }
                        onChange={ onChangeInput }
                    />
                    
                    <button className="btn btn-primary">
                        Crear
                    </button>
                </form>
            </div>
        </div>
    )
}
