import stockProducts from "../Data/Data"


function getProductos (idURL) {    
        try{       
            return new Promise ((resolve) => {
                if (idURL) {
                    const devolver = stockProducts.find((prod) => prod.id ===+ idURL)
                    setTimeout(() => {                        
                    resolve(devolver)
                    }, 1000)                    
                } else {
                    setTimeout(() => {                        
                    resolve(stockProducts)
                    }, 1000)
                } 
            })} catch (err) {
                alert("No hay productos para mostrar")
                console.log(err)
            }
    } 
   

export default getProductos
