import React, { Component } from "react";
import { Navbar, Nav, Button} from "react-bootstrap";
import logo from '../assets/logo.svg';


class Navigation extends Component{
  
  render(){
  
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Map-It !'}
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/PranjalGupta2199/Map-It">Github</Nav.Link>
          <Nav.Link href="/view">BISAG</Nav.Link>
        </Nav>
        <Button variant="warning">LOGIN</Button>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
