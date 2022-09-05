import React from 'react'
import TiendaSinAzucar from './TiendaSinAzucar'
import TiendaSinTACC from './TiendaSinTACC'
import TiendaTradicional from './TiendaTradicional'
import Contacto from "../Contacto";
import Header from '../Header';

const Tienda = () => {
    return (
        <>
            <div  >
                <Header />
            </div>
            <div>
                <TiendaSinTACC />
                <TiendaSinAzucar />
                <TiendaTradicional />
                <Contacto />
            </div>
        </>
    )
}

export default Tienda