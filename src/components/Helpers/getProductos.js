// import stockProducts from "../Data/Data"
import { getDocs, collection, query, where } from "firebase/firestore"
// import { useState } from "react"
// import { useEffect } from "react"
import firestoreDB from "../../services/fireBase"




function getProductos (idURL) {    
            
    return new Promise ((resolve) => {
        if (idURL) {
                const MakeUpCollection = collection(firestoreDB, "MakeUp")
                const q = query(MakeUpCollection, where("id", "==", idURL))
                getDocs(q).then(snapshot => {

                    const docsData = snapshot.docs.map(doc => {

                        return{ ...doc.data(), id: doc.id}})

                        resolve(docsData)})    

        } else {
            const MakeUpCollection = collection(firestoreDB, "MakeUp")
            getDocs(MakeUpCollection).then(snapshot => {

                const docsData = snapshot.docs.map(doc => {

                    return{ ...doc.data(), id: doc.id}})

                    resolve(docsData)})}             
    })
}   

export default getProductos



// import { getDocs, collection, snapshotEqual } from "firebase/firestore"
// import { useState } from "react"
// import { useEffect } from "react"
// import firestoreDB from "../../services/fireBase"

// const getProductos = () => {
//     return new Promise ((resolve) => {
//         const MakeUpCollection = collection(firestoreDB, "MakeUp")
//         getDocs(MakeUpCollection).then(snapshot => {
//             const docsData = snapshot.docs.map(doc => {
//                 return{ ...doc.data(), id: doc.id}
//             })
//             resolve(docsData)
//         })            
//     })
// }

// export default getProductos

