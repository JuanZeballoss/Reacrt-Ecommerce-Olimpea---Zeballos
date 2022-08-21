import "../App/App.css"
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { createContext } from "react"

export const userContext = createContext({username: 'juanma'})

const UserContextProvider = userContext.Provider



function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <UserContextProvider value={ {username: `Juanma`}}>
                        <NavBar />
                            <Routes>    
                                <Route path="/" element={<ItemListContainer />}/>                            
                                <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
                                <Route path="/category/:idCategory" element={<ItemListContainer />}></Route>
                            </Routes>        
                    </UserContextProvider>                     
                </BrowserRouter>
            </div>
        </>
    )
}
export default App;