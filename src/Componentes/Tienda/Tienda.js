import React, { useEffect, useState } from 'react'
import { TYPES } from '../Actions/shoppingActions'
import { shoppingReducer, shoppingInitialState } from '../shoppingReducer'
import { useReducer } from 'react'
import TiendaSinTACC from './TiendaSinTACC'
import Contacto from "../Contacto";
import Header from '../Header';
import "../styles/Tienda.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItem from '../Tienda/CartItem'
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

    //estado inicial
    const initialCartItem = {
        id: '',
        name: "",
        price: '',
        category: "",
        description: "",
        img: "",
        amount: ""
    }

    const [cartItem, setCartItem,] = useState(initialCartItem);

    //funciones del CRUD

    const createDataCart = async (data) => {
        addToCart(data.id);
        console.log(cart);
    }

    

    return (
        <>
            <div  >
                <Header />
            </div>
            <Container>
                <h1>Tienda Sin TACC</h1>
                <Row>
                    {
                        productos.map(productos => {
                            if (productos.category === "Sin TACC") {
                                return (
                                    <>
                                        <Col lg={4} md={6} sm={12}>
                                            <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} createDataCart={createDataCart} />
                                        </Col>
                                    </>
                                )
                            }
                        })
                    }
                </Row>
                <h1>Tienda Sin azucar</h1>
                <Row>
                    {
                        productos.map(productos => {
                            if (productos.category === "Sin Azúcar") {
                                return (
                                    <>
                                        <Col lg={4} md={6} sm={12}>
                                            <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} createDataCart={createDataCart} />
                                        </Col>
                                    </>
                                )
                            }
                        })
                    }
                </Row>
                <h1>Tienda Tradicional</h1>
                <Row>
                    {
                        productos.map(productos => {
                            if (productos.category === "Tradicional") {
                                return (
                                    <>
                                        <Col lg={4} md={6} sm={12}>
                                            <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} createDataCart={createDataCart} />
                                        </Col>
                                    </>
                                )
                            }
                        })
                    }
                </Row>
            </Container>

            <h3>Carrito</h3>
            <div className="box">
                {
                    cart.map((item, index) => (
                        <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
                    ))
                }
            </div>
            <button onClick={cleanCart}>Limpiar Carrito</button>


        </>

    )

}

export default Tienda
