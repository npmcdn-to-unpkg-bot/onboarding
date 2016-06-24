import React from 'react';

function setCommunityData(state, communityData) {
  let newState = Object.assign({}, state, {communityData});
  return newState;
}

export default function staticReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_COMMUNITY_DATA':
      return setCommunityData(state, action.communityData);
    default:
      return state;
  }
}
