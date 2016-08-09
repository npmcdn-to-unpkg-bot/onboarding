import React from 'react';

function setCampaingsList(state, campaingsList) {
  return Object.assign({}, state, {campaingsList});
}

function setCampaignDetail(state, campaignDetail) {
  return Object.assign({}, state, {campaignDetail});
}

export default function campaingsReducer(state = {} , action) {
  switch (action.type) {
    case 'SET_CAMPAINGS_LIST':
      return setCampaingsList(state, action.campaingsList);
    case 'SET_CAMPAIGN_DETAIL':
      return setCampaignDetail(state, action.campaignDetail);
    default:
      return state;
  }
}
