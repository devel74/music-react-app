import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { searchArtistRequest } from 'providers/SearchProvider/actions';
import { makeSelectSearchResult } from 'providers/SearchProvider/selectors';

import SearchForm from 'components/SearchForm';
import ArtistList from 'components/ArtistList';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'Home page description' },
          ]}
        />
        <SearchForm searchArtist={this.props.searchArtist} />
        {this.props.searchResult && this.props.searchResult['opensearch:totalResults'] === '0' &&
          <p>Нет результатов</p>
        }
        {this.props.searchResult &&
          <ArtistList artists={this.props.searchResult.artistmatches.artist || []} />
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  searchArtist: React.PropTypes.func,
  searchResult: React.PropTypes.object,
};

const mapStateToProps = createSelector(
  makeSelectSearchResult(),
  (searchResult) => ({
    searchResult,
  })
);

export function mapDispatchToProps(dispatch) {
  return {
    searchArtist: (name) => dispatch(searchArtistRequest(name)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
