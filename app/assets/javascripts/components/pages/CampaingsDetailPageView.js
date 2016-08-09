'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class CampaingsDetailView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1"
    };
  }

  componentDidMount() {
    //Here we need to filter for events or task of a CAMPAING. Now, we are getting everything.
    this.props.setEventsList();
    this.props.setTasksList();
  }

  changeTab(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    const mapathonTable = (
      <DataTableView
        data={this.props.eventsList}
        columns={[
          { title: "Start / End Date", slug: "date" },
          { title: "Mapathon Name", slug: "name" },
          { title: "Location Point", slug: "location" }
        ]}
      />
    );

    const taskTable = (
      <DataTableView
        data={this.props.tasksList}
        columns={[
          { title: "Deadline", slug: "deadline" },
          { title: "Task Name", slug: "name" },
          { title: "Type", slug: "task_type" },
          { title: "State", slug: "status" }
        ]}
      />
    )

    return (
      <div className="l-tabs">
        <div className="c-tabs">
          <ul className="tabs">
            <div className="wrap row">
              <div className="col-md-12">
                <li className={`tab ${this.state.activeTab === "tab1" ? "-is-active" : ""}`} onClick={this.changeTab.bind(this, "tab1")}>Mapathon</li>
                <li className={`tab ${this.state.activeTab === "tab2" ? "-is-active" : ""}`} onClick={this.changeTab.bind(this, "tab2")}>Task</li>
              </div>
            </div>
          </ul>
          <div className="tabs-content">
            <div className={`tabs-panel ${this.state.activeTab === "tab1" ? "-is-active" : ""}`}>
              {mapathonTable}
            </div>
            <div className="tabs-panel" className={`tabs-panel ${this.state.activeTab === "tab2" ? "-is-active" : ""}`}>
              {taskTable}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaingsDetailView;
