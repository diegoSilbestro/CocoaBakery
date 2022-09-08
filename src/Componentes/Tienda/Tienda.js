import React, { useEffect } from 'react'
import { TYPES } from '../Actions/shoppingActions'
import { shoppingReducer, shoppingInitialState } from '../shoppingReducer'
import { useReducer } from 'react'
import TiendaSinAzucar from './TiendaSinAzucar'
import TiendaSinTACC from './TiendaSinTACC'
import TiendaTradicional from './TiendaTradicional'
import Contacto from "../Contacto";
import Header from '../Header';
import Product from './Product'
import "../styles/ShoppingCart.css"
import axios from "axios"


const Tienda = () => {



    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { productos, cart } = state;

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
        updateState();
    }, [])


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
            <div  >
                <Header />
            </div>
            <div className="grid-responsive">
                <h1>Tienda Sin TACC</h1>
                {

                    productos.map(productos => {
                        return (
                            <div className='product'>
                                <>

                                    <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} />
                                </>
                            </div>
                        )
                    })

                }
            </div>
        </>

    )





    // return (
    //     <>
    //         <div  >
    //             <Header />
    //         </div>
    //         <div>
    //             {console.log(data)}
    //             <TiendaSinTACC productItems={data} />
    //             <TiendaSinAzucar productItem={data} />
    //             <TiendaTradicional products={data} />

    //             <Contacto />
    //         </div>
    //     </>
    // )
}

export default Tienda

// destructuracion de props en Tienda
// productItems,productItem,products