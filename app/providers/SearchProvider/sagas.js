import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';

import { AUTH_PARAMS, API_SERVER } from 'utils/constants';
import { setDataUrl } from 'utils/services';

import request from 'utils/request';

import { searchArtistReceive } from 'providers/SearchProvider/actions';

import {
  SEARCH_ARTIST_REQUEST,
} from './constants';

/**
 * Getting Artist Search
 */
export function* getSearchArtistRequest(action) {
  const params = {
    method: 'artist.search',
    artist: action.artistName,
    limit: 12,
    page: 1,
    api_key: AUTH_PARAMS.API_KEY,
    format: 'json',
  };
  try {
    // Call our request helper (see 'utils/request')
    action.setIsLoading(true);
    const res = yield call(request, setDataUrl(API_SERVER, params));
    yield put(searchArtistReceive(res));
    action.setIsLoading(false);
  } catch (err) {
    console.log('error app saga', err); // eslint-disable-line
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* authSaga() {
  yield takeLatest(SEARCH_ARTIST_REQUEST, getSearchArtistRequest);
}

export default authSaga;
