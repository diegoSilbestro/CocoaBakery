import { Button } from "@mui/material";
import React from "react";
import { NavbarWrapper } from "./styles/NavBarStyles";
import SubMenuProductos from "./SubMenuProductos";
import SubMenuTienda from "./SubMenuTienda";
import NavButton from "./NavButton";
import { Link, NavLink } from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './styles/navBtn.css'



function Navbar({ open, handleClick }) {
  return (
    <NavbarWrapper open={open}>
      <div className="navContainer">
        <NavLink to="/"  className="logo"><img src={require('../img/LogoCocoaBakery (1).png')}></img></NavLink>
        <div className='headerCart' >
          <IconButton >
            <Badge badgeContent={4}  sx={{ color: '#190707' }}>
              <ShoppingCartIcon fontSize="large" sx={{ color: '#190707' }} />
            </Badge>
          </IconButton>
        </div>

        <ul className="nav" >
          <li><NavButton titulo={<NavLink to="/" className='navBtn' onClick={handleClick}>Inicio</NavLink>} /></li>
          <li><SubMenuProductos className='navBtn' titulo='Productos' handleCloseHamb={handleClick} /></li>
          <li><SubMenuTienda className='navBtn' titulo='Tienda' handleCloseHamb={handleClick} /></li>
          <li><NavButton titulo={<NavLink to="/Contacto" className='navBtn' onClick={handleClick}>Contacto</NavLink>} /></li>
          <li className='ulCart'>
            <IconButton  >
              <Badge badgeContent={4} color="primary" >
                <ShoppingCartIcon fontSize="large" sx={{ color: '#190707' }} />
              </Badge>
            </IconButton>
          </li>
        </ul>
      </div>

    </NavbarWrapper>
  );
}

export default Navbar;