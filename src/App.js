import "./App.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"

function App() {

    return (
        <>
            <div>
                <NavBar />
                <br />
                <ItemListContainer />
            </div>
        </>
    )
}

export default App;
