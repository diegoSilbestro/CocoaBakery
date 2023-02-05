import React from 'react';
import '../styles/Productos.css'
import { Carousel } from 'react-bootstrap';

function ProductosTradicional() {
    return (

        <>
            <div className="container-tradicional">
                <h1 className="producto-" id='ProductosTradicional'>Productos Tradicionales</h1>
                <div className='container-card2'>
                    <div className="card">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../img/img7.jpg')}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../img/img8.jpg')}
                                    alt="Second slide"
                                 />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../img/img9.jpg')}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <div className="card-body">
                            <h5 className="card-title">Tradicionales</h5>
                            <ul className="card-text">
                                <li>Torta Rogel</li>
                                <li>Macarons</li>
                                <li>Chocotorta</li>
                                <li>Facturas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductosTradicional;