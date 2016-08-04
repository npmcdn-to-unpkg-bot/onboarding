'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
//HOME
import CommunityDataContainer from './containers/home/CommunityDataContainer';
import UsersActivityDataContainer from './containers/home/UsersActivityDataContainer';
//CAMPAINGS
import CampaingsPageContainer from './containers/CampaingsPageContainer';
//EVENTS
import EventsPageContainer from './containers/EventsPageContainer';
//TASK
import TasksPageContainer from './containers/TasksPageContainer';

/**
 * Reducers
 * @info(http://redux.js.org/docs/basics/Reducers.html)
 * @type {Object}
 */
const reducer = combineReducers({
  ...reducers
});

/**
 * Global state
 * @info(http://redux.js.org/docs/basics/Store.html)
 * @type {Object}
 */
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

/**
 * HTML5 History API managed by React Router module
 * @info(https://github.com/reactjs/react-router/tree/master/docs)
 * @type {Object}
 */
// const history = syncHistoryWithStore(hashHistory, store);

/* Home page */
$('#parallax').ready( function() {
  /* It always access into this callback, that's why we need to establish
  a condition to avoid issues */
  if ($('#parallax')[0]) {
    /* Community data */
    ['total-roads', 'total-tagged', 'user-changes'].map(element => {
      ReactDOM.render(
        <Provider store={store}>
          <CommunityDataContainer data={element} />
        </Provider>,
        document.getElementById(element)
      );
    });

    /* Users activity data */
    ['ranking', 'latest-activity'].map(element => {
      ReactDOM.render(
        <Provider store={store}>
          <UsersActivityDataContainer data={element} />
        </Provider>,
        document.getElementById(element)
      );
    });
  }
});

/* Campaigns index */
$('#campaignsIndex').ready( function() {
  /* It always access into this callback, that's why we need to establish
  a condition to avoid issues */
  if ($('#campaignsIndex')[0]) {
    /* Campaigns data */
    ['campaignsIndex'].map( element => {
      $('#' + element).ready( function() {
        ReactDOM.render(
          <Provider store={store}>
            <CampaingsPageContainer data={{}} />
          </Provider>,
          document.getElementById('data-table-view')
        );
      });
    });
  }
});

/* Campaigns detail */
$('#campaignsDetail').ready( function() {
  /* It always access into this callback, that's why we need to establish
  a condition to avoid issues */
  if ($('#campaignsDetail')[0]) {
    /* Campaigns data */
    ['campaignsDetail'].map( element => {
      $('#' + element).ready( function() {
        ReactDOM.render(
          <Provider store={store}>
          </Provider>,
          document.getElementById('data-table-view')
        );
      });
    });
  }
});

/* Mapathon page */
$('#eventsIndex').ready( function() {
  /* It always access into this callback, that's why we need to establish
  a condition to avoid issues */
  if ($('#eventsIndex')[0]) {

    /* Campaigns data */
    ['eventsIndex'].map( element => {
      $('#' + element).ready( function() {
        ReactDOM.render(
          <Provider store={store}>
            <EventsPageContainer data={{}} />
          </Provider>,
          document.getElementById('data-table-view')
        );
      });
    });
  }
});

/* Tasks page */
$('#tasksIndex').ready( function() {
  /* It always access into this callback, that's why we need to establish
  a condition to avoid issues */
  if ($('#tasksIndex')[0]) {

    /* Campaigns data */
    ['tasksIndex'].map( element => {
      $('#' + element).ready( function() {
        ReactDOM.render(
          <Provider store={store}>
            <TasksPageContainer data={{}} />
          </Provider>,
          document.getElementById('data-table-view')
        );
      });
    });
  }
});





