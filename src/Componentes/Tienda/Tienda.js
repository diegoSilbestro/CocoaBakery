import React from 'react'
import TiendaSinAzucar from './TiendaSinAzucar'
import TiendaSinTACC from './TiendaSinTACC'
import TiendaTradicional from './TiendaTradicional'
import Contacto from "../Contacto";
import Header from '../Header';


const Tienda = ({productItems,productItem,products}) => {

    return (
        <>
            <div  >
                <Header />
            </div>
            <div>
                <TiendaSinTACC productItems={productItems} />
                <TiendaSinAzucar productItem={productItem} />
                <TiendaTradicional products={products} />
                <Contacto/>
            </div>
        </>
    )
}

export default Tienda