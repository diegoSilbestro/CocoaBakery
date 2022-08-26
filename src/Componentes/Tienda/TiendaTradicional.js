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
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <ItemCount stock={20} initial={1} />
                            <p>$1000</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/macarons.avif')} className="card-img-top" alt="macarons" />
                        <div className="card-body">
                            <h5 className="card-title">Macarons</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <ItemCount stock={20} initial={1} />
                            <p>$1000</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/chocotorta.jpg')} className="card-img-top" alt="chocotorta" />
                        <div className="card-body">
                            <h5 className="card-title">Chocotorta</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <ItemCount stock={20} initial={1} /><br />
                            <p>$1000</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../../img/facturas.jpg')} className="card-img-top" alt="facturas argentinas" />
                        <div className="card-body">
                            <h5 className="card-title">Facturas</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <ItemCount stock={20} initial={1} />
                            <p>$1000</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TiendaTradicional;