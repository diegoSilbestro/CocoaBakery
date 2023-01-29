import React, { useEffect} from "react";
import { TYPES } from '../Actions/shoppingActions'
import { shoppingReducer, shoppingInitialState } from '../shoppingReducer'
import { useReducer } from 'react'
import ProductosSinAzucar from "../Productos/ProductosSinAzucar";
import ProductosSinTacc from "../Productos/ProductosSinTacc";
import ProductosTradicional from "../Productos/ProductosTradicional";
import Contacto from "../Footer/Contacto";
import '../styles/Inicio.css';
import Header from "./Header";
import Home from './Home'
import Footer from "../Footer/Footer";
import axios from "axios"

function Inicio() {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { cart } = state;
    const updateState = async () => {
        const productsURL = "http://localhost:5000/productos";
        const cartURL = "http://localhost:5000/cart";
        const resProducts = await axios.get(productsURL);
        const resCart = await axios.get(cartURL);
        const newProduct = await resProducts.data
        const newCartItem = await resCart.data

        dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] })
    }
    useEffect(() => {
        updateState();
    }, [])


    let cartItemQuantity = 0;
    cart.map(item => (cartItemQuantity = item.cantidad + cartItemQuantity));
    console.log(cartItemQuantity);

    return (

        <div >
            <div  >
                <Header cartItemQuantity={cartItemQuantity}/>
            </div>
            <div className="inicio">
                <Home/>
                <ProductosSinTacc />
                <ProductosSinAzucar />
                <ProductosTradicional />
                <Contacto />
                <Footer />
            </div>
        </div>

    );
}

export default Inicio;
