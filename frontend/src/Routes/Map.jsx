import React, { Component } from "react";
import axios from "axios";
import config from "react-global-configuration";
import { WMSContainer } from "../components/WMS";
import WMTSContainer from '../components/WMTS';
class Map extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      cache : false,
      layer : "Population Density",
    }
  }

  componentDidMount(){
    axios
    .get(config.get("backend") + config.get("endpoints.map") + `?layer=${this.state.layer}`)
    .then(response => {
      console.log(response.data.source);
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
    let map = undefined;
    if (!this.state.cache) {
        map = <WMSContainer layer={this.state.layer} />
    } else {
      map = <WMTSContainer layer={this.state.layer} />
    }
    return (
      <div>
        {map}
      </div> 
    )
  }
}

export default Map;