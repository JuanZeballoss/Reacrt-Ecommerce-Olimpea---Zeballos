import React, { useContext } from "react";
import { cartContext } from "../Store/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteCart, deleteProd } =
    useContext(cartContext); 

  return (
    <div >
      {cart.length ===+ 0 ? (
        <div>
          <h2 className="tittlePage">NO HAY PRODUCTOS EN EL CARRITO</h2>
          <Link to="/" className="text-decoration-none">
            <button className="btn btn-secondary d-grid gap-2 col-6 mx-auto my-4">VOLVER AL MENU A REALIZAR UN COMPRA</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="tittlePage">Carrito</h2>
          {cart.map((item) => {
            const valorTotal = item.price * item.quantity;
            return (
              <div className="card" key={item.id}>
                <img src={item.img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title">Categoria: {item.category}</h5>
                  <h5 className="card-title">Cantidad: {item.quantity}</h5>    
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="trashCan"
                    onClick={() => deleteProd(item.id)}
                  />
                  <h3>Total: ${valorTotal} </h3>
                </div>
              </div>
            );
          })}
          <h2 className="tittlePage">
        TOTAL CARRITO: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h2>
      <button onClick={deleteCart} className="btn btn-danger d-grid gap-2 col-6 mx-auto my-4 ">
        VACIAR CARRITO
      </button>
      <Link to="/Payment" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <button className="btn btn-success d-grid gap-2 col-6 mx-auto" >
          FINALIZAR COMPRA
        </button>
      </Link>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <button className="btn btn-primary d-grid gap-2 col-6 mx-auto my-4">SEGUIR COMPRANDO</button>
      </Link>
        </div>
        
      )}
      
      
    </div>
  );
};

export default Cart;
