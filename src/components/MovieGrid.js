import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieGrid = props => {
  const [movielist, setMovieList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (props.query !== '' && props.userMovies.length === 0) {
      fetch(
        'https://movie-database-imdb-alternative.p.rapidapi.com/?&r=json&s=' +
        props.query,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
            'x-rapidapi-key':
              '3e7a2c9dfdmsh9b187f8271e7cecp1c2430jsn7fda3a194e2b'
          }
        }
      )
        .then(response => response.json())
        .then(response => setMovieList(response.Search))
        .catch(error => {
          console.error(error);
          setError(error);
        });

    } else if (props.userMovies.length > 0) {
      setMovieList(props.userMovies);
    }
  }, [props]);

  return (
    <MovieGridCards>
      {movielist.map((element, index) => (
        <MovieCard
          key={index}
          poster={element.Poster}
          year={element.Year}
          title={element.Title}
          imdbRating={element.imdbRating}
          id={element.imdbID}
        />
      ))}
    </MovieGridCards>
  );
};

export default MovieGrid;

const MovieGridCards = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(4, auto);
  grid-auto-rows: 400px;

  @media (max-width: 1140px) {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and (max-width: 499px) {
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: 310px;
  }

  @media only screen and (max-width: 320px) {
    grid-template-columns: auto;
    grid-auto-rows: 340px;
  }
`;