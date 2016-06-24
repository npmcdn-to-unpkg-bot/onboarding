import React from 'react';
import SET_COMMUNITY_DATA from '../actions/static';

function setCommunityData(state, communityData) {
  console.log('reduc-func');
  return Object.assign({}, communityData);
}

export default function staticReducer(state = [], action) {
  console.log('reduc-static');
  switch (action.type) {
    case SET_COMMUNITY_DATA:
      return setCommunityData(state, action.communityData);
    default:
      return state;
  }
}
