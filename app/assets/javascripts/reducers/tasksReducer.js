import React from 'react';

function setTaskList(state, tasksList) {
  return Object.assign({}, state, {tasksList});
}

export default function tasksReducer(state = {} , action) {
  switch (action.type) {
    case 'SET_TASKS_LIST':
      return setTaskList(state, action.tasksList);
    default:
      return state;
  }
}
