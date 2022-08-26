import React from 'react';
import ItemCount from '../Count';
import style from '../styles/Tienda-productos.css'

function TiendaTradicional() {
    return (
        <>
            <h1>Tienda tradicional</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4" style={style}>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/Rogel.jpg')} className="card-img-top" alt="torta rogel" />
                        <div className="card-body">
                            <h5 className="card-title">Torta Rogel</h5>
                            <p className="card-text">Rogel con las capas de masa casera, dulce de leche y un hermoso y brillante merengue italiano!</p>
                            <ItemCount stock={20} initial={1} />
                            <h6>$1000</h6>
                            <a href="#" class="myButton">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/macarons.avif')} className="card-img-top" alt="macarons" />
                        <div className="card-body">
                            <h5 className="card-title">Macarons</h5>
                            <p className="card-text">Un macarron o macaron es un tipo de galleta tradicional de la gastronomía francesa e italiana</p>
                            <ItemCount stock={20} initial={1} />
                            <h6>$1000</h6>
                            <a href="#" class="myButton">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/chocotorta.jpg')} className="card-img-top" alt="chocotorta" />
                        <div className="card-body">
                            <h5 className="card-title">Chocotorta</h5>
                            <p className="card-text">La chocotorta es un postre originario de Argentina. Con el lanzamiento en 1975 por Bagley</p>
                            <ItemCount stock={20} initial={1} /><br />
                            <h6>$1000</h6>
                            <a href="#" class="myButton">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/facturas.jpg')} className="card-img-top" alt="facturas argentinas" />
                        <div className="card-body">
                            <h5 className="card-title">Facturas</h5>
                            <p className="card-text">Facturas es el nombre genérico con el cual se denomina en Argentina a la variedad de masas y piezas de confitería</p>
                            <ItemCount stock={20} initial={1} />
                            <h6>$1000</h6>
                            <a href="#" class="myButton">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TiendaTradicional;