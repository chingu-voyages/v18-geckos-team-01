import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from '../Watchlist/axios-watchlist';
import Star from '../images/star.svg';
import Plus from '../images/plus.svg';

const MovieCard = props => {
    const onAddToWatchlistClickedHandler = () => {
        const movieToAdd = {
            id: props.id,
            poster: props.poster,
            title: props.title,
            rating: props.imdbRating,
            year: props.year
        };

        axios
            .post('./watchlist.json', movieToAdd)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

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
                <StarIcon src={Star} alt={'star logo for imdb rating'} />
                <span>{props.imdbRating}</span>
                <CardText>
                    <CardTextTitle>{props.title}</CardTextTitle>
                    <Year>{props.year}</Year>
                </CardText>
                <Link to={`/watchlist`}>
                    <AddToWatchlist
                        src={Plus}
                        alt={'plus sign icon to add movie to watchlist'}
                        onClick={onAddToWatchlistClickedHandler}
                    />
                </Link>
            </CardFooter>
        </Card>
    );
};

export default MovieCard;

const Card = styled.div`
  flex-direction: column;
  border: 2px solid #f9c132;
  border-radius: 25px 25px 0px 0px;
  width: 220px;
  height: 260px;
  margin-top: 20px;

  @media only screen and (max-width: 499px) {
    width: 160px;
    height: 200px;
  }

  @media only screen and (max-width: 320px) {
    width: 200px;
    height: 240px;
  }
`;

const Poster = styled.img`
  border-bottom: 2px solid #f9c132;
  border-radius: 25px 25px 0px 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const CardFooter = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 30% 70%;
  background-color: black;
  border: 2px solid #f9c132;
  border-top: none;
  border-radius: 0px 0px 25px 25px;
  height: 90px;
  color: white;
  margin-top: -7px;
  margin-left: -2px;
  width: inherit;

  @media only screen and (max-width: 499px) {
    height: 60px;
    font-size: 0.8rem;
  }
`;

const StarIcon = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 1.2rem;
  height: 1.2rem;
  padding: 0.5rem 0.5rem 0rem 0.5rem;

  @media only screen and (max-width: 499px) {
    width: 1rem;
    height: 1rem;
  }
`;

const CardText = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  padding: 10px 0px 0px 10px;
  flex-wrap: wrap;
  font-weight: 600;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  cursor: pointer;
  align-self: start;
`;

const CardTextTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Year = styled.div`
  font-weight: 300;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const AddToWatchlist = styled.img`
  grid-column: 2/3;
  grid-row: 2/3;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  align-self: end;
  margin-bottom: 0.5rem;
  justify-self: center;

  @media only screen and (max-width: 499px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;