import React, { Component } from "react";
import CustomCarousel from "../components/CustomCarousel";
import Header from "../components/Header";


class Dashboard extends Component{
  render(){
    return(
      <div>
        <Header />
        <CustomCarousel />
      </div>
    )
  }
}

export default Dashboard;