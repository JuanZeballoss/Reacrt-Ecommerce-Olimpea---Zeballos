import "./NavBar.css"

function NavBar ()  {
    return(
    <ul className="menu">
        <h1 className="titulo">OLIMPEA Ecommerce - Centro de estetica</h1>
        <li> <a className="lista" href="./productos.html">Productos</a></li>
        <li> <a className="lista" href="./carrito.html">Carrito</a></li>
        <li> <a className="lista" href="./quienesSomos.html">Quienes quienesSomos</a></li>
        <li> <a className="lista" href="./iniciaSesion.html">Inicia sesion</a></li>
        </ul>
    )
}

export default NavBar;