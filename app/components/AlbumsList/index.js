import React, { PropTypes } from 'react';

import Album from './Album';
import defaultImage from './img/vinil.png';

import Wrapper from './Wrapper';

const AlbumsList = (props) => (
  <Wrapper>
      <Album image={defaultImage} name="Название альбома" />
      <Album image={defaultImage} name="Название альбома" />
      <Album image={defaultImage} name="Название альбома" />
      <Album image={defaultImage} name="Название альбома" />
      <Album image={defaultImage} name="Название альбома" />
      <Album image={defaultImage} name="Название альбома" />
      <Album image={defaultImage} name="Название альбома" />
      <Album image={defaultImage} name="Название альбома" />
  </Wrapper>
);

AlbumsList.propTypes = {
  albums: PropTypes.array,
};

export default AlbumsList;
