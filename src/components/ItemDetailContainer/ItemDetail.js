import "../Item/Item.css"
import React, { useEffect, useState } from "react";
import ItemListDetail from "./ItemListDetail"
import getProductos from "../Helpers/getProductos";
  
  function ItemDetail ({item}) {
    const [data, setData] = useState([item]);
  
    useEffect(() => {
      getProductos(data).then((respuesta) => {
        setData(respuesta);
      });
    }, []);

    return (
        <div>                                 
          <ItemListDetail
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