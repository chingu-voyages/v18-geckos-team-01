import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../images/star.svg';

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
      <LeftColumnGrid>
        <Poster src={movieDetails.Poster} />
        <Rating>
          <StarIcon src={Star} alt={'star logo for imdb rating'} />
          {movieDetails.imdbRating} / 10
        </Rating>
      </LeftColumnGrid>
      <CenterColumnGrid>
        <Title>{movieDetails.Title}</Title>
        <Plot>{movieDetails.Plot}</Plot>
        <Actors>Starring {movieDetails.Actors}</Actors>
        <Writer>Written by {movieDetails.Writer}</Writer>
      </CenterColumnGrid>
      <RightColumnGrid>
        <SuitabilityRating>
          Rated <span>{movieDetails.Rated}</span>
        </SuitabilityRating>
        <Runtime>
          Runtime <span>{movieDetails.Runtime}</span>
        </Runtime>
        <Genre>
          Genre <span>{movieDetails.Genre}</span>
        </Genre>
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
        <Production>
          Production <span>{movieDetails.Production}</span>
        </Production>
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

const LeftColumnGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
`;

const Poster = styled.img`
  grid-row: 1/2;
  border-radius: 5px;
`;

const Rating = styled.div`
  grid-row: 3/4;
  font-size: 1.2rem;
  padding-top: 1rem;
`;

const StarIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  padding-right: 0.5rem;
`;

const CenterColumnGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20% auto auto auto;
  font-size: 1.2rem;
  margin-left: 2rem;
`;

const Title = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  text-align: center;
  font-size: 2rem;
  align-self: center;
`;

const Plot = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  line-height: 2.2rem;
  padding-top: 1rem;
`;

const Actors = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  align-self: center;
  padding-top: 1rem;
`;

const Writer = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
  padding-top: 1rem;
`;

const RightColumnGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  margin-left: 2rem;
  font-size: 1.2rem;

  span {
    color: #888;
  }
`;

const SuitabilityRating = styled.div`
  grid-row: 2/3;
  padding-bottom: 1rem;
`;

const Runtime = styled.div`
  grid-row: 3/4;
  padding-bottom: 1rem;
`;

const Genre = styled.div`
  grid-row: 4/5;
  padding-bottom: 1rem;
`;

const Released = styled.div`
  grid-row: 5/6;
  padding-bottom: 1rem;
`;

const Director = styled.div`
  grid-row: 6/7;
  padding-bottom: 1rem;
`;

const Country = styled.div`
  grid-row: 7/8;
  padding-bottom: 1rem;
`;

const Language = styled.div`
  grid-row: 8/9;
  padding-bottom: 1rem;
`;

const Production = styled.div`
  grid-row: 9/10;
  padding-bottom: 1rem;
`;
