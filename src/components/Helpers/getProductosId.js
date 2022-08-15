import stockProducts from "../Data/Data"

function getProductosId (id) {    
        try{       
            return new Promise ((resolve) => {
                if (stockProducts === 0) {
                    setTimeout(() => {
                        alert("No hay productos para mostrar")
                    }, 100)
                } else {
                    const devolver = stockProducts.find((prod) => prod.id === (id))
                    setTimeout(() => {                        
                    resolve(devolver)
                    }, 100)
                }               
                
            })} catch (err) {
                console.log(err)
            }
    } 
   

export default getProductosId
