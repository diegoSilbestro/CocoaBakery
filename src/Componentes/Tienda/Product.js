import React from 'react'


const Product = ({data, addToCart}) => {

const {id, name, price, category, description, img}= data;
console.log(data);
  return (
    <div className='product'>
        <h4>{name}</h4>
        <h5>{price}</h5>
        {console.log(name, price)}
        <img src={img} alt='producto' />        
        <button onClick={() => addToCart(id)}>Agregar</button> 
    </div>
  )
}

export default Product