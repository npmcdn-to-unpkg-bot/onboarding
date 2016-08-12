import React from 'react';

export const SET_COMMUNITY_DATA = 'SET_COMMUNITY_DATA';
export const SET_USERS_ACTIVITY_DATA = 'SET_USERS_ACTIVITY_DATA';
export const SET_EVENTS_LIST = 'SET_EVENTS_LIST';

export function setCommunityData() {
  const url = 'http://stats.loggingroads.org/';

  return function(dispatch) {
    $.get(url).then(function(communityData){
      dispatch({
        type: SET_COMMUNITY_DATA,
        communityData
      });
    })
  };
}

export function setUsersActivityData(data) {
  // const url = 'http://stats.loggingroads.org/users';
  // return function(dispatch) {
  //   $.get(url).then(function(communityData){
  //     dispatch({
  //       type: SET_COMMUNITY_DATA,
  //       communityData
  //     });
  //   })
  // };

  return {
    type: SET_USERS_ACTIVITY_DATA,
    usersActivityData: [
      {name: 'Pepi', roads: 33},
      {name: 'Pepi', roads: 33},
      {name: 'Pepi', roads: 33},
      {name: 'Pepi', roads: 33},
      {name: 'Pepi', roads: 33}
    ]
  };
}

