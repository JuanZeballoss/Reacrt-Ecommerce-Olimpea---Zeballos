import "../App/App.css"
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import stockProducts from "../components/Data/Data";

function App() {

    return (
        <>
            <div>
                <NavBar />
                <br />
                <ItemListContainer />
                <br/>
                <ItemDetailContainer id={stockProducts.find((prod) => prod.id === (3))} />
            </div>
        </>
    )
}
export default App;