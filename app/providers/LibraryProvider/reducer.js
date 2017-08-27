/*
 *
 * LibraryProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  ARTIST_ALBUMS_REQUEST,
  ARTIST_ALBUMS_RECEIVE,
} from './constants';

const initialState = fromJS({
  albums: [],
});

function LibraryProviderReducer(state = initialState, action) {
  switch (action.type) {
    case ARTIST_ALBUMS_REQUEST: {
      return state;
    }
    case ARTIST_ALBUMS_RECEIVE: {
      return state.setIn(['albums'], action.res.topalbums.album);
    }
    default:
      return state;
  }
}

export default LibraryProviderReducer;
