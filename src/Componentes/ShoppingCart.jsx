import React, { useEffect } from 'react'
import { TYPES } from './Actions/shoppingActions'
import { shoppingReducer, shoppingInitialState } from './shoppingReducer'
import { useReducer } from 'react'
import CartItem from './Cart/CartItem'
import axios from "axios"
import Header from './Header/Header'
import './styles/ShoppingCart.css'


const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { cart } = state;

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
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
        }
    }

    const cleanCart = async () => {
        dispatch({ type: TYPES.CLEAN_CART })
    }

    let cartItemQuantity = 0;
    cart.map(item => (cartItemQuantity = item.cantidad + cartItemQuantity));

    let visibility = "";
    cartItemQuantity === 0? visibility = "visible" : visibility = "hidden"


    return (
        <div className="box">
            <Header cartItemQuantity={cartItemQuantity} />
            <hr /><hr /><hr />
            <h1>Carrito de Compras</h1>
            <h2 className={visibility}>Todavía no tenes productos en tu carrito!!!!</h2>
            {cart.map((item, index) => (
                <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />

            ))}


            <button className='btn-cleanCart' onClick={cleanCart}>Limpiar Carrito</button>
        </div>
    )
}

export default ShoppingCart

