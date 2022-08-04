import "./Card.css"
import ItemCount from "../ItemCount";

function Card ({img, name, description, stock, price}) {

return (   
    <div className="card">
      <img src={img} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">PRECIO ${price}</li>
        <li className="list-group-item">STOCK {stock}</li>
        <li className="list-group-item"></li>
      </ul>  
      <div className="card-body">
        <ItemCount initial={1} stock={5}/>       
      </div>
    </div>)
}

export default Card;