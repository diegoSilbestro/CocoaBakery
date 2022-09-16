import React, { useState } from 'react'
import Modal from '../Cart/Modal'
import '../styles/Cart.css'


const CartItem = ({ data, deleteFromCart }) => {
  const [showModal, setShowModal] = useState(false)

  const { id, img, name, price, cantidad } = data;

  return (
    <div key={id} className='cart-item'>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} id='img-cart' alt='' />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title title">{name}</h5>
              <p className="card-text text-dark">$ {price} x {cantidad} = ${price * cantidad}</p>
              <button className='btn-cart' onClick={() => deleteFromCart(id, false)} >Eliminar Uno</button>
              <button className='btn-cart' onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
              <button className='btn-cart' onClick={() => setShowModal(true)}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={"Compra realizada con éxito!"}
        open={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  )
}

export default CartItem