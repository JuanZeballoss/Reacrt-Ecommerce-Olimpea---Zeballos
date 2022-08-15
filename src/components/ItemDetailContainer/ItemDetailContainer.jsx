import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail"
import getProductosId from "../Helpers/getProductosId";

function ItemDetailContainer ({id}) {
  const [data, setData] = useState([id]);

  useEffect(() => {
    getProductosId(id).then((respuesta) => {
      setData(respuesta);
    });
  }, []);

  return (
    <div>
      <h2>Este es nuestro producto mas vendido</h2>
      <ItemDetail item={data} />
    </div>
  )
}

export default ItemDetailContainer