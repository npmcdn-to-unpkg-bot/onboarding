'use strict';

import React from 'react';
import DataTableView from './../DataTableView'
import Map from './../Map';

class TasksDetailView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /* data will specify what kind of section will be rendered */
    // this.props.setTasksList();
  }

  render() {
    return (
      <div>
        <Map tiles={this.props.tiles} />
      </div>
    );
  }
}

export default TasksDetailView;
