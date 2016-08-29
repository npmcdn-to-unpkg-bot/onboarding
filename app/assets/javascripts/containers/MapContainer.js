import React from 'react';
import Map from './../components/Map';
import LayerSwitcher from './../components/LayerSwitcher';
import { connect } from 'react-redux';
import { createLayer, CREATE_LAYER } from '../actions/mapActions';

const layersConfig = [
  {
    slug: 'layer1',
    cartoCss: '#null{polygon-fill: #FF6600;polygon-opacity: 0.5;}',
    sql: "SELECT * FROM world_borders WHERE iso3='CAN'",
    title: 'Layer 1',
    active: true
  },
  {
    slug: 'layer2',
    cartoCss: '#null{polygon-fill: #FF0000;polygon-opacity: 0.5;}',
    sql: "SELECT * FROM world_borders WHERE iso3='USA'",
    title: 'Layer 2',
    active: true
  }
];

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tilesList: {},
      layersList: layersConfig,
    };
  }

  componentDidMount() {
    this._createLayers();
  }

  componentDidUpdate() {
  }

  _createLayers() {
    this.state.layersList.map( (layer) => {
      if (layer.active) {
        this.props.createLayer({
          type: CREATE_LAYER,
          layer: {
            slug: layer.slug,
            layer: {
              sql: layer.sql,
              cartocss: layer.cartoCss,
            }
          }
        });
      }
    });
  }

  _removeLayers(layer) {
    if (this.state.tilesList[layer.slug]) {
      const newList = Object.assign({}, this.state.tilesList);
      delete newList[layer.slug];

      this.setState({
        tilesList: newList
      });
    }
  }

  componentWillReceiveProps(props) {
    this.addLayer(props.layer);
  }

  addLayer(layer) {
    if (!this.state.tilesList[layer.slug]) {
      const newList = Object.assign({}, this.state.tilesList);
      newList[layer.slug] = layer.tile;

      this.setState({
        tilesList: newList
      });
    }
  }

  toggleLayerFn(selectedLayer) {
    this.state.layersList.map( (layer) => {
      if (layer.slug === selectedLayer.slug) {
        layer.active = !layer.active;

        if (layer.active) {
          this._createLayers();
        } else {
          this._removeLayers(layer);
        }
        return
      }
    })

    const newLayerList = this.state.layersList;
    this.setState({ layersList: newLayerList });
  }

  render() {
    return (
      <div>
        <Map
          tiles={this.state.tilesList}
        />
        <LayerSwitcher
          layersList={this.state.layersList}
          toggleLayers={(layer) => this.toggleLayerFn(layer)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    layer: state.mapReducer.layer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createLayer: (action) => {
      dispatch(createLayer(action));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
