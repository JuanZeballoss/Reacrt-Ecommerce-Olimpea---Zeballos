
function ItemListDetail ({title, category, outDate, img, principalActor, secondaryActor, duration, description}){
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
      </div>
      
    </div>)

}

export default ItemListDetail;