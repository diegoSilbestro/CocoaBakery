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
        const cartURL = "http://localhost:8080/cart/verItems";
        const resCart = await axios.get(cartURL);
        const newCartItem = await resCart.data.items

        dispatch({ type: TYPES.READ_STATE, payload: [null, newCartItem] })
    }
    useEffect(() => {
        updateState();
    }, [])


    let cartItemQuantity = 0;
    cart.map(item => (cartItemQuantity = item.cantidad + cartItemQuantity));

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
