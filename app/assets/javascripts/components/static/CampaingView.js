'use strict';

import React from 'react';
import Fuse from 'fuse.js';

class CampaingView extends React.Component {

  constructor(props) {
    super();
    this.state = {};
  }

  componentWillMount() {
  }

  componentWillReceiveProps(newProps) {
  }

  render() {
    return (
      <div>
        <p>Campaing events table</p>
      </div>
    );
  }
}

CampaingView.propTypes = {
  data: React.PropTypes.object
};

export default CampaingView;
