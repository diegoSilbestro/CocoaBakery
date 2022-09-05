import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './Inicio';
import Tienda from './Tienda/Tienda'

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element= {<Inicio />} />
                <Route path="/Tienda" element= {<Tienda />} />
            </Routes>
            
        </Router>
    )
}
export default Rutas;