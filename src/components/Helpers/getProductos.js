import stockProducts from "../Data/Data"

function getProductos () {
    try{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(stockProducts)
        }, 2000)
    })} catch (err) {
        console.log(err)
    }
}

export default getProductos;
