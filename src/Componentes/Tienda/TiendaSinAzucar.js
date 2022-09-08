
import React from 'react';
import '../styles/Tienda-productos.css'

function TiendaSinAzucar({ productItem }) {
    return (
        <>
            <h1>Tienda Sin Azucar</h1>
            {
                productItem.map((productItem) => {
                    return (
                       
                            <div className="card">
                                <div className='carousel'>
                                    <img src={productItem.img} className="card-img-top" alt={productItem.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{productItem.name}</h5>
                                        <p className="card-text">{productItem.description}</p>
                                        <h6>${productItem.price}</h6>
                                        <button class="myButton">Comprar</button>
                                    </div>
                                </div>
                            </div>
                      
                    )

                })}
        </>
    );

}

export default TiendaSinAzucar;




