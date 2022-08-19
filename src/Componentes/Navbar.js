import { Button } from "@mui/material";
import React from "react";
import { NavbarWrapper } from "./styles/NavBarStyles";
import SubMenuProductos from "./SubMenuProductos";
import SubMenuTienda from "./SubMenuTienda";
import NavButton from "./NavButton";
import { Link, NavLink } from "react-router-dom"
import './styles/navBtn.css'
// import NavButtonStyles from "./styles/NavButtonStyles";

// const buttonStyle= NavButtonStyles();

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <div className="navContainer">
        <NavLink to="/" activeClassName="active" className="logo"><img src={require('../img/LogoCocoaBakery (1).png')}></img></NavLink>
               
          <ul className="nav">
            <li className="nav1"><NavButton  titulo={<NavLink to="/" className='navBtn' >Inicio</NavLink>}/></li>
            <li className="nav2"><SubMenuProductos className='navBtn' style={{backgroundColor: 'red'}} titulo='Productos' /></li>
            <li className="nav3"><SubMenuTienda className='navBtn' titulo='Tienda' /></li>
            <li className="nav4"><NavButton titulo={<NavLink to="/Contacto" className='navBtn' >Contacto</NavLink>} /></li>
          </ul>
      </div>
      
    </NavbarWrapper>
  );
}

export default Navbar;