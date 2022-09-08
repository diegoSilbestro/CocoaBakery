
import React from 'react';
import '../styles/Tienda-productos.css'


function TiendaSinTACC({ data, addToCart }) {

    const { id, name, price, category, description, img } = data;

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className='carousel'>
                            <img src={img} className="card-img-top" alt={name} />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{description}</p>
                                <h6>${price}</h6>
                                <button onClick={() => addToCart(id)}>Agregar</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

           
        </div>
    );

}

export default TiendaSinTACC;