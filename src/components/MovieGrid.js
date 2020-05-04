import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieCard = props => {
  return (
    <Card>
      <Link to={`/movieDetails/${props.id}`}>
        <Poster
          className="movie-card-child"
          alt={`Movie title: ${props.title}`}
          src={props.poster}
        />
      </Link>
      <CardFooter>
        <CardText>
          {props.title} ({props.year})
        </CardText>
        <span
          style={{ color: 'white' }}
          onClick={() => {
            props.onSaveMovie(props.title, props.id);
          }}
        >
          Add to Watchlist
        </span>
      </CardFooter>
    </Card>
  );
};

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
          id={element.imdbID}
          onSaveMovie={props.onSaveMovie}
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

  @media (max-width: 1140px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 600px) {
    width: 180px;
    height: 230px;
  }
`;

const Card = styled.div`
  flex-direction: column;
  border: 2px solid #f9c132;
  border-radius: 25px;
  width: 220px;
  height: 260px;
  margin-top: 20px;
`;

const Poster = styled.img`
  border-bottom: 2px solid #f9c132;
  border-radius: 25px 25px 0px 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const CardText = styled.div`
  padding: 10px 15px;
  flex-wrap: wrap;
  color: white;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  cursor: pointer;
`;

const CardFooter = styled.div`
  background-color: black;
  border: 2px solid #f9c132;
  border-top: none;
  border-radius: 0px 0px 25px 25px;
  height: 60px;
`;
