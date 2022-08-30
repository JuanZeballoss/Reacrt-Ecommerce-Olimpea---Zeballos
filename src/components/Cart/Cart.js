import React, { useContext } from "react";
import { cartContext } from "../Store/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteCart, deleteProd, finalizarCompra } =
    useContext(cartContext); 

  return (
    <div>
      {cart.lenght ===+ 0 ? (
        <div>
          <h2>No hay productos en el carrito</h2>
          <Link to="/">
            <button className="seguirComprandoo">SEGUIR COMPRANDO</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2>Carrito</h2>
          {cart.map((item) => {
            const valorTotal = item.price * item.quantity;
            return (
              <div className="card">
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
        </div>
      )}
      <h2>
        TOTAL CARRITO: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h2>
      <button onClick={deleteCart} className="clearCart">
        VACIAR CARRITO
      </button>
      <Link to="/payment" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <button className="verCarrito" onClick={finalizarCompra}>
          FINALIZAR COMPRA
        </button>
      </Link>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <button className="seguirComprandoo">SEGUIR COMPRANDO</button>
      </Link>
    </div>
  );
};

export default Cart;
