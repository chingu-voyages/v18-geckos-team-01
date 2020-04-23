import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = () => {
  let { id } = useParams();

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key': '3e7a2c9dfdmsh9b187f8271e7cecp1c2430jsn7fda3a194e2b'
        }
      }
    )
      .then(response => response.json())
      .then(response => setMovieDetails(response))
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(movieDetails);

  return (
    <MovieDetailsContainer>
      <Poster src={movieDetails.Poster} />
      <CenterColumnGrid>
        <Title>{movieDetails.Title}</Title>
        <Plot>{movieDetails.Plot}</Plot>
        <Actors>{movieDetails.Actors}</Actors>
        <Writer>Written by {movieDetails.Writer}</Writer>
      </CenterColumnGrid>
      <RightColumnGrid>
        <Genre>
          Genre <span>{movieDetails.Genre}</span>
        </Genre>
        <Rating>
          Rated <span>{movieDetails.Rated}</span>
        </Rating>
        <Runtime>
          Runtime <span>{movieDetails.Runtime}</span>
        </Runtime>
        <Released>
          Release Date <span>{movieDetails.Released}</span>
        </Released>
        <Director>
          Director <span>{movieDetails.Director}</span>
        </Director>
        <Country>
          Country <span>{movieDetails.Country}</span>
        </Country>
        <Language>
          Language(s) <span>{movieDetails.Language}</span>
        </Language>
      </RightColumnGrid>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;

const MovieDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: auto;
  color: white;
`;

const Poster = styled.img`
  grid-column: 1/2;
  border-radius: 5px;
`;

const CenterColumnGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20% 40% 20% 20%;
  font-size: 1.2rem;
  margin-left: 2rem;
`;

const Title = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  text-align: center;
  font-size: 2rem;
`;

const Plot = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  line-height: 2.2rem;
`;

const Actors = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  color: #19b2d9;
`;

const Writer = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
`;

const RightColumnGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  margin-left: 2rem;
  font-size: 1.2rem;

  span {
    color: #888;
  }
`;

const Genre = styled.div`
  grid-row: 2/3;
`;

const Rating = styled.div`
  grid-row: 3/4;
`;

const Runtime = styled.div`
  grid-row: 4/5;
`;

const Released = styled.div`
  grid-row: 5/6;
`;

const Director = styled.div`
  grid-row: 6/7;
`;

const Country = styled.div`
  grid-row: 7/8;
`;

const Language = styled.div`
  grid-row: 8/9;
`;
