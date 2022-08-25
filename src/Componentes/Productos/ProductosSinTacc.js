import React from 'react';
import styles from '../styles/Productos.css'
import Carousel from 'react-bootstrap/Carousel';

function ProductosSinTacc() {
    return (
        <>
            <h1>Productos sin TACC</h1>
            <div className='container-card2'style={styles}>
                <div class="card" >
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../../img/img4.jpg')}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../../img/img5.jpg')}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../../img/img6.jpg')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div class="card-body">
                        <h5 class="card-title">Sin Tacc</h5>
                        <ul class="card-text">
                            <li>Lemon Pie</li>
                            <li>Brownie</li>
                            <li>Tiramisú</li>
                            <li>Chesscake</li>
                            <li>Tarta de Manzana</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>);
}

export default ProductosSinTacc;
