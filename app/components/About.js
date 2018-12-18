import React from 'react';
import {Link} from 'react-router-dom';

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <h1>About</h1>

      <p>This is a starter react app using react-router-dom to add client-side routes!</p>

      <Link to='/'>Go home</Link>
    </div>
  );
}

export { About };

