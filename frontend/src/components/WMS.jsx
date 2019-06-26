import React, { Component } from "react";
import Map from 'ol/Map.js';
import config from "react-global-configuration";
import {defaults as defaultControls, ScaleLine} from 'ol/control.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';

class WMSContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layerName: this.props.layer,
      center: [69, 22], 
      zoom: 4,
     };

    this.layer = [
      new TileLayer({
        source: new TileWMS({
          url: config.get('geoserver') + ('/wms'),
          params: {
            'LAYERS': this.state.layerName,
            'TILED': true
          }
        })
      })
    ];

    this.olmap = new Map({
      controls: defaultControls().extend([
        new ScaleLine({
          units: 'degrees'
        })
      ]),
      target: null,
      layers: this.layer,
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom
      }),
    });
  }
  componentDidMount() {
    this.olmap.setTarget("map");
    // Listen to map changes
  }

  render() {
    return (
      <div 
        id="map" 
        style={{ 
          width: "100%", 
          height: "100%" 
        }}> </div>
    );
  }
}

export default WMSContainer;
