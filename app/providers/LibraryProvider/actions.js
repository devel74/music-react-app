/*
 *
 * LibraryProvider actions
 *
 */

import {
  ARTIST_ALBUMS_REQUEST,
  ARTIST_ALBUMS_RECEIVE,
} from './constants';

export function artistAlbumsRequest(artistName) {
  return {
    type: ARTIST_ALBUMS_REQUEST,
    artistName,
  };
}

export function artistAlbumsReceive(res) {
  return {
    type: ARTIST_ALBUMS_RECEIVE,
    res,
  };
}
