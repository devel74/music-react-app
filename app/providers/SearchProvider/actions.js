import {
  SEARCH_ARTIST_REQUEST,
  SEARCH_ARTIST_RECEIVE,
} from './constants';

export function searchArtistRequest(artistName) {
  return {
    type: SEARCH_ARTIST_REQUEST,
    artistName,
  };
}

export function searchArtistReceive(res) {
  return {
    type: SEARCH_ARTIST_RECEIVE,
    res,
  };
}
