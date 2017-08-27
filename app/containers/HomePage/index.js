/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';

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
        <SearchForm />
        <ArtistList />
      </div>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;
