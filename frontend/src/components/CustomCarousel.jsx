import React, { Component } from "react";
import Img from '../assets/Img.jpg';
import Carousel from 'react-bootstrap/Carousel';


class CustomCarousel extends Component{
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

export default CustomCarousel;