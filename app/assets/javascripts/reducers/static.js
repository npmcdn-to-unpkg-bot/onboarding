import React from 'react';

function setCommunityData(state, communityData) {
  return Object.assign({}, state, {communityData});
}

function setUsersActivityData(state, usersActivityData) {
  return Object.assign({}, state, {usersActivityData});
}

export default function staticReducer(state = {} , action) {
  switch (action.type) {
    case 'SET_COMMUNITY_DATA':
      return setCommunityData(state, action.communityData);
    case 'SET_USERS_ACTIVITY_DATA':
      return setUsersActivityData(state, action.usersActivityData);
    default:
      return state;
  }
}
