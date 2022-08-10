import "./App.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.jsx";

function App() {

    return (
        <>
            <div>
                <NavBar />
                <br />
                <ItemListContainer />
                <br/>
                <ItemDetailContainer />
            </div>
        </>
    )
}
export default App;