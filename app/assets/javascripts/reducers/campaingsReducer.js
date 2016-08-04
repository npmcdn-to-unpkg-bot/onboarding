import React from 'react';

function setCampaingsList(state, campaingsList) {
  return Object.assign({}, state, {campaingsList});
}

export default function campaingsReducer(state = {} , action) {
  switch (action.type) {
    case 'SET_CAMPAINGS_LIST':
      return setCampaingsList(state, action.campaingsList);
    default:
      return state;
  }
}
