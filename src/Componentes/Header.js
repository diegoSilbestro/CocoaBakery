import React, { useState } from "react";
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

function Header({cartItemQuantity}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <Navbar open={open} handleClick={handleClick} cartItemQuantity = {cartItemQuantity}/>
    </HeaderWrapper>
  );
}

export default Header;