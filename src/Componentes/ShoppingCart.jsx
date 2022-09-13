
import React, { useEffect } from 'react'
import { TYPES } from './Actions/shoppingActions'
import { shoppingReducer, shoppingInitialState } from './shoppingReducer'
import { useReducer } from 'react'
import Product from './Tienda/Product'
import CartItem from './Tienda/CartItem'

import axios from "axios"
import Tienda from "./Tienda/Tienda"
import Header from './Header'


const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { productos, cart, method, endpoint, cartUpdate } = state;

    const updateState = async () => {
        const productsURL = "http://localhost:5000/productos";
        const cartURL = "http://localhost:5000/cart";
        const resProducts = await axios.get(productsURL),
            resCart = await axios.get(cartURL);
        const newProduct = await resProducts.data
        const newCartItem = await resCart.data

        dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] })
    }
    useEffect(() => {
        updateState()
    }, [])

    const deleteFromCart = async (id, all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
            let options = {
                method: method,
                headers: { "content-type": "application/json" }
            };
    
            let res = await axios(endpoint, options)
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
            let options = {
                method: method,
                headers: { "content-type": "application/json" },
                data: JSON.stringify(cartUpdate)
            };

            let res = await axios(endpoint, options)
        }
    }



    const cleanCart = async () =>{
        dispatch({ type: TYPES.CLEAN_CART })
        cart.map (item => {
            let endpoint = `http://localhost:5000/cart/${item.id}`;
            let options = {
                method: "DELETE",
                headers: { "content-type": "application/json" }
            };
    
            let res =  axios(endpoint, options)
        })
    } 

    let cartItemQuantity = 0;
    cart.map(item => (cartItemQuantity = item.cantidad + cartItemQuantity));
    console.log(cartItemQuantity);

    return (
        <>
            <Header cartItemQuantity={cartItemQuantity} />

            <h1>Carrito de compras</h1>
            <div className="box">
                {cart.map((item, index) => (
                    <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />

                ))}

            </div>
            <button onClick={cleanCart}>Limpiar Carrito</button>
        </>
    )
}

export default ShoppingCart

