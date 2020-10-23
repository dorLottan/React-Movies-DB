import React from 'react';
import { Link } from '@reach/router';

const NotFound = () => (
  <div style={{ textAlign: 'center' }}>
    <p>nothing found..</p>
    <Link to="/">
      <p>Go Back To Home Page</p>
    </Link>
  </div>
);

export default NotFound;
