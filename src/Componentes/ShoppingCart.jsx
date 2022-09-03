import React from 'react'
import { TYPES } from './Actions/shoppingActions'
import { shoppingReducer, shoppingInitialState } from './shoppingReducer'
import { useReducer } from 'react'
import Product from './Tienda/Product'
import CartItem from './Tienda/CartItem'
import "./styles/ShoppingCart.css"

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { productos, cart } = state;

    const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id })

    const deleteFromCart = (id, all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
        }
    }
    const cleanCart = () => dispatch({ type: TYPES.CLEAN_CART })

    return (
        <>
            <h2>Carrito de Compras</h2>
            <h3>Productos </h3>
            <div className="grid-responsive">
                {
                    productos.map(productos => <Product key={productos.id} data={productos} addToCart={addToCart} />)
                }
            </div>
            <h3>Carrito</h3>
            <div className="box">
                {cart.map((item, index) => (
                    <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
                ) )}
            </div>
            <button onClick={cleanCart}>Limpiar Carrito</button>
        </>
    )
}


export default ShoppingCart

