/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectSearch = (state) => state.get('search');

const makeSelectSearchResult = () => createSelector(
  selectSearch,
  (globalState) => globalState.get('searchResult')
);

export {
  selectSearch,
  makeSelectSearchResult,
};
