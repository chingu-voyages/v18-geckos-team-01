import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../images/star.svg';
import Plus from '../images/plus.svg';

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
      <MovieDetailsGrid>
        <LeftColumnGrid>
          <Poster src={movieDetails.Poster} />
          <Rating>
            <StarIcon src={Star} alt={'star logo for imdb rating'} />
            {movieDetails.imdbRating} / 10
          </Rating>
          <AddToWatchlist
            src={Plus}
            alt={'plus sign to add movie to watchlist'}
          />
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
      </MovieDetailsGrid>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;

const MovieDetailsContainer = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const MovieDetailsGrid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: auto;
  color: white;

  @media (max-width: 1280px) {
    grid-template-columns: 30% 40% 30%;
  }

  @media (max-width: 1060px) {
    grid-template-columns: 35% 30% 35%;
  }

  @media (max-width: 1024px) {
    position: relative;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, auto);
  }

  @media (max-width: 725px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
  }
`;

const LeftColumnGrid = styled.div`
  display: grid;
  grid-column: 1/2;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: center;

  @media (max-width: 725px) {
    grid-column: 1 / 2;
  }
`;

const Poster = styled.img`
  grid-row: 1/2;
  grid-column: 1 / span 2;
  border-radius: 5px;
  justify-self: center;
  margin-bottom: 1rem;
`;

const Rating = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  font-size: 1.2rem;
  align-self: center;
`;

const StarIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  padding-right: 0.5rem;
`;

const AddToWatchlist = styled.img`
  grid-row: 2/3;
  grid-column: 2/3;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  align-self: center;
  justify-self: end;
`;

const CenterColumnGrid = styled.div`
  display: grid;
  grid-column: 2/3;
  grid-template-columns: auto;
  grid-template-rows: 20% repeat(3, auto);
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-right: 2rem;

  @media (max-width: 725px) {
    grid-column: 1 / 2;
    grid-row: 2/3;
    margin-top: 2rem;
  }
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
  grid-column: 3/4;
  grid-template-columns: auto;
  grid-template-rows: repeat(8, auto);
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.2rem;

  span {
    color: #888;
  }

  @media (max-width: 1024px) {
    grid-column: 1 / span 2;
    grid-row: 2/3;
    margin-top: 2rem;
  }

  @media (max-width: 725px) {
    grid-column: 1/2;
    grid-row: 3/4;
    margin-top: 6rem;
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
