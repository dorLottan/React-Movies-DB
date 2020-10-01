import React, { useState } from 'react';
import { Link } from '@reach/router';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable, movieName }) => {
  const [hovered, setHovered] = useState(false);

  //set the text
  const onMouseover = e => {
    setHovered(true);
  };
  //clear the text
  const onMouseout = e => {
    setHovered(false);
  };

  return (
    <StyledMovieThumb onMouseEnter={onMouseover} onMouseLeave={onMouseout}>
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <img className="clickable" src={image} alt="movieThumb" />
          {hovered ? <h2 className="movie-title">{movieName}</h2> : null}
        </Link>
      ) : (
        <img src={image} alt="movieThumb" />
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
