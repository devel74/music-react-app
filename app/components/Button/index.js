/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';

import A from './A';
import Wrapper from './Wrapper';

function Button(props) {
  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <button onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </button>
    );
  }

  if (props.isSubmit) {
    button = (
      <button type="submit" className="btn btn-default">
        {Children.toArray(props.children)}
      </button>
    );
  }

  return (
    <Wrapper>
      {button}
    </Wrapper>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isSubmit: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
