'use strict';

import React from 'react';
import DataTableView from './../DataTableView';
import Map from './../../containers/MapContainer';

class TaskView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1"
    };
  }

  componentDidMount() {
    /* data will specify what kind of section will be rendered */
    this.props.setTasksList();
  }

  changeTab(tab) {
    this.setState({activeTab: tab});

    this._changeRoutesTheme(tab);
  }

  _changeRoutesTheme(tab) {
    if (tab === "tab1") {
      document.getElementById('taskRoutes').classList.add('-dark');
    } else {
      document.getElementById('taskRoutes').classList.remove('-dark');
    }
  }

  render() {
    const taskTable = (
      <DataTableView
        identity="tasks"
        base_url="/tasks"
        data={this.props.tasksList}
        columns={[
          { title: 'Deadline', slug: 'deadline' },
          { title: 'Task Name', slug: 'name' },
          { title: 'Type', slug: 'task_type' },
          { title: 'State', slug: 'status' }
        ]}
      />
    );

    return (
      <div>
        <Map
          tasksList={this.props.tasksList}
        />
      </div>
    );
  }
}

export default TaskView;
