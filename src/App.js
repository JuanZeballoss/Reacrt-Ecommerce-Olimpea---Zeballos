import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card/Card";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App () {

    return (
        <>
        <div>
        <NavBar /> 
        <br />        
        <Card 
            name="LABIAL NEGRO"
            price= "5000"
            stock= "5"
            img= "https://picsum.photos/150/150"
            description= "Un secreto para que el labial te quede perfecto, es que una vez que lo apliques, te pases por todo el perímetro delineador negro. Ya sé que es difícil conseguir o tener delineador de labios negro, pero no te preocupes, ¡pues puedes usar el de ojos!"
        />      
        <ItemListContainer text="Ver Carrito"/>         
        </div></>
    )
}

export default App;
