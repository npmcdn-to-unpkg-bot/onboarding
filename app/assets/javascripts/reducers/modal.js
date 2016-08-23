'use strict';

import {
  SET_SHARE_MODAL
} from '../actions/modal';

const initialState = {
  shareModalOpen: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SHARE_MODAL: {
      return Object.assign({}, state, {
        shareModalOpen: action.payload
      });
    }
    default:
      return state;
  }
}
