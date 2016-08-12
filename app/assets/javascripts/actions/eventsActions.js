import React from 'react';

export const SET_EVENTS_LIST = 'SET_EVENTS_LIST';
export const SET_EVENT_DETAIL = 'SET_EVENT_DETAIL';

export function setEventsList() {
  const url = '/api/v1/events';
   return function(dispatch) {
    $.get(url).then(function(eventsList){
      dispatch({
        type: SET_EVENTS_LIST,
        eventsList
      });
    });
  };
}

export function setEventDetail(id) {
  const url = `/api/v1/events/${id}`;
   return function(dispatch) {
    $.get(url).then(function(eventDetail){
      dispatch({
        type: SET_EVENT_DETAIL,
        eventDetail
      });
    });
  };
}


