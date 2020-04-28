import React, { Fragment } from 'react';
import Hero from './Hero';
import MovieGrid from './MovieGrid';

const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <MovieGrid query={props.querySearch} userMovies={props.userMovies} onSaveMovie={props.onSaveMovie} />
    </Fragment>
  );
};

export default HomePage;
