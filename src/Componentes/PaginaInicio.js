import React from "react";
import Header from "./Header";
import Inicio from "./Inicio";
import ProductosSinAzucar from "./Productos/ProductosSinAzucar";
import ProductosSinTacc from "./Productos/ProductosSinTacc";
import ProductosTradicional from "./Productos/ProductosTradicional";
import Footer from "./Footer"

const PaginaInicio = () => {
    return (
        <>
            <Header />
            <Inicio />
            <ProductosSinAzucar/>
            <ProductosSinTacc/>
            <ProductosTradicional/>
            <Footer/>
        </>
    )

}

export default PaginaInicio; 