import "../App/App.css"
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                <NavBar />
                    <Routes>    
                        <Route path="/" element={<ItemListContainer />}/>                            
                        <Route path="/detalle" element={<ItemDetailContainer id={3}/>}/>
                    </Routes>
                
                
                {/* <br />
                <ItemListContainer />
                <br/> */}
                {/* <ItemDetailContainer id={3} /> */}
                {/* <Footer /> */}
                </BrowserRouter>
            </div>
        </>
    )
}
export default App;