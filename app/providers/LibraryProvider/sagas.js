import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';

import { AUTH_PARAMS, API_SERVER } from 'utils/constants';
import { setDataUrl } from 'utils/services';

import request from 'utils/request';

import { artistAlbumsReceive } from './actions';

import {
  ARTIST_ALBUMS_REQUEST,
} from './constants';

/**
 * Getting Artist Albums
 */
export function* getArtistAlbumsRequest(action) {
  const params = {
    method: 'artist.getTopAlbums',
    artist: action.artistName,
    limit: 12,
    page: 1,
    api_key: AUTH_PARAMS.API_KEY,
    format: 'json',
  };
  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, setDataUrl(API_SERVER, params));
    yield put(artistAlbumsReceive(res));
  } catch (err) {
    console.log('error saga', err); // eslint-disable-line
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* LibrarySaga() {
  yield takeLatest(ARTIST_ALBUMS_REQUEST, getArtistAlbumsRequest);
}

// Bootstrap sagas
export default LibrarySaga;
