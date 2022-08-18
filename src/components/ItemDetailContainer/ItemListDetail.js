import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { setState, useState } from "react"

function ItemListDetail ({title, category, outDate, img, principalActor, secondaryActor, duration, description, stock}){

  const [quantityInCart, setInCart] = useState(0)

  function handleClicks (count) {
    console.log("Agregar al carrito", count)    
    setInCart(count)
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
        {quantityInCart === 0?      
        <div className="card-body">          
          <ItemCount initial={1} stock={stock} onAdd={handleClicks} />
        </div>
        : <Link to="/cart">Ver carrito</Link>
        }
      </div>
    </div>
  )
  }
export default ItemListDetail;