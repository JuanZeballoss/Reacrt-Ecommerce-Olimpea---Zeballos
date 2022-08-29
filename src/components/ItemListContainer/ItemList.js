import Item from "../Item/Item"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import getProductos from "../Helpers/getProductos";


  function ItemList () {
    const [data, setData] = useState([]);
    const idCategory = useParams().idCategory
  
    useEffect(() => {
      getProductos().then((respuesta) => {
        if (idCategory === undefined){
        setData(respuesta);}
        else {
          let filtrados = respuesta.filter (elemento => elemento.category === idCategory)
          setData(filtrados)
        }
      });
    }, [idCategory]);

    return (
        <div>
            {data.map((movie) => {
                return (                    
                        <Item
                            id={movie.id}                            
                            title={movie.title}                        
                            category={movie.category}                        
                            img={movie.img}
                        />                      
               )
            })
            }
        </div>
    )
}
  
export default ItemList;