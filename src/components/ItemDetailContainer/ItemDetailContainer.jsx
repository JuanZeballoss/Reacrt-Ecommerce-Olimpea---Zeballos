import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import firestoreDB from "../../services/fireBase"
import { getDoc, collection, doc } from "firebase/firestore"

function getProductosId(id) {
  return new Promise((resolve, reject) => {
    const idRef = collection(firestoreDB, "MakeUp")
    const docRef = doc(idRef, id)
    getDoc(docRef).then(snapshot => {
      resolve(
        { ...snapshot.data(), id: snapshot.id }
      )
    })
  })
}


function ItemDetailContainer() {

  const idURL = useParams().id;
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductosId(idURL).then((respuesta) => {
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