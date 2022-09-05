import React from 'react';
import '../styles/Tienda-productos.css'

function TiendaSinTACC({ productItems }) {
    return (
        <div>
            <h1>Tienda Sin TACC</h1>
            {productItems.map((productItems) => {
                return (
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                            <div className='carousel'>
                                <img src={productItems.img} className="card-img-top" alt={productItems.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{productItems.name}</h5>
                                    <p className="card-text">{productItems.description}</p>
                                    <h6>${productItems.price}</h6>
                                    <button class="myButton">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )

            })}
        </div>
    );
}

export default TiendaSinTACC;
