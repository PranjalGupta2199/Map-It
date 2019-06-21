import React, { Component } from "react";
import CustomCarousel from "../components/CustomCarousel";
import Navigation from "../components/Navigation";


class Dashboard extends Component{
  render(){
    return(
      <div>
        <Navigation />
        <CustomCarousel />
      </div>
    )
  }
}

export default Dashboard;