import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Store/cartContext";
import "./Cart.css";

function CartWidget({ imgUrl }) {
  const { cart } = useContext(cartContext);
  return (
    <div>
      <Link to={`/cart`}>
        <img src={imgUrl} width="40px" className="cart" alt="" />
      </Link>
      {cart.length === 0 ? (
        <div></div>
      ) : (
        <div className="quantity"> {cart.length}</div>
      )}
    </div>
  );
}
export default CartWidget;
