import React from "react";
import ProductosSinAzucar from "../Productos/ProductosSinAzucar";
import ProductosSinTacc from "../Productos/ProductosSinTacc";
import ProductosTradicional from "../Productos/ProductosTradicional";
<<<<<<< HEAD
import Contacto from "../Footer/Contacto";
import '../styles/Inicio.css';
import Header from "./Header";
import Home from './Home'
=======
import '../styles/Inicio.css';
import Header from "../Header/Header";
import Contacto from '../Footer/Contacto'
import Home from '../Header/Home'
import Footer from "../Footer/Footer";
>>>>>>> 87c4cf5821b5879d4e1952db3e23165207887403


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
                <Footer />
            </div>
        </div>

    );
}

export default Inicio;
