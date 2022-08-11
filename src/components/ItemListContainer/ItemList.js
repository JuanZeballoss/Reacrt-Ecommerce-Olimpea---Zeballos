import Item from "../Item/Item"
import React, { useEffect, useState } from "react";
import getProdId from "../Helpers/getProductos"

  function ItemList () {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      getProdId().then((respuesta) => {
        setData(respuesta);
      });
    }, []);


    return (
        <div>
            {data.map((movie) => {
                return (                    
                        <Item
                            key={movie.id}
                            title={movie.title}                        
                            category={movie.category}                        
                            img={movie.img}
                            stock={movie.stock}
                            price={movie.price}
                        />                      
               )
            })
            }
        </div>
    )
}
  
export default ItemList;