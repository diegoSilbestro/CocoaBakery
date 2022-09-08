import React, { useEffect } from 'react'
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
            </div> <br/> <br/><br/><br/>
            <Container>
                <h1>Tienda Sin TACC</h1>
                <Row>
                    {
                        productos.map(productos => {
                            if (productos.category === "Sin TACC") {
                                return (
                                    <>
                                        <Col lg={4} md={6} sm={12}>
                                            <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} />
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
                                            <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} />
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
                                            <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} />
                                        </Col>
                                    </>
                                )
                            }
                        })
                    }
                </Row>
            </Container>

            {/* <div className="grid-responsive">

                {
                    productos.map(productos => {
                        if (productos.category === "Sin TACC") {
                            return (

                                <div className='product'>
                                    <>
                                        <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} />
                                    </>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="grid-responsive">
                <h1>Tienda Sin azucar</h1>
                {
                    productos.map(productos => {
                        if (productos.category === "Sin Azúcar") {
                            return (

                                <div className='product'>
                                    <>
                                        <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} />
                                    </>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="grid-responsive">
                <h1>Tienda Tradicional</h1>
                {
                    productos.map(productos => {
                        if (productos.category === "Tradicional") {
                            return (

                                <div className='product'>
                                    <>
                                        <TiendaSinTACC key={productos.id} data={productos} addToCart={addToCart} />
                                    </>
                                </div>
                            )
                        }
                    })
                }
            </div> */}


        </>

    )

}

export default Tienda
