import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router';

import { artistAlbumsRequest } from 'providers/LibraryProvider/actions';
import { makeSelectAlbums } from 'providers/LibraryProvider/selectors';

import AlbumsList from 'components/AlbumsList';

class AlbumsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const artistName = this.props.params.artistName;
    this.props.getAlbums(artistName);
  }
  render() {
    return (
      <div>
        <Link to="/">Назад к поиску</Link>
        <h2>Альбомы {this.props.params.artistName}</h2>
        <AlbumsList albums={this.props.albums} />
      </div>
    );
  }
}

AlbumsPage.propTypes = {
  getAlbums: PropTypes.func,
  params: PropTypes.object,
  albums: PropTypes.object,
};

const mapStateToProps = createSelector(
  makeSelectAlbums(),
  (albums) => ({
    albums,
  })
);

export function mapDispatchToProps(dispatch) {
  return {
    getAlbums: (artistName) => dispatch(artistAlbumsRequest(artistName)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);
