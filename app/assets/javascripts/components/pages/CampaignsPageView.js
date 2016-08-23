'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class CampaignView extends React.Component {

  componentDidMount() {
    //All the campaigns.
    this.props.setCampaignsList();
  }

  render() {
    return (
      <div>
        <DataTableView
          identity="campaigns"
          base_url="/campaigns"
          data={this.props.campaignsList}
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

export default CampaignView;
