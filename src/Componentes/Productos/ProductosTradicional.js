import React from 'react';
import styles from '../styles/Productos.css'
import { Carousel } from 'react-bootstrap';

function ProductosTradicional() {
    return (
        <>
        <h1>Productos tradicionales</h1>
        <div className='container-card2' style={styles}>
                <div class="card">
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
                    <div class="card-body">
                        <h5 class="card-title">Tradicionales</h5>
                        <ul class="card-text">
                            <li>Torta Rogel</li>
                            <li>Macarons</li>
                            <li>Chocotorta</li>
                            <li>Facturas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductosTradicional;