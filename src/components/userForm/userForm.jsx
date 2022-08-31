import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import { cartContext } from "../Store/cartContext"
import { useState } from "react";
import firestoreDB from "../../services/fireBase";
import { Link } from "react-router-dom"
 
function UserForm ({cart}) {

    const {deleteCart, MySwal} = useContext(cartContext)

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    })

    const ordenDeCompra = {
        buyer: {...userData},
        items: [...cart],
        total: 0,
        date: new Date(),
    }

    async function handleSubmit (evt) {
        evt.preventDefault()
        const collectionRef = collection(firestoreDB, "orders")
        const docRef = await addDoc(collectionRef, ordenDeCompra)
        deleteCart() 
        MySwal()         
        handleReset() 
    }

    function inputChangeHandler(e) {
        const prop = e.target.name;
        const value = e.target.value;
        setUserData((prevState) => ({...prevState, [prop]: value}))
      }

    function handleReset (evt) {
        setUserData({
            name: "",
            email: "",
            telefono:"",
        })
    } 

    return (
        <>
            <form onReset={handleReset} onSubmit={handleSubmit} className="w-25  ">
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input name="email" className="form-control"  value={userData.email} onChange= { inputChangeHandler }/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input name="name" className="form-control" value={userData.name} onChange={ inputChangeHandler }/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="telefono">Phone</label>
                    <input name="telefono" className="form-control" onChange={ inputChangeHandler } value={userData.telefono}/>
                </div>

                <div className="mb-3 form-check">
                    <input name="checkbox" className="form-check-input" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Enviar datos de compra</button>
                <Link to={`/`}>
                <button type="" className="btn btn-success">Seguir comprando</button>
                </Link>
            </form>
        </>
    )
}

export default UserForm