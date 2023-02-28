import React, { useEffect, useState } from 'react'
import { TYPES } from '../Actions/shoppingActions'
import { shoppingReducer, shoppingInitialState } from '../shoppingReducer'
import { useReducer } from 'react'
import ElementoTienda from './ElementoTienda'
import Header from '../Header/Header';
import "../styles/Tienda.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios"


const Tienda = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { productos, cart } = state;

    const updateState = async () => {

        const productsURL = "https://encouraging-calico-governor.glitch.me/products/verProductos";
        const cartURL = "https://encouraging-calico-governor.glitch.me/cart/verItems";
        const resProducts = await axios.get(productsURL);
        const resCart = await axios.get(cartURL);
        const newProduct = await resProducts.data.products;
        const newCartItem = await resCart.data.items;
        console.log(newProduct);

        dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] })
    }
    useEffect(() => {
        updateState();
    }, [])

    const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id })

    //let cartItemQuantity = 0;
    // cart.map(item => (cartItemQuantity = item.cantidad + cartItemQuantity));

    const [cartItemQuantity, setCartItemQuantity] = useState(0);
    useEffect(() => {
        // Variable de suma
        let sumaCantidad = 0;

        // Bucle para recorrer todos los elementos del array
        for (let i = 0; i < cart.length; i++) {
            // Comprobar si el elemento tiene la propiedad "cantidad"
            if (cart[i].cantidad !== undefined) {
                // Sumar el valor de la propiedad "cantidad" a la variable de suma
                sumaCantidad += cart[i].cantidad;
            }
        }

        // Mostrar la suma de las cantidades
        console.log("La suma de las cantidades es: " + sumaCantidad);
        setCartItemQuantity(sumaCantidad)
    }, [cart])

    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    }


    return (
        <>
            <div  >
                <Header cartItemQuantity={cartItemQuantity} />
            </div>
            <Container className='container'>
                <h1 id='TiendaSinTACC'>Tienda Sin TACC</h1>
                <Row key={generateKey('sinTACC')}>
                    {
                        productos.map(productos => {
                            if (productos.category === "Sin TACC") {
                                return (
                                    <>
                                        <Col lg={4} md={6} sm={12} key={generateKey('sinTACC')}>
                                            <ElementoTienda key={generateKey()} data={productos} addToCart={addToCart} />
                                        </Col>
                                    </>
                                )
                            }
                            return null;
                        })
                    }
                </Row>
                <h1 id='TiendaSinAzucar'>Tienda Sin Azúcar</h1>
                <Row key={generateKey('sinAzucar')}>
                    {
                        productos.map(productos => {
                            if (productos.category === "Sin Azúcar") {
                                return (
                                    <>
                                        <Col lg={4} md={6} sm={12} key={generateKey('sinAzucar')}>
                                            <ElementoTienda key={generateKey()} data={productos} addToCart={addToCart} />
                                        </Col>
                                    </>
                                )
                            }
                            return null;
                        })
                    }
                </Row>
                <h1 id='TiendaTradicional'>Tienda Tradicional</h1>
                <Row key={generateKey('tradicional')}>
                    {
                        productos.map(productos => {
                            if (productos.category === "Tradicional") {
                                return (
                                    <>
                                        <Col lg={4} md={6} sm={12} key={generateKey('tradicional')}>
                                            <ElementoTienda key={generateKey()} data={productos} addToCart={addToCart} />
                                        </Col>
                                    </>
                                )
                            }
                            return null;
                        })
                    }
                </Row>
            </Container>

        </>

    )

}

export default Tienda
