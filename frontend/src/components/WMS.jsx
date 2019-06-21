import React, { Component } from "react";
import Map from 'ol/Map.js';
import {defaults as defaultControls, ScaleLine} from 'ol/control.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';

export class WMSContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { center: [69, 22], zoom: 4 };

    this.layer = [
      new TileLayer({
        source: new TileWMS({
          url: 'http://localhost:8080/geoserver/wms',
          params: {
            'LAYERS': 'NaturalEarth:bisag',
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

  updateMap() {
    this.olmap.getView().setCenter(this.state.center);
    this.olmap.getView().setZoom(this.state.zoom);
  }

  componentDidMount() {
    this.olmap.setTarget("map");

    // Listen to map changes
    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) return false;
    return true;
  }

  userAction() {
    this.setState({ center: [546000, 6868000], zoom: 5 });
  }

  render() {
    this.updateMap(); // Update map on render?
    return (
      <div id="map" style={{ width: "100%", height: "100%" }}>
        <button onClick={e => this.userAction()}>setState on click</button>
      </div>
    );
  }
}
