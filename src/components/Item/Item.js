import "./Item.css"
import { Link } from "react-router-dom"
function Item({ img, title, category, id}) {

  return (
    <div className="card" key={id}>
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h6 className="card-text">Categoria: {category}</h6>  
       
      </div>     
      
      <div className="card-body">
        <Link to={`detalle/${id}`} className="buttonVerMas" >MAS INFORMACION</Link>
      </div>      
    </div>)
}
export default Item;