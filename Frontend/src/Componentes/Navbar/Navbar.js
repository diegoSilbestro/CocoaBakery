import React from "react";
import { NavbarWrapper } from "../styles/NavBarStyles";
import SubMenuProductos from "./SubMenuProductos";
import SubMenuTienda from "./SubMenuTienda";
import NavButton from "../Navbar/NavButton";
import { NavLink } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import '../styles/navBtn.css'
import MenuButton from "./MenuButton";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Navbar({ open, handleClick, cartItemQuantity }) {
  return (
    <NavbarWrapper open={open} style={{ width: "100%" }}>
      <div className="navContainer" style={{ width: "100%" }}>

        <HashLink smooth to="/#home" scroll={el => scrollWithOffset(el)} className="logo"><img src={require('../../img/LogoCocoaBakery (1).png')} alt=''></img></HashLink>
        <div className='headerCart' >

          <NavLink to="/ShoppingCart">
            <IconButton >
              <Badge badgeContent={cartItemQuantity} sx={{ color: '#190707' }}>
                <ShoppingCartIcon fontSize="large" sx={{ color: '#190707' }} />
              </Badge>
            </IconButton>
          </NavLink>
        </div>
        <div className='hamburgBtn'>
          <MenuButton open={open} handleClick={handleClick} />
        </div>

        <ul className="nav1" >
          <li><NavButton titulo={<HashLink smooth to="/#home" scroll={el => scrollWithOffset(el)} className='navBtn' onClick={handleClick}>Inicio</HashLink>} /></li>
          <li><SubMenuProductos className='navBtn' titulo='Productos' handleCloseHamb={handleClick} /></li>
          <li><SubMenuTienda className='navBtn' titulo='Tienda' handleCloseHamb={handleClick} /></li>
          <li><NavButton titulo={<HashLink smooth to="/#Contacto" scroll={el => scrollWithOffset(el)} className='navBtn' onClick={handleClick}>Contacto</HashLink>} /></li>
          <li className='ulCart'>


            <NavLink to="/ShoppingCart" scroll={el => scrollWithOffset(el)}>
              <IconButton  >
                <Badge badgeContent={cartItemQuantity} color="primary" >
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