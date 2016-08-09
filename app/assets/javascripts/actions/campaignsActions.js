import React from 'react';

export const SET_CAMPAINGS_LIST = 'SET_CAMPAINGS_LIST';
export const SET_CAMPAIGN_DETAIL = 'SET_CAMPAIGN_DETAIL';

export function setCampaingsList() {
  const url = '/api/v1/campaigns';

   return function(dispatch) {
    $.get(url).then(function(campaingsList){
      dispatch({
        type: SET_CAMPAINGS_LIST,
        campaingsList
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



