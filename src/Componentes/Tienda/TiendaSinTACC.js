
import React from 'react';
import '../styles/Tienda-productos.css'


function TiendaSinTACC({ data, addToCart }) {

    const { id, name, price, category, description, img } = data;

    return (
        <div>
            <div className="">
                <div className='carousel'>
                        <img src={img} className="card-img-top"  alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <h5>${price}</h5>
                        <button className='myButton' onClick={() => addToCart(id)}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TiendaSinTACC;