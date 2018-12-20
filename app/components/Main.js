// const React = require('react');
// const Link = require('react-router-dom').Link
// const UnorderedList = require('./UnorderedList');

import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Heading, Text } from 'grommet';
import { Apps, Archive } from 'grommet-icons';

/* the main page for the index route of this app */
const Main = () => (<div>
      <h1>Hello World!</h1>

      <Link to='/about'>Learn about this app!</Link>

      <p>This is a starter <a href="http://glitch.com">Glitch</a> app for React!
        It uses only a few dependencies to get you started on working with
        React including routing.</p>
    </div>
 );

/*
const Main = function () {
  return (
    <div>
      <h1>Hello World!</h1>

      <Link to='/about'>Learn about this app!</Link>

      <p>This is a starter <a href="http://glitch.com">Glitch</a> app for React!
        It uses only a few dependencies to get you started on working with
        React including routing.</p>
    </div>
  );
}
*/

export { Main };

