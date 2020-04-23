import React, { Fragment } from 'react';
import Hero from './Hero';
import MovieGrid from './MovieGrid';

const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <MovieGrid query={props.querySearch} />
    </Fragment>
  );
};

export default HomePage;
