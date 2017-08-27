import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import AlbumsList from 'components/AlbumsList';

class AlbumsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Link to="/">Назад к поиску</Link>
        <h2>Альбомы</h2>
        <AlbumsList />
      </div>
    );
  }
}

AlbumsPage.propTypes = {
};

export default AlbumsPage;
