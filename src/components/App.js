import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movie';
import Actor from './ActorPage';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Header />
    <Router>
      <Movie path="/movie/:movieId" />
      <Actor path="/actor/:actorId" />
      <Home path="/" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
