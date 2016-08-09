'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class CampaingView extends React.Component {

  componentDidMount() {
    /* data will specify what kind of section will be rendered */
    this.props.setCampaingsList();
  }

  render() {
    return (
      <div>
        <div>
          <DataTableView
            data={this.props.campaingsList}
          />
        </div>
      </div>
    );
  }
}

export default CampaingView;
