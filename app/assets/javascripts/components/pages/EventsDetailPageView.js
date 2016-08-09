'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class EventsDetailView extends React.Component {

  constructor(props) {
    super(props);
    const path = window.location.pathname.split('/');
    this.eventId = path[path.length - 1];

    this.state = {
      activeTab: "tab1",
      currentEvent: this.eventId
    };
  }

  componentDidMount() {
    //All mapathons
    this.props.setEventDetail(this.eventId);
  }

  changeTab(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    /*
    Slug must match with column name from API.
     */
    const taskTable = (
      <DataTableView
        identity="tasks"
        base_url="/tasks"
        data={this.props.eventDetail && this.props.eventDetail.tasks}
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
        <div className="c-tabs -switcher">
          <ul className="tabs">
            <div className="wrap row">
              <div className="col-md-12">
                <ul>
                  <li className={`tab ${this.state.activeTab === "tab1" ? "-is-active" : ""}`} onClick={this.changeTab.bind(this, "tab1")}>Map View</li>
                  <li className={`tab ${this.state.activeTab === "tab2" ? "-is-active" : ""}`} onClick={this.changeTab.bind(this, "tab2")}>List View</li>
                </ul>
              </div>
            </div>
          </ul>
          <div className="tabs-content">
            <div className={`tabs-panel ${this.state.activeTab === "tab1" ? "-is-active" : ""}`}>
              <div id="map"></div>
            </div>
            <div className="tabs-panel" className={`tabs-panel ${this.state.activeTab === "tab2" ? "-is-active" : ""}`}>
              {taskTable}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default EventsDetailView;
