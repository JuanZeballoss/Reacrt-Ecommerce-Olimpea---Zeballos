import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail"
import getProductos from "../Helpers/getProductos";
import { useParams } from "react-router-dom"

function ItemDetailContainer () {
  const idURL = useParams().id;
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos(idURL).then((respuesta) => {
      setData(respuesta);
    });
  }, [idURL]);

  return (
    <div>
      <h2>Este es nuestro producto mas vendido</h2>
      <ItemDetail item={data} />
    </div>
  )
}

export default ItemDetailContainer