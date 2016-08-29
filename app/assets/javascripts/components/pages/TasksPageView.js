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
        <div className="l-switcher">
          <div className={`c-switcher ${this.state.activeTab === "tab2" && "-light"}`}>
            <div className="switcher-header">
              <div className="wrap">
                <h2>Tasks</h2>
                <ul className="tabs">
                  <li className={`tab ${this.state.activeTab === "tab1" && "-is-active"}`} onClick={this.changeTab.bind(this, "tab1")}>Map View</li>
                  <li className={`tab ${this.state.activeTab === "tab2" && "-is-active"}`} onClick={this.changeTab.bind(this, "tab2")}>List View</li>
                </ul>
              </div>
            </div>
            <div className="tabs-content">
              <div className={`tabs-panel ${this.state.activeTab === "tab1" && "-is-active"}`}>
                <Map />
              </div>
              <div className="tabs-panel" className={`tabs-panel ${this.state.activeTab === "tab2" && "-is-active"}`}>
                {taskTable}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskView;
