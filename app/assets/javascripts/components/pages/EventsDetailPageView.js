'use strict';

import React from 'react';
import DataTableView from './../DataTableView'

class EventsDetailView extends React.Component {

  constructor(props) {
    super(props);
    const path = window.location.pathname.split('/');
    this.eventId = path[path.length - 1];

    this.state = {
      activeTab: "tab1",
      currentEvent: this.eventId
    };
  }

  componentDidMount() {
    //All mapathons
    this.props.setEventDetail(this.eventId);
  }

  render() {
    /*
    Slug must match with column name from API.
     */
    return (
      <div>
        <DataTableView
          identity="tasks"
          base_url="/tasks"
          data={this.props.eventDetail && this.props.eventDetail.tasks}
          columns={[
            { title: 'Deadline', slug: 'deadline' },
            { title: 'Task Name', slug: 'name' },
            { title: 'Type', slug: 'task_type' },
            { title: 'State', slug: 'status' }
          ]}
        />
      </div>
    );
  }
}

export default EventsDetailView;
