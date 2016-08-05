'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class CampaingView extends React.Component {

  componentDidMount() {
    /* data will specify what kind of section will be rendered */
    this.props.setEventsList();
  }

  render() {

    return (
      <div>
        <div className="c-tabs">
          <ul className="tabs">
            <li className="tab">Mapathon</li>
            <li className="tab">Task</li>
          </ul>
          <div className="tabs-content">
            <div className="tabs-panel">
              <DataTableView
                data={this.props.eventsList}
              />
            </div>
            <div className="tabs-panel">
              <DataTableView
                data={this.props.tasksByEventList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

CampaingView.propTypes = {
};

export default CampaingView;
