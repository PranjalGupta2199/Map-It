import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import Img from '../assets/Img.jpg';
import logo from '../assets/logo.svg';
import Carousel from 'react-bootstrap/Carousel';


export class CustomCarousel extends Component{
  render(){
   return(
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export class Navigation extends Component{
  
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
          <Nav.Link href="https://bisag.gujarat.gov.in/">BISAG</Nav.Link>
        </Nav>
        <Button variant="warning">LOGIN</Button>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
