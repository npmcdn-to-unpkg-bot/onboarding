import React from 'react';

export const SET_CAMPAIGNS_LIST = 'SET_CAMPAIGNS_LIST';
export const SET_CAMPAIGN_DETAIL = 'SET_CAMPAIGN_DETAIL';

export function setCampaignsList() {
  const url = '/api/v1/campaigns';

   return function(dispatch) {
    $.get(url).then(function(campaignsList){
      dispatch({
        type: SET_CAMPAIGNS_LIST,
        campaignsList
      });
    });
  };
}

export function setCampaignDetail(id) {
  const url = `/api/v1/campaigns/${id}`;

   return function(dispatch) {
    $.get(url).then(function(campaignDetail){
      dispatch({
        type: SET_CAMPAIGN_DETAIL,
        campaignDetail
      });
    });
  };
}



