/*
 *
 * SearchProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  SEARCH_ARTIST_REQUEST,
  SEARCH_ARTIST_RECEIVE,
} from './constants';

const initialState = fromJS({
  searchResult: null,
});

function SearchProviderReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST_REQUEST: {
      return state;
    }
    case SEARCH_ARTIST_RECEIVE: {
      return state.setIn(['searchResult'], action.res.results);
    }
    default:
      return state;
  }
}

export default SearchProviderReducer;
