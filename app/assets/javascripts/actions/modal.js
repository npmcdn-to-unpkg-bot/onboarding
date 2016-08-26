import React from 'react';

export const SET_SHARE_MODAL = 'SET_SHARE_MODAL';

export function setShareModal(status) {
  return {
    type: SET_SHARE_MODAL,
    payload: status
  };
}
