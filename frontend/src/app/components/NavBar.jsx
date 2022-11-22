import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/login", {
            replace : true,
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Sales Manager
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/products"
                    >
                        Productos
                    </NavLink>

                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item" to="categoria1">Categoria 1</NavLink></li>
                            <li><NavLink className="dropdown-item" to="categoria2">Categoria 2</NavLink></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><NavLink className="dropdown-item" to="categoria3">Otra ultima</NavLink></li>
                        </ul>
                    </li>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <span className="nav-link nav-item text-warning">
                    UM4-dev
                </span>
                <button 
                    className="nav-link nav-item btn btn-danger text-white"
                    onClick={ onLogout }
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}