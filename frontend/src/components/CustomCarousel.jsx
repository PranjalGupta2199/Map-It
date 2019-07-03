import React, { Component } from "react";
import ncog from '../assets/ncog.png';
import Carousel from 'react-bootstrap/Carousel';


class CustomCarousel extends Component{
  render(){
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ncog}
            alt="First slide"
            width="100%"
            height="80%"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ncog}
            alt="Third slide"
            width="100%"
            height="80%"
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