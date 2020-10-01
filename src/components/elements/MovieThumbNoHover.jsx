import React from 'react';

import { StyledMovieThumbNoHover } from '../styles/StyledMovieThumbNoHover';

const MovieThumb = ({ image }) => {
  return (
    <StyledMovieThumbNoHover>
      <img src={image} alt="movieThumb" />
    </StyledMovieThumbNoHover>
  );
};

export default MovieThumb;
