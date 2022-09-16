import React from 'react';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import Nosotros from '../About Us/Nosotros';
import styles from './styles/Home.css'

const Home = () => {
  return (
    <>
        <div id='home' style={styles}>
            <h1>Bienvenido a Cocoa Bakery!</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100 min-vh-100 carousel-img" id='img' alt="imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100 carousel-img" id='img' alt="imagen 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 carousel-img" id='img' alt="imagen 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <Nosotros/>
        </>
    );
}
  

export default Home