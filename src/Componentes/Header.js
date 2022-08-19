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
      {/* <a href="#home">
        img src={require('../img/LogoCocoaBakery (1).png')}></img>
      </a> */}
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
