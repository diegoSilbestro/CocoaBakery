import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  

  .navContainer{
    overflow:hidden;
    background-color:#e29c9c;
  }
  .logo{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .logo img {
    width:70%;
    margin-top: 0px;
  }
  .nav{
    list-style:none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    position: fixed;
    top: 8.5vh;
    right: ${props => (props.open ? "0" : "-100%")};
    width: 70%;
    height: 90vh;
    transition: right 0.3s linear;
  }
 

  .nav li{
    margin-top: 2rem;
  }

  .nav li a:hover{
    font-weight:bold;
  }

  
  .nav li:hover >ul{
    
  }

  @media only screen and (min-width: 624px) {
    
    .navContainer{
    display: flex;
    justify-content:space-between;
    margin-left:10px;
    margin-right:530px;
    align-items:center;
    align-content: center;
    height:100px;
    width:100%;
  }
    .nav{
      display: flex;
      position: relative;
      top:0px;
      right:0;
      height: 3rem;
      border-radius: 10px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-content: center;
      font-size: 1.5rem;
      width: fit-content;
    }

    .nav > li{
      float: left;
    }
    
    .nav li{
      padding-right: 2rem;
      margin:0;
    }
    
    
  }

  @media (min-width: 624px) and (max-width: 800px){
    .logo{
      display:none;
    }
  }

  
`;