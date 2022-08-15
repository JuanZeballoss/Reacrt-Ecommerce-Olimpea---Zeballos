import stockProducts from "../Data/Data"

function getProductos () {    
        try{       
            return new Promise ((resolve) => {
                setTimeout(() => {
                    resolve(stockProducts)
                }, 100)
                
            })} catch (err) {
                console.log(err)
            }
    } 
   

export default getProductos
