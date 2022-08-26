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
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                               <ItemCount stock={20} initial={1}/>
                                <p>$1000</p>
                                <button>Comprar</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/brownies.jpg')} className="card-img-top" alt="brownies"/>
                            <div className="card-body">
                                <h5 className="card-title">Brownie</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <ItemCount stock={20} initial={1}/>
                                <p>$1000</p>
                                <button>Comprar</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/tiramisu.jfif')} className="card-img-top" alt="tiramisu"/>
                            <div className="card-body">
                                <h5 className="card-title">Tiramisú</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <ItemCount stock={20} initial={1}/><br/>
                                <p>$1000</p>
                                <button>Comprar</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/cheesecake.jpg')} className="card-img-top" alt="cheessecake"/>
                            <div className="card-body">
                                <h5 className="card-title">Chesscake</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <ItemCount stock={20} initial={1}/>
                                <p>$1000</p>
                                <button>Comprar</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TiendaSinTACC;
