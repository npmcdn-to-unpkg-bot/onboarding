'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import CommunityDataContainer from './containers/CommunityDataContainer';
import UsersActivityDataContainer from './containers/UsersActivityDataContainer';
import EventsViewContainer from './containers/EventsViewContainer';
import DataViewContainer from './containers/DataViewContainer';
import CampaingViewContainer from './containers/CampaingViewContainer';


/**
 * Reducers
 * @info(http://redux.js.org/docs/basics/Reducers.html)
 * @type {Object}
 */
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

/**
 * Global state
 * @info(http://redux.js.org/docs/basics/Store.html)
 * @type {Object}
 */
const middlewareRouter = routerMiddleware(hashHistory);
const store = createStore(
  reducer,
  // The router middleware MUST be before thunk otherwise the URL changes inside
  // a thunk function won't work properly
  applyMiddleware(middlewareRouter),
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

/* Campaigns page */
$('#parallax-campaigns').ready( function() {
  /* It always access into this callback, that's why we need to establish
  a condition to avoid issues */
  if ($('#parallax-campaigns')[0]) {
    /* Campaigns data */
    ['campaign-main'].map( element => {
      $('#' + element).ready( function() {
        ReactDOM.render(
          <Provider store={store}>
            <DataViewContainer data={{}} />
          </Provider>,
          document.getElementById('data-view')
        );
      });
    });
  }
});

/* Campaigns detail */
$('#campaings-detail').ready( function() {
  /* It always access into this callback, that's why we need to establish
  a condition to avoid issues */
  if ($('#campaings-detail')[0]) {
    /* Campaigns data */
    ['campaign-detail-section'].map( element => {
      $('#' + element).ready( function() {
        ReactDOM.render(
          <Provider store={store}>
            <CampaingViewContainer data={{}} />
          </Provider>,
          document.getElementById('campaign-detail-table')
        );
      });
    });
  }
});

/* Mapathon page */
$('#mapathon').ready( function() {
  /* It always access into this callback, that's why we need to establish
  a condition to avoid issues */
  if ($('#mapathon')[0]) {

    /* Campaigns data */
    ['mapathon-main'].map( element => {
      $('#' + element).ready( function() {
        ReactDOM.render(
          <Provider store={store}>
            <EventsViewContainer data={{}} />
          </Provider>,
          document.getElementById('data-view')
        );
      });
    });
  }
});





