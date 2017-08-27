/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectLibrary = (state) => state.get('library');

const makeSelectAlbums = () => createSelector(
  selectLibrary,
  (globalState) => globalState.get('albums')
);

export {
  selectLibrary,
  makeSelectAlbums,
};
