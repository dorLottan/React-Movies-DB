import React from 'react';

import Navigation from './elements/Navigation';

import Spinner from '../components/elements/Spinner';
import { useActorFetch } from './hooks/useActorFetch';
import NoImage from '../components/images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import MovieThumbNoHover from '../components/elements/MovieThumbNoHover';
import MovieThumb from '../components/elements/MovieThumb';
import { StyledActorInfo } from './styles/StyledActorInfo';
import { StyledActorMoviesGrid } from './styles/StyledActorMoviesGrid';
const Movie = ({ actorId }) => {
  const [actor, loading, error] = useActorFetch(actorId);

  console.log(actor);

  if (error) return <div>something went wrong</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={actor.name} />
      <StyledActorInfo>
        <div className="actorinfo-content">
          <div className="actorinfo-thumb">
            <MovieThumbNoHover
              image={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
              clickable={false}
            />
            <div className="actorinfo-info">
              <h3>GENDER:</h3>
              <h2>{actor.gender === 2 ? 'MALE' : 'FEMALE'}</h2>
              <br />
              <h3>BIRTHDAY:</h3>
              <h2>{actor.birthday}</h2>
              <br />

              <h3>KNOWN FOR: </h3>
              <h2>{actor.known_for_department}</h2>
              <br />

              <h3>BORN AT: </h3>
              <h2>{actor.place_of_birth}</h2>
            </div>
          </div>
          <div className="actorinfo-text">
            <h1>{actor.name}</h1>
            <h3>BIOGRAPHY</h3>
            <p>{actor.biography}</p>
          </div>
        </div>
        <StyledActorMoviesGrid>
          <h1>KNOWN FOR</h1>
          <div className="items">
            {actor.knownfor.cast.map(movie => (
              <div className="item">
                <MovieThumb
                  key={movie.id}
                  clickable
                  image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                      : NoImage
                  }
                  movieId={movie.id}
                />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </StyledActorMoviesGrid>
      </StyledActorInfo>
    </>
  );
};

export default Movie;
