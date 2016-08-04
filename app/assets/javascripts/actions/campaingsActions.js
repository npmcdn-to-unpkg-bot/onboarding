import React from 'react';

export const SET_CAMPAINGS_LIST = 'SET_CAMPAINGS_LIST';

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



