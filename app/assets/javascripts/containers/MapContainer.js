import React from 'react';
import Map from './../components/Map';
import LayerSwitcher from './../components/LayerSwitcher';
import { connect } from 'react-redux';
import { createLayer, CREATE_LAYER } from '../actions/mapActions';

const layersConfig = [
  {
    slug: 'type1',
    type: 1,
    title: 'To fix',
    color: '#ff5d33',
    active: true
  },
  {
    slug: 'type2',
    type: 2,
    title: 'To Manage',
    color: '#ffffff',
    active: true
  }
];

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layersList: layersConfig,
    };
  }

  componentDidMount() {
  }

  componentWillUpdate() {
  }

  toggleLayerFn(info) {
    //Handle switchers
    this.state.layersList.map( (layer) => {
      if (layer.type === info.type) {
        layer.active = info.active;
      }
    })

    //Handle tasks
    this.props.tasksList.map( (task) => {
      if (task.task_type === info.type) {
        task.active = info.active;
      }
    })

    const newLayerList = this.state.layersList;
    const newTaskList = this.props.tasksList;

    this.setState({ layersList: newLayerList, tasksList: newTaskList});
  }

  render() {
    return (
      <div>
        <Map
          tiles={this.state.tilesList}
          polygons={this.props.tasksList}
          tasksList={this.state.tasksList}
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
