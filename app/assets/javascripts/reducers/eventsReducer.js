import React from 'react';

function setEventsList(state, eventsList) {
  return Object.assign({}, state, {eventsList});
}

export default function eventsReducer(state = {} , action) {
  switch (action.type) {
    case 'SET_EVENTS_LIST':
      return setEventsList(state, action.eventsList);
    default:
      return state;
  }
}
