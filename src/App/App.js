import "../App/App.css"
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {CartProvider} from "../components/Store/cartContext"
import Cart from "../components/Cart/Cart.js"
import Payment from "../components/payment/payment";

function App() {
    return (
        <div className="background">          
            <div>
                <BrowserRouter>
                    <CartProvider >
                        <NavBar />
                            <Routes>    
                                <Route path="/" element={<ItemListContainer />}/>                            
                                <Route path="/:id" element={<ItemDetailContainer />}/>
                                <Route path="/category/:idCategory" element={<ItemListContainer />}/>
                                <Route path="/cart" element={<Cart />}/>
                                <Route path="/payment" element={<Payment />}/>
                            </Routes> 
                    </CartProvider>                     
                </BrowserRouter>
            </div>
        </div>
    )
}
export default App;