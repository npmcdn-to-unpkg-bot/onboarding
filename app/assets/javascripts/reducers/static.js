import React from 'react';

function setCommunityData(state, communityData) {
  return Object.assign({}, state, {communityData});
}

function setUsersActivityData(state, usersActivityData) {
  return Object.assign({}, state, {usersActivityData});
}

function setCampaingsList(state, campaingsList) {
  return Object.assign({}, state, {campaingsList});
}

function setEventsList(state, eventsList) {
  return Object.assign({}, state, {eventsList});
}

export default function staticReducer(state = {} , action) {
  switch (action.type) {
    case 'SET_COMMUNITY_DATA':
      return setCommunityData(state, action.communityData);
    case 'SET_USERS_ACTIVITY_DATA':
      return setUsersActivityData(state, action.usersActivityData);
    case 'SET_CAMPAINGS_LIST':
      return setCampaingsList(state, action.campaingsList);
    case 'SET_EVENTS_LIST':
      return setEventsList(state, action.eventsList);
    default:
      return state;
  }
}
