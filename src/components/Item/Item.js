import "./Item.css"
import ItemCount from "../ItemCount.js";

function Item({ img, title, category, stock, price }) {

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-text">Categoria: {category}</h6>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Stock: {stock}</p>
      </div>
      <div className="card-body">
        <ItemCount initial={1} stock={stock} />
      </div>
    </div>)
}

export default Item;