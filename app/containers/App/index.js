/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

export function App(props) {
  return (
    <div className="container">
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <Header />
          {React.Children.toArray(props.children)}
          <Footer />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
