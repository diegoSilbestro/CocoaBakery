
import ShoppingCart from '../Cart/ShoppingCart';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD:src/Componentes/Navbar/Rutas.js
import Inicio from '../Header/Inicio';
import Tienda from '../Tienda/Tienda'
=======
import Inicio from './Header/Inicio';
import Tienda from './Tienda/Tienda'
>>>>>>> 87c4cf5821b5879d4e1952db3e23165207887403:src/Componentes/Rutas.js

const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element= {<Inicio />} />
                <Route path="/Tienda" element= {<Tienda />} />
                <Route path="/ShoppingCart" element={<ShoppingCart/> } />
            </Routes>
            
        </Router>
    )
}
export default Rutas;
