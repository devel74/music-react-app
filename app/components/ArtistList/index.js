import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ArtistList = (props) => (
  <div>
    {!props.artists &&
      <p>Нет результатов</p>
    }
    <ul className="list-group">
      {props.artists.map((artist, i) => (
        <li key={i} className="list-group-item">
          <Link to={`/albums/${artist.name}`}>{artist.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

ArtistList.propTypes = {
  artists: PropTypes.array,
};

export default ArtistList;
