import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"
import { Link } from "react-router-dom"

function handleClicks (count) {
  console.log("Agregar al carrito", count)
}

function Item({ img, title, category, stock, price, id}) {

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h6 className="card-text">Categoria: {category}</h6> 
        <h4 className="card-text">Stock: {stock}</h4>  
        <h4 className="card-text">Precio: ${price}</h4>  
      </div>      
      <div className="card-body">
        <ItemCount initial={1} stock={stock} onAdd={handleClicks} />
      </div>
      <div className="card-body">
        <Link to={`detalle/${id}`} className="verMas" >Ver Mas</Link>
      </div>      
    </div>)
}
export default Item;