import { Link } from "react-router-dom";
import "./Cart.css"

function CartWidget ({imgUrl}){
return(
<div>
<Link to="/cart"></Link>
<img src={imgUrl} width="40px" className="cart" />
</div>
)
}
export default CartWidget;