import React from 'react';
const BASEMAP = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.activeTiles = {};
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this._drawPolygons();
  }

  initMap() {
    const mapContainer = document.getElementById('map');
    this.map = L.map(mapContainer, {
      center: [39.950490, -98.746077],
      zoom: 3,
      scrollWheelZoom: false,
      zoomControl: false
    });
    const zoomControl = L.control.zoom({
        position: 'bottomleft'
    });
    this.map.addControl(zoomControl);
    this.basemap = L.tileLayer(BASEMAP);
    this.basemap.addTo(this.map);
  }

  _drawPolygons() {
    //Create an object to manage the layers in/out the map
    this.props.layersGroups.map( (group) => {
      if (group.active) {
        this._addLayers(group.layers);
      } else {
        this._removeLayers(group.layers);
      }
    });
  }

  _addLayers(layers) {
    layers.map( (layer) => {
      layer.geom.addTo(this.map);
    })
  }

  _removeLayers(layers) {
    layers.map( (layer) => {
      this.map.removeLayer(layer.geom);
    })
  }

  render() {
    return (
      <div className="c-map" id="map"></div>
    );
  }
}

export default Map;
