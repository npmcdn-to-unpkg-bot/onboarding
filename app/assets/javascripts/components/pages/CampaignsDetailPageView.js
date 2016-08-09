'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class CampaignsDetailView extends React.Component {

  constructor(props) {
    super(props);
    const path = window.location.pathname.split('/');
    this.campaignId = path[path.length - 1];

    this.state = {
      activeTab: 'tab1',
      currentCampaign: this.campaignId
    };
  }

  componentDidMount() {
    //Here we need to filter for events or task of a CAMPAING. Now, we are getting everything.
    this.props.setCampaignDetail(this.campaignId);
  }

  changeTab(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    /*
    Slug must match with column name from API.
     */
    const mapathonTable = (
      <DataTableView
        identity='events'
        base_url='/events'
        data={this.props.campaignDetail && this.props.campaignDetail.events}
        columns={[
          { title: 'Date', slug: 'date' },
          { title: 'Mapathon Name', slug: 'name' },
          { title: 'Description', slug: 'description' }
        ]}
      />
    );

    /*
    Slug must match with column name from API.
     */
    const taskTable = (
      <DataTableView
        identity='tasks'
        base_url='/tasks'
        data={this.props.campaignDetail && this.props.campaignDetail.tasks}
        columns={[
          { title: 'Deadline', slug: 'deadline' },
          { title: 'Task Name', slug: 'name' },
          { title: 'Type', slug: 'task_type' },
          { title: 'State', slug: 'status' }
        ]}
      />
    )

    return (
      <div className="l-tabs">
        <div className="c-tabs">
          <ul className="tabs">
            <div className="wrap row">
              <div className="col-md-12">
                <ul>
                  <li className={`tab ${this.state.activeTab === "tab1" ? "-is-active" : ""}`} onClick={this.changeTab.bind(this, "tab1")}>Mapathon</li>
                  <li className={`tab ${this.state.activeTab === "tab2" ? "-is-active" : ""}`} onClick={this.changeTab.bind(this, "tab2")}>Task</li>
                </ul>
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

export default CampaignsDetailView;
