import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { setState, useState } from "react"
import {useContext} from "react"
import { cartContext } from "../Store/cartContext"

function ItemListDetail ({title, category, outDate, img, principalActor, secondaryActor, duration, description, stock, id, price}){
  const {addToCart} = useContext(cartContext)
  const [quantityInCart, setInCart] = useState(0)

  function handleClicks (quantity) {
    const item = {title, category, outDate, img, principalActor, secondaryActor, duration, description, stock, id, price}
    addToCart(item, quantity)
    setInCart(quantity)
  }

return (
    <div className="card">
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-text">Categoria: {category}</h6>
        <h5 className="card-text">Fecha de lanzamiento: {outDate}</h5>
        <h5 className="card-text">Protragonista :{principalActor}</h5>
        <h5 className="card-text">Secundario: {secondaryActor}</h5>
        <h5 className="card-text">Duracion: {duration}</h5>
        <h5 className="card-text">Descipcion breve: {description}</h5>
        <h5 className="card-text">Stock: {stock}</h5>  
        <h3 className="card-text">Precio: ${price}</h3>  
        
        {quantityInCart === 0?      
        <div className="card-body">          
          <ItemCount initial={1} stock={stock} onAdd={handleClicks} />
        </div>
        :
        <div> 
        <Link to={`/cart`} className="verCarritoo">VER CARRITO</Link>
        <Link to="/" className="seguirComprando">SEGUIR COMPRANDO</Link>  
        </div>        
        }
        
      </div>
    </div>
  )
  }
export default ItemListDetail;