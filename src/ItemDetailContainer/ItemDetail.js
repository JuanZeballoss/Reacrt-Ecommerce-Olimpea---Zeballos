import "../components/Item/Item.css"
import React, { useEffect, useState } from "react";
import stockProducts from "../components/Data/Data"
import ItemListDetail from "./ItemListDetail"

function getProductos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(stockProducts), 2000)
    });
  }
  
  function ItemDetail () {
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
                        <ItemListDetail
                            key={movie.id}
                            title={movie.title}                        
                            category={movie.category}                        
                            img={movie.img}
                            outDate={movie.outDate}
                            country={movie.country}
                            description={movie.description}
                            duration={movie.duration}
                            principalActor={movie.principalActor}
                            secondaryActor={movie.secondaryActor}                         
                        />                      
               )
            })
            }
        </div>
    )
}

export default ItemDetail;