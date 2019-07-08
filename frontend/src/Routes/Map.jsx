import React, { Component } from "react";
import axios from "axios";
import config from "react-global-configuration";
import WMSContainer  from "../components/WMS";
import WMTSContainer from '../components/WMTS';
import ErrorPage from "./Error404";
import MapHeader from "../components/MapHeader";
import "../styles/ol.css";

class Map extends Component{
  constructor(props){
    super(props);
    this.state = {
      cache : null,
      layer : this.props.location.state,
      bbox: null,
    }
  }

  componentDidMount(){
    axios
    .get(config.get("backend") + config.get("endpoints.map") + `?layer=${this.state.layer}`)
    .then(response => {
      this.setState({'bbox' : response.data.bbox})
      if (response.data.source === "server") {
        this.setState({cache : false});
      } else if (response.data.source === "cache"){
        this.setState({cache : true});
      } else {
        this.setState({cache : undefined});
      }
    })
    .catch(error => console.log("error"));
  }

  render(){
    if (this.state.bbox === null) {
      return (
        <div>
          <p> Loading .... </p>
        </div>
      )
    }
    else {
      let map = undefined;
      if (this.state.cache === false) {
          map = <WMSContainer layer={this.state.layer} bbox={this.state.bbox}/>
      } else if (this.state.cache === true) {
        map = <WMTSContainer layer={this.state.layer} bbox={this.state.bbox}/>
      }else if (this.state.cache === null){
        map = <div><p> Loading .... </p></div>
      } else {
        map = <ErrorPage/>
      }
      return (
        <div>
          <MapHeader />
          {map}
        </div> 
      )
    };
  }
}

export default Map;