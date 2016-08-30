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

  componentWillReceiveProps(newProps) {
    // this.updateTiles(newProps.tiles);

    this.props.polygons !== newProps.polygons && this._drawPolygons(newProps.polygons);
    this.props.tasksList !== newProps.tasksList && this._updatePolygons(newProps.tasksList);
  }

  componentDidUpdate(newProps) {
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

  _updatePolygons(tasksList) {
    tasksList.map( (task) => {
      task.location && task.active && this._addPolygon(task)
      task.location && !task.active && this._removePolygon(task);
    });
  }

  _addPolygon(task) {
    debugger
    L.geoJson(task.location).addTo(this.map);
  }

  _removePolygon(task) {
    const layerToRemove = L.geoJson(task.location);
    debugger
  }

  _drawPolygons(newPolygons) {
    //Draw polygons from task for the first time.
    let polygons = [];

    newPolygons.map( (task) => {
      let polygon = {};

      polygon.geom = task.location && L.geoJson(task.location);
      polygon.id = task.id;

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
