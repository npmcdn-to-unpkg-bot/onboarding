import React from 'react';

function setCampaignsList(state, campaignsList) {
  return Object.assign({}, state, {campaignsList});
}

function setCampaignDetail(state, campaignDetail) {
  return Object.assign({}, state, {campaignDetail});
}

export default function campaignsReducer(state = {} , action) {
  switch (action.type) {
    case 'SET_CAMPAIGNS_LIST':
      return setCampaignsList(state, action.campaignsList);
    case 'SET_CAMPAIGN_DETAIL':
      return setCampaignDetail(state, action.campaignDetail);
    default:
      return state;
  }
}
