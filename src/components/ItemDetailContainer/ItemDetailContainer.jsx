import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail"
import getProductos from "../Helpers/getProductos";

const ItemDetailContainer = ({id}) => {
  const[data, setData] = useState([id]);

  useEffect(() => {
  getProductos(data, setData);
  console.log(data);
}, ([])
);
  
  return (
    <div>
      <h2>Este es nuestro producto mas vendido</h2>
      <ItemDetail item={id} />
    </div>
  )
}

export default ItemDetailContainer