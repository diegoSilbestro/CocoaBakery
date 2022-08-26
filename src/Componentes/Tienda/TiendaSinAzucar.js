import React from 'react';
import ItemCount from '../Count';
import style from '../styles/Tienda-productos.css'

function TiendaSinAzucar() {
    return (
        <>
            <h1>Tienda Sin Azucar</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4" style={style}>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/mouse-yogurt.jpg')} className="card-img-top" alt="mousse de yogurt bajo en azucares"/>
                            <div className="card-body">
                                <h5 className="card-title">Mousse de Yogurt</h5>
                                <p className="card-text">Esta mousse de yogurt esta compuesta por un yogurt griego exquisito bajo en azucares y ademas es super cremoso</p>
                               <ItemCount stock={20} initial={1}/>
                                <h6>$1000</h6>
                                <a href="#" class="myButton">Comprar</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/mousse-chocolate.jpg')} className="card-img-top" alt="mousse de chocolate bajo en azucares"/>
                            <div className="card-body">
                                <h5 className="card-title">Mousse de chocolate</h5>
                                <p className="card-text">Esta mousse de yogurt esta compuesta por un chocolate exquisito bajo en azucares y ademas es super cremoso</p>
                                <ItemCount stock={20} initial={1}/>
                                <h6>$1000</h6>
                                <a href="#" class="myButton">Comprar</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/carrot-cake.jpg')} className="card-img-top" alt="torta de zanahoria bajo en azucares"/>
                            <div className="card-body">
                                <h5 className="card-title">Carrot cake</h5>
                                <p className="card-text">El pastel de zanahoria, tarta de zanahoria o torta de zanahoria es un pastel dulce con zanahoria machacada mezclada en la masa.</p>
                                <ItemCount stock={20} initial={1}/><br/>
                                <h6>$1000</h6>
                                <a href="#" class="myButton">Comprar</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/devil-cake.jpg')} className="card-img-top" alt="torta de matilda o todo de chocolate bajo en azucares"/>
                            <div className="card-body">
                                <h5 className="card-title">Devil cake</h5>
                                <p className="card-text"> Esta Devil Cake es un imperdible para los amantes del chocolate! Tierna y húmeda cubierta con crema de chocolate</p>
                                <ItemCount stock={20} initial={1}/>
                                <h6>$1000</h6>
                                <a href="#" class="myButton">Comprar</a>
                            </div>
                    </div>
                </div>
            </div>
        </>);
}

export default TiendaSinAzucar;