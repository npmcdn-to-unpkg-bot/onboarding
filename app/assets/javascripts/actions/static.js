import React from 'react';

export const SET_COMMUNITY_DATA = 'SET_COMMUNITY_DATA';

export function setCommunityData() {
  console.log('action');
  // return function(dispatch) {
  //   $.get('mi url').then(function(comunnityData){
  //     return {
  //       type: SET_COMMUNITY_DATA,
  //       comunnityData
  //     }
  //   })
  // }
  return {
    type: SET_COMMUNITY_DATA,
    communityData: {title: 'aa', quantity: 33.2, percentage: true}
  };
}
