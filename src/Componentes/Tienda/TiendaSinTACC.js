import React from 'react';
import ItemCount from '../Count';

import style from '../styles/Tienda-productos.css'

function TiendaSinTACC() {
    return (
        <>
        <h1>Tienda sin TACC</h1> 
        <div className="row row-cols-1 row-cols-md-2 g-4" style={style}>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/lemon.jpg')} className="card-img-top" alt="lemon pie"/>
                            <div className="card-body">
                                <h5 className="card-title">Lemon Pie</h5>
                                <p className="card-text">La tarta de limón es una tarta formada por una base de masa quebrada u hojaldre que se rellena con crema de limón. </p>
                               <ItemCount stock={20} initial={1}/>
                               <h6>$1000</h6>
                                <a href="#" class="myButton">Comprar</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/brownies.jpg')} className="card-img-top" alt="brownies"/>
                            <div className="card-body">
                                <h5 className="card-title">Brownie</h5>
                                <p className="card-text">El brownie es un bizcocho que no lleva levadura ni bicarbonato, por lo que queda compacto, denso y cremoso a la vez. .</p>
                                <ItemCount stock={20} initial={1}/>
                                <h6>$1000</h6>
                                <a href="#" class="myButton">Comprar</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/tiramisu.jfif')} className="card-img-top" alt="tiramisu"/>
                            <div className="card-body">
                                <h5 className="card-title">Tiramisú</h5>
                                <p className="card-text">El tiramisú es un pastel frío que se monta en capas.</p>
                                <ItemCount stock={20} initial={1}/><br/>
                                <h6>$1000</h6>
                                <a href="#" class="myButton">Comprar</a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/cheesecake.jpg')} className="card-img-top" alt="cheessecake"/>
                            <div className="card-body">
                                <h5 className="card-title">Chesscake</h5>
                                <p className="card-text">Chesscake es un postre hecho a base de ciertos ingredientes</p>
                                <ItemCount stock={20} initial={1}/>
                                <h6>$1000</h6>
                                <a href="#" class="myButton">Comprar</a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TiendaSinTACC;
