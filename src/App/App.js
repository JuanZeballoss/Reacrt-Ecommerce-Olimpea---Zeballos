import "../App/App.css"
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {CartProvider} from "../components/Store/cartContext"
import Cart from "../components/Cart/Cart"

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <CartProvider >
                        <NavBar />
                            <Routes>    
                                <Route path="/" element={<ItemListContainer />}/>                            
                                <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
                                <Route path="/category/:idCategory" element={<ItemListContainer />}/>
                                <Route path="/cart" element={<Cart />}/>
                            </Routes>        
                    </CartProvider>                     
                </BrowserRouter>
            </div>
        </>
    )
}
export default App;