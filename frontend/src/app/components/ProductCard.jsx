import { Link } from "react-router-dom"

const imgUrl = 'https://www.loxamhune.com/wp-content/uploads/woocommerce-placeholder.png'




export const ProductCard = ({ id, descripcion = 'Descripcion', nombre = 'Nombre', precio = '0', cantidad = '0'}) => {
    return (
        <div className="col-3 my-3">
            <div className="card shadow rounded">
                <img className="img-thumbnail p-3 card-img-top" src={ imgUrl } alt="product-img" />
                <div className="card-body text-center">
                    <h5>{ nombre }</h5>
                    <p>{ descripcion }</p>
                    <p>$ { precio }</p>
                    <p><b>Stock:</b> { cantidad }</p>
                    <Link className="btn btn-primary mx-auto" to={`/product/${ id }`}>Detalles</Link>
                </div>
            </div>
        </div>
    )
}
