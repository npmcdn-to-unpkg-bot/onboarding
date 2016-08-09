'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class CampaingView extends React.Component {

  componentDidMount() {
    //All the campaings.
    this.props.setCampaingsList();
  }

  render() {
    return (
      <div>
        <DataTableView
          data={this.props.campaingsList}
          columns={[
            { title: "Start / End Date", slug: "start_date" },
            { title: "Campaign Name", slug: "name" },
            { title: "Tags", slug: "htag" }
          ]}
        />
      </div>
    );
  }
}

export default CampaingView;
