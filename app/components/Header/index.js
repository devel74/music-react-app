import React from 'react';

import { Link } from 'react-router';

import Wrapper from './Wrapper';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <h1><Link to="/">Last FM</Link></h1>
      </Wrapper>
    );
  }
}

export default Header;
