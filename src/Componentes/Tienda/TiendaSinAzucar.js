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
                                <p className="card-text">Esta mousse de yogurt esta compuesta po</p>
                               <ItemCount stock={20} initial={1}/>
                                <p>$1000</p>
                                <button>Comprar</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/mousse-chocolate.jpg')} className="card-img-top" alt="mousse de chocolate bajo en azucares"/>
                            <div className="card-body">
                                <h5 className="card-title">Mousse de chocolate</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <ItemCount stock={20} initial={1}/>
                                <p>$1000</p>
                                <button>Comprar</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/carrot-cake.jpg')} className="card-img-top" alt="torta de zanahoria bajo en azucares"/>
                            <div className="card-body">
                                <h5 className="card-title">Carrot cake</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <ItemCount stock={20} initial={1}/><br/>
                                <p>$1000</p>
                                <button>Comprar</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/devil-cake.jpg')} className="card-img-top" alt="torta de matilda o todo de chocolate bajo en azucares"/>
                            <div className="card-body">
                                <h5 className="card-title">Devil cake</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <ItemCount stock={20} initial={1}/>
                                <p>$1000</p>
                                <button>Comprar</button>
                            </div>
                    </div>
                </div>
            </div>
        </>);
}

export default TiendaSinAzucar;