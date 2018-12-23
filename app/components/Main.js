import React from 'react';
import { Link } from 'react-router-dom';

/* the main page for the index route of this app */
const Main = () => (<div>
      <h1>Hello World!</h1>

      <Link to='/about'>Learn about this awesome fun app!</Link>

      <p>This is a starter <a href="http://glitch.com">Glitch</a> app for React!
        It uses only a few dependencies to get you started on working with
        React including routing.</p>
    </div>
 );

export { Main };
