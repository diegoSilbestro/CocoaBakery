import React from 'react';
// import '../styles/ProductosSinAzucar.css';
import styles from '../styles/Productos.css';
import Carousel from 'react-bootstrap/Carousel';


function ProductosSinAzucar() {
    return (

        <>
            <div className="container-sinazucar">
                <h1 id='ProductosSinAzucar'>Productos Sin Azúcar</h1>
                <div className='container-card2' style={styles}>
                    <div class="card">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../img/img1.jpg')}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../img/img2.jpg')}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../img/img3.jpg')}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <div class="card-body">
                            <h5 class="card-title">Sin Azúcar</h5>
                            <ul class="card-text">
                                <li>Mousse de Yogurt </li>
                                <li>Mousse de chocolate</li>
                                <li>Carrot cake</li>
                                <li>Devil cake</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProductosSinAzucar;