import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"

function Item({ img, title, category, stock, price}) {

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
        <ItemCount initial={1} stock={stock} />
      </div>
      <button className="buttonVerMas">AGREGAR AL CARRITO</button>
    </div>)
}
export default Item;