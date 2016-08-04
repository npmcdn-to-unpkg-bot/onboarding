'use strict';

import React from 'react';
import {Tabs} from 'react-bootstrap';
import DataTableView from './../DataTableView'

class CampaingView extends React.Component {

  componentDidMount() {
    /* data will specify what kind of section will be rendered */
    this.props.setCampaingsList();
  }

  render() {
    const tabsInstance = (
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    );

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

CampaingView.propTypes = {
};

export default CampaingView;
