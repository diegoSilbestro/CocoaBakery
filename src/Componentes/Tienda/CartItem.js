import React from 'react'


const CartItem = ({data, deleteFromCart}) => {

const {id, name, price, cantidad} = data;


  return (
    <div key={id} className='cart-item'>
    <h4>{name}</h4>
    <h5>$ {price} x {cantidad} = ${price * cantidad}</h5>
    <button onClick={() => deleteFromCart(id)} >Eliminar Uno</button>
    <button onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem