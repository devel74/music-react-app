import React from 'react';

import { Link } from 'react-router';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1><Link to="/">Last FM</Link></h1>
      </div>
    );
  }
}

export default Header;
