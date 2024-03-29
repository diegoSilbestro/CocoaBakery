import React from 'react';
import Logo from '../../img/LogoCocoaBakery.jpg'
import Style from '../styles/Nosotros.css'

const Nosotros = () => {
  return (
    <div id='nosotros' style={Style}>
      <h1 className='nosotro-text'> Sobre Nosotros</h1>
      <img src={Logo} className='img-nosotros' alt='imagen- nosotros- logo- cocoa-bakery' />
      <h1 className='nosotros-text'>Nos esforzamos por regalarle un momento dulce a tu paladar.
        Ofreciendo pastelería gourmet saludable;  adaptada a tus gustos y necesidades.
        Sin dejar de lado el delicioso sabor, textura y aroma de un buen postre, y con la mejor materia prima del mercado.
      </h1>
    </div>
  )
}

export default Nosotros