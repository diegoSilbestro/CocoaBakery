import React from "react";
import { NavbarWrapper } from "./styles/NavBarStyles";
import SubMenuProductos from "./SubMenuProductos";
import SubMenuTienda from "./SubMenuTienda";
import NavButton from "./NavButton";
import { NavLink } from "react-router-dom"


import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './styles/navBtn.css'
import MenuButton from "./MenuButton";



function Navbar({ open, handleClick }) {
  return (
    <NavbarWrapper open={open} style={{width:"100%"}}>
      <div className="navContainer" style={{width:"100%"}}>

        <NavLink to="/" className="logo"><img src={require('../img/LogoCocoaBakery (1).png')} alt=''></img></NavLink>
        <div className='headerCart' >

          <NavLink to="/ShoppingCart">
            <IconButton >
              <Badge badgeContent={4} sx={{ color: '#190707' }}>
                <ShoppingCartIcon fontSize="large" sx={{ color: '#190707' }} />
              </Badge>
            </IconButton>
          </NavLink>
        </div>
        <div className='hamburgBtn'>
          <MenuButton open={open} handleClick={handleClick}  />
        </div>

        <ul className="nav1" >
          <li><NavButton titulo={<a href="/#home" className='navBtn' onClick={handleClick}>Inicio</a>} /></li>
          <li><SubMenuProductos className='navBtn' titulo='Productos' handleCloseHamb={handleClick} /></li>
          <li><SubMenuTienda className='navBtn' titulo='Tienda' handleCloseHamb={handleClick} /></li>
          <li><NavButton titulo={<a href="/#Contacto" className='navBtn' onClick={handleClick}>Contacto</a>} /></li>
          <li className='ulCart'>


            <NavLink to="/ShoppingCart">
              <IconButton  >
                <Badge badgeContent={4} color="primary" >
                  <ShoppingCartIcon fontSize="large" sx={{ color: '#190707' }} />
                </Badge>
              </IconButton>
            </NavLink>



          </li>
        </ul>
      </div>


    </NavbarWrapper >

  );
}

export default Navbar;