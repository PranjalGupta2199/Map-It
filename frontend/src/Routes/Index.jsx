import React, { Component } from "react";
import CustomCarousel from "../components/CustomCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";


class Index extends Component{
  render(){
    return(
      <div>
        <Header />
        <CustomCarousel />
        <Footer />
      </div>
    )
  }
}

export default Index;