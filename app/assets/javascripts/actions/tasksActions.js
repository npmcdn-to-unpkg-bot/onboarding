import React from 'react';

export const SET_TASKS_LIST = 'SET_TASKS_LIST';

export function setTasksList(data) {
  const url = '/api/v1/tasks';
   return function(dispatch) {
    $.get(url).then(function(tasksList){
      dispatch({
        type: SET_TASKS_LIST,
        tasksList
      });
    });
  };
}


