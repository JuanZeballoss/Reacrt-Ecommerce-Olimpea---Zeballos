import React, { useEffect, useState } from "react";
import ItemList from "../Item/ItemList"
import stockProducts from "../Data/Data.js"

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(stockProducts), 1000)
  });
}

export default function ItemListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setData(respuesta);
    });
  }, []);

  return (
    <ItemList data={data} />
  )
}