import React from 'react'


const CartItem = ({ data, deleteFromCart }) => {

    const { id, nombre, precio, cantidad } = data;


    return (
        <div key={id} className='cart-item'>
            <h4>{nombre}</h4>
            <h5>$ {precio} x ${cantidad} = ${precio * cantidad}</h5>
            <button onClick={() => deleteFromCart(id)} >Eliminar Uno</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
        </div>
    )
}

export default CartItem