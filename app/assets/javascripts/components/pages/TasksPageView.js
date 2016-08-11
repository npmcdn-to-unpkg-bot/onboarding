'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class TaskView extends React.Component {

  componentDidMount() {
    /* data will specify what kind of section will be rendered */
    this.props.setTaskList();
  }

  render() {
    debugger
    return (
      <div>
        <div>
          <DataTableView
            data={this.props.tasksList}
          />
        </div>
      </div>
    );
  }
}

export default TaskView;
