import Item from "./Item"
import React, { useEffect, useState } from "react";
import stockProducts from "../Data/Data"

function getProductos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(stockProducts), 2000)
    });
  }
  
  function ItemList () {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      getProductos().then((respuesta) => {
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