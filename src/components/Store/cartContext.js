import React, { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    function addToCart (item, quantity) {    
        
        if (isInCart(item.id)) {  
            alert(`Ya cuentas con este producto en el carrito`);
        }     
        else{
            let copyCart = [...cart];
            copyCart.push({...item, quantity: quantity});
            setCart(copyCart) ;            
        }
        
    } 
    console.log(cart)
    function isInCart (id) {
        return (
            cart.some(itemInCart => itemInCart.id ===+ id)
        )
    }

    return (
        <cartContext.Provider value = {{cart, addToCart}} >
            {children}
        </cartContext.Provider>
    )
}