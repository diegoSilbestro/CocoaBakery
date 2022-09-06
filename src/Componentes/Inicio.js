import React from "react";
import ProductosSinAzucar from "./Productos/ProductosSinAzucar";
import ProductosSinTacc from "./Productos/ProductosSinTacc";
import ProductosTradicional from "./Productos/ProductosTradicional";
import Contacto from "./Contacto";
import './styles/Inicio.css';
import Header from "./Header";
import Home from './Home'


function Inicio() {
    return (

        <div >
            <div  >
                <Header />
            </div>
            <div className="inicio">
                <Home/>
                <ProductosSinTacc />
                <ProductosSinAzucar />
                <ProductosTradicional />
                <Contacto />
            </div>
        </div>

    );
}

export default Inicio;
