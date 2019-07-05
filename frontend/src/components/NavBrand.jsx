import React from "react";
import { Navbar } from "react-bootstrap";
import logo from '../assets/logo.svg';

function NavBrand(){
   return(
    <div>
      <Navbar.Brand href="/" variant="dark">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    {'Map It !'}
    </div>
  );
}

export default NavBrand;