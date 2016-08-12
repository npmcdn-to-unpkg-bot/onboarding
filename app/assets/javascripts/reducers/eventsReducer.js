import React from 'react';

function setEventsList(state, eventsList) {
  return Object.assign({}, state, {eventsList});
};

function setEventDetail(state, eventDetail) {
  return Object.assign({}, state, {eventDetail});
};

export default function eventsReducer(state = {} , action) {
  switch (action.type) {
    case 'SET_EVENTS_LIST':
      return setEventsList(state, action.eventsList);
    case 'SET_EVENT_DETAIL':
      return setEventDetail(state, action.eventDetail);
    default:
      return state;
  }
};
