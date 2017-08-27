import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ArtistList = (props) => (
  <div>
    <ul className="list-group">
      <li className="list-group-item">
        <Link to="/">Tiesto</Link>
      </li>
      <li className="list-group-item">
        <Link to="/">Skrillex</Link>
      </li>
      <li className="list-group-item">
        <Link to="/">Armen Van Buuren</Link>
      </li>
    </ul>
  </div>
);

ArtistList.propTypes = {
  artists: PropTypes.array,
};

export default ArtistList;
