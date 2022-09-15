import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import { cartContext } from "../Store/cartContext"
import { useState } from "react";
import firestoreDB from "../../services/fireBase";
import { Link } from "react-router-dom"
 
function UserForm ({cart}) {
    const [orderId, setOrderId] = useState(false)

    const {deleteCart, MySwal} = useContext(cartContext)

    let total = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    })

    const ordenDeCompra = {
        buyer: {...userData},
        items: [...cart],
        total: total,
        date: new Date(),
    }

    async function handleSubmit (evt) {
        evt.preventDefault()
        const collectionRef = collection(firestoreDB, "orders")
        const docRef = await addDoc(collectionRef, ordenDeCompra)
        setOrderId(docRef.id)
        deleteCart() 
        MySwal()         
        handleReset() 
    }

    if(orderId) {
        return(
            <div>
                <h2 className="tittlePage">GRACIAS POR TU COMPRA</h2>
                <h5 className="tittlePage">Tu id de seguimiento de tu compra es: {orderId}</h5>
            </div>
        )
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
            <h2 className="tittlePage">DEJANOS TUS DATOS PARA PODER ENVIARTE TUS PRODUCTOS</h2>
            <form onReset={handleReset} onSubmit={handleSubmit} className="row g-3 w-50 m-auto">
                <div className=" form-floating mb-3">
                    <input name="email" type="text" className="form-control" id="floatingName" placeholder="Email" value={userData.email} onChange= { inputChangeHandler }/>
                    <label  for="floatingName" htmlFor="email">Email address</label>
                    
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="form-floating mb-3">
                <input name="name" className="form-control" id="floatingName" type="text" placeholder="Nombre" value={userData.name} onChange={ inputChangeHandler }/>
                    <label htmlFor="name" for="floatingName">Nombre</label>
                    
                </div>

                <div className="form-floating mb-3">
                <input name="telefono" className="form-control" id="floatingName" placeholder="Celular" onChange={ inputChangeHandler } value={userData.telefono}/>
                    <label for="floatingName" htmlFor="telefono">Celular</label>
                    
                </div>                
                <button type="submit" className="btn btn-primary d-grid gap-2 col-6 mx-auto " onSubmit={handleSubmit}>Enviar datos de compra</button>
                <Link to={`/`} className="text-decoration-none">
                <button type="" className="btn btn-success d-grid gap-2 col-6 mx-auto ">Seguir comprando</button>
                </Link>
            </form>
        </>
    )
}

export default UserForm