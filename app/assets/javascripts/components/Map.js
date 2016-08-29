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

  componentWillReceiveProps(props) {
    this.updateTiles(props.tiles);
  }

  componentDidUpdate(newProps) {
    this.props.polygons !== newProps.polygons && this._drawPolygons().bind(this);
    this.props.tasksList !== newProps.tasksList && this._updatePolygons().bind(this);
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

  updateTiles(tiles) {
    if (tiles) {
      Object.keys(tiles).forEach((slug) => {
        if (!this.activeTiles[slug]) {
          this.activeTiles[slug] = {
            tile: tiles[slug],
            layer: {}
          };
          this.addTile(slug, tiles[slug]);
        }
      });

      this.checkRemovedTiles(tiles);
    }
  }

  checkRemovedTiles(tiles) {
    const currentTiles = new Set(Object.keys(this.activeTiles));
    const newTiles = new Set(Object.keys(tiles));
    const difference = new Set(
      [...currentTiles].filter(x => !newTiles.has(x)));

    if (difference.size) {
      this.removeTiles(difference);
    }
  }

  removeTiles(tiles) {
    const currentList = Object.assign({}, this.activeTiles);
    const newList = {};

    Object.keys(currentList).forEach((slug) => {
      if (!tiles.has(slug)) {
        newList[slug] = currentList[slug];
      } else {
        this.map.removeLayer(this.activeTiles[slug].layer);
      }
    });

    this.activeTiles = newList;
  }

  addTile(slug, tile) {
    const layer = L.tileLayer(tile, { noWrap: true });
    layer.addTo(this.map);
    this.activeTiles[slug].layer = layer;
  }

  _updatePolygons() {
    debugger
    this.props.tasksList.map( (task) => {
      task.location && task.active && L.geoJson(task.location).addTo(this.map);
      task.location && !task.active && L.geoJson(task.location).addTo(this.map);
    });
  }

  _drawPolygons() {
    let polygons = [];

    this.props.polygons.map( (task) => {
      const polygon = {};
      polygon.id = task.id;
      polygon.title = task.name;
      polygon.geojson = task.location && L.geoJson(task.location);

      polygons.push(polygon);

      task.location && L.geoJson(task.location).addTo(this.map);
    });

    this.setState.polygonTyles = polygons;
  }

  render() {
    return (
      <div className="c-map" id="map"></div>
    );
  }
}

export default Map;
