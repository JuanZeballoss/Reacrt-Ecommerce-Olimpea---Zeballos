import UserForm from "../userForm/userForm"
import React, { useContext } from "react";
import { cartContext } from "../Store/cartContext";

function Payment  () {
    const {cart} = useContext(cartContext)
    return(
    <>
    <UserForm cart={cart} />
    </>
    )
}

export default Payment
