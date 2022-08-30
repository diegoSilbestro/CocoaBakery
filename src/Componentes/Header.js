import React, { useState } from "react";
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <Navbar open={open} handleClick={handleClick}/>
      <MenuButton open={open} handleClick={handleClick} className='hamburgBtn' />
    </HeaderWrapper>
  );
}

export default Header;
