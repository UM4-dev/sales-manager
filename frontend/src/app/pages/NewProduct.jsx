

import { useForm } from '../hooks/useForm';
import { useProduct } from '../hooks/useProduct';


export const NewProduct = () => {

    const { formState, nombre, cantidad, precio, descripcion, onChangeInput } = useForm({
        nombre : '',
        cantidad : '',
        precio : '',
        descripcion : '',
    })

    
    const { products, onAddProduct } = useProduct();
    
    const onSubmitForm = ( e ) => {
        e.preventDefault();
        onAddProduct( formState );
    }

    console.log(products)

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
            {
                products.map(product => <div key={product.nombre}>{product.nombre}</div>)
            }
        </div>
    )
}
