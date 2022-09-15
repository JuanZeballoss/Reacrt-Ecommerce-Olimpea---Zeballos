import React, { useState } from "react";

function ItemCount ({initial, stock, onAdd}) {

    const [clicks, setClicks] = useState(1)

    const sumar = () => {         
        clicks === stock ? console.log("No puedes agregar mas productos") : setClicks(clicks+1);} 
    
    const restar = () => {        
        clicks === initial ? console.log("No puedes seleccionar menos de 1") : setClicks(clicks-1);
        }    

    const handleClicks = () => {
        onAdd(clicks)
    }

    return (
        <>
            <div className="container">    
                <div className="row">    
                    <button  className="btn btn-danger btn-sm col-1 position-absolute start-0 ms-5" onClick= {restar} >-</button>
                    <button  className="btn btn-success btn-sm col-1 position-absolute end-0 me-5" onClick= {sumar} >+</button>
                    <h3 className="col-10 mx-auto">Cantidad: {clicks}</h3>
                    <button className="btn btn-primary mt-4" onClick={handleClicks}>AGREGAR AL CARRITO</button>            
                </div>
            </div>
        </>
    )
    }
export default ItemCount;