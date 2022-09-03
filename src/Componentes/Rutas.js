import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './Inicio';
import ProductosSinTacc from './Productos/ProductosSinTacc';
import ProductosSinAzucar from './Productos/ProductosSinAzucar';
import ProductosTradicional from "./Productos/ProductosTradicional";
import TiendaSinTACC from './Tienda/TiendaSinTACC';
import TiendaSinAzucar from './Tienda/TiendaSinAzucar';
import TiendaTradicional from './Tienda/TiendaTradicional';
import Contacto from './Contacto';
import Header from './Header'

const Rutas = ({productItems,productItem,products}) => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element= {<Inicio />} />
                <Route path="/ProductosSinTacc" element= {<ProductosSinTacc   />} />
                <Route path="/ProductosSinAzucar" element= {<ProductosSinAzucar />} />
                <Route path="/ProductosTradicional" element= {<ProductosTradicional />} />
                <Route path="/TiendaSinTACC" element= {<TiendaSinTACC productItems={productItems}  />} />
                <Route path="/TiendaSinAzucar" element= {<TiendaSinAzucar productItem={productItem} />} />
                <Route path="/TiendaTradicional" element= {<TiendaTradicional products={products} />} />
                <Route path="/Contacto" element= {<Contacto />} />
            </Routes>
        </Router>
    )
}
export default Rutas;