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
      layersTypes: layersConfig,
      layersGroups: []
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.tasksList && this._createLayerGroups(nextProps.tasksList);
  }

  _createLayerGroups(tasksList) {
    //Groups layers by type to be able to switch on an off by groups.
    let groups = [];

    this.state.layersTypes.map( (group) => {
      const type = group.type;

      let layersGroup = {};
      layersGroup.slug = group.slug;
      layersGroup.layers = []

      tasksList.map( (task) => {
        if (task.task_type === type && task.location) {
          task.geom = L.geoJson(task.location);
          layersGroup.layers.push(task);
        }
      });

      groups.push(layersGroup);
    });

    console.log(groups);
    debugger

  }

  toggleLayerFn(info) {
    //Handle switchers
    this.state.layersTypes.map( (layer) => {
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

    const newLayerList = this.state.layersTypes;
    const newTaskList = this.props.tasksList;

    this.setState({ layersTypes: newLayerList, tasksList: newTaskList});
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
          layersTypes={this.state.layersTypes}
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
