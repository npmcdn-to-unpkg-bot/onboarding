'use strict';

import React from 'react';
import {Tabs} from 'react-bootstrap';


class CampaingView extends React.Component {

  constructor(props) {
    super();
    this.state = {};
  }

  componentWillMount() {
  }

  componentWillReceiveProps(newProps) {
  }

  componentDidMount() {
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
          <p>Campaing detail table</p>
        </div>
      </div>
    );
  }
}

CampaingView.propTypes = {
  data: React.PropTypes.object
};

export default CampaingView;
