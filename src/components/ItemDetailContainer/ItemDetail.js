import "../Item/Item.css"
import ItemListDetail from "./ItemListDetail"
  
  function ItemDetail ({item}) {
  
    return (
        <div>                                 
          <ItemListDetail
              id={item.id}
              key={item.id}
              title={item.title}                        
              category={item.category}                        
              img={item.img}
              outDate={item.outDate}
              country={item.country}
              description={item.description}
              duration={item.duration}
              principalActor={item.principalActor}
              secondaryActor={item.secondaryActor}                         
              stock={item.stock}
          />       
        </div>
    )
}

export default ItemDetail;