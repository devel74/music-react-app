import React, { PropTypes } from 'react';

import Album from './Album';
import defaultImage from './img/vinil.png';

import Wrapper from './Wrapper';

const AlbumsList = (props) => (
  <Wrapper>
    {props.albums.map((album, i) => (
      <Album
        key={i}
        image={album.image[3]['#text'] || defaultImage}
        name={album.name !== '(null)' ? album.name : 'Нет названия'}
      />
    ))}
  </Wrapper>
);

AlbumsList.propTypes = {
  albums: PropTypes.array,
};

export default AlbumsList;
