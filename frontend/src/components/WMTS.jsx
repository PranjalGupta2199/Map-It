import React, {Component} from "react";
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import TileLayer from 'ol/layer/Tile.js';
import WMTS, {optionsFromCapabilities} from 'ol/source/WMTS.js';
import axios from "axios";
import config from "react-global-configuration";


class WMTSContainer extends Component{  
  constructor(props){
    super(props);
    
    this.state = {
      layerName: this.props.layer,
      options: null,
      center: [69,22],
      zoom: 4,
    }
    this.parser = new WMTSCapabilities();

    this.olmap = new Map({
      layers: null,
      target: null,
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom,
      })
    })

  }

  componentDidMount() {
    axios
    .get(config.get("geowebcache") + ("/service/wmts?REQUEST=getcapabilities"))
    .then(response => {
      let result = this.parser.read(response.data);
      let options = optionsFromCapabilities(result, {
        layer: this.state.layerName,
        matrixSet: 'EPSG:4326',
      });
      
      this.olmap = new Map({
        layers: [
          new TileLayer({
            opacity: 1,
            source: new WMTS((options)),
          }),
        ],
        theme: null,
        target: 'map',
        view: new View({
          center: this.state.center,
          zoom: this.state.zoom,
        })
      })
    })
    

  }

  render() {    return (
      <div id="map" style={{ width: "100%", height: "100%" }}>
      </div>
    );
  }
}

export default WMTSContainer;