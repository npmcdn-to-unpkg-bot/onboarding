import React from 'react';

export const SET_EVENTS_LIST = 'SET_EVENTS_LIST';

export function setEventsList(data) {
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


