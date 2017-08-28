import {
  SEARCH_ARTIST_REQUEST,
  SEARCH_ARTIST_RECEIVE,
} from './constants';

export function searchArtistRequest(artistName, setIsLoading) {
  return {
    type: SEARCH_ARTIST_REQUEST,
    artistName,
    setIsLoading,
  };
}

export function searchArtistReceive(res) {
  return {
    type: SEARCH_ARTIST_RECEIVE,
    res,
  };
}
