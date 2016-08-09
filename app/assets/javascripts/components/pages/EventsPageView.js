'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class CampaingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1"
    };
  }

  componentDidMount() {
    //All mapathons
    this.props.setEventsList();
  }

  changeTab(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    return (
      <div>
        <DataTableView
          identity="events"
          base_url="/events"
          data={this.props.eventsList}
          columns={[
            { title: "Start / End Date", slug: "date" },
            { title: "Mapathon Name", slug: "name" },
            { title: "Tags", slug: "htag" }
          ]}
        />
      </div>
    );
  }
}

export default CampaingView;
