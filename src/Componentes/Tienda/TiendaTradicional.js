
import React from 'react';
import '../styles/Tienda-productos.css'

function TiendaTradicional({ products }) {
    return (
        <>
            <h1>Tienda tradicional</h1>
            {
                products.map((products) => {
                    return (
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                <div className='carousel'>
                                    <img src={products.img} className="card-img-top" alt={products.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{products.name}</h5>
                                        <p className="card-text">{products.description}</p>
                                        <h6>${products.price}</h6>
                                        <button class="myButton">Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </>
    );

}

export default TiendaTradicional;