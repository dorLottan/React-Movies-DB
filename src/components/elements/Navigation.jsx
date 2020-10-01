import React from 'react';
import { Link } from '@reach/router';
import FontAwesome from 'react-fontawesome';

import { StyledNavigation } from '../styles/StyledNavigation';

const Navigation = ({ movie }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p>
          <FontAwesome className="fas fa-home" name="home" size="2x" />
        </p>
      </Link>
      <p>|</p>
      <p>{movie}</p>
    </div>
  </StyledNavigation>
);

export default Navigation;
