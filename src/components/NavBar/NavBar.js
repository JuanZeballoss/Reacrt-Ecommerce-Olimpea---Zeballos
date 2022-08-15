import "./NavBar.css";
import carritoImg from "../CartWidget/shopping-cart.svg";
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

function NavBar ()  {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Olimpea Ecommerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Trabaja con nosotros</a>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/detalle">Maquillaje</Link></li>
                  <li><Link className="dropdown-item" to="#">SkinCare</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="#">Anti Age</Link></li>
                </ul>                
              </li>              
            </ul>
            <form className="d-flex" role="search">              
              <CartWidget imgUrl={carritoImg} />
              
            </form>
          </div>
        </div>
      </nav>
      </>
    )
}

export default NavBar;