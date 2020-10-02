import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';
import Actor from './ActorPage';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/React-Movies-DB" />
      <Movie path="/React-Movies-DB/movie/:movieId" />
      <Actor path="/React-Movies-DB/actor/:actorId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
