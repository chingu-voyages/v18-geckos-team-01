import React, { useState, useEffect, Fragment } from 'react';
import axios from '../Watchlist/axios-watchlist';
import trashcan from '../images/trashcan.svg';
import styled from 'styled-components';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const database = 'https://movie-finder-21a43.firebaseio.com/watchlist.json';

  useEffect(() => {
    axios
      .get(database)
      .then(response => {
        setWatchlist(Object.values(response.data));
      })
      .catch(error => console.log(error));
  }, []);

  console.log('Watchlist: ', watchlist);

  const onRemoveMovieClickedHandler = (id) => {
    const movieToRemove = watchlist.filter(item => item.id !== id);

    axios
      .put('./watchlist.json', movieToRemove)
      .then(response => {
        setWatchlist(response.data);
      })
      .catch(error => console.log(error));
  }

  return (
    <WatchlistContainer>
      <WatchlistGrid>
        <GridHeaders></GridHeaders>
        {watchlist.map(movie => (
          <Fragment>
            <Poster src={movie.poster} />
            <Title>{movie.title}</Title>
            <Rating>{movie.imdbRating}</Rating>
            <Year>{movie.year}</Year>
            <Trash onClick={() => onRemoveMovieClickedHandler(movie.id)}>
              <img
                src={trashcan}
                alt="trash can icon to remove movie from watchlist"
              />
            </Trash>
          </Fragment>
        ))}
      </WatchlistGrid>
    </WatchlistContainer>
  );
};

export default Watchlist;

const WatchlistContainer = styled.div`
  color: white;
  font-weight: 600;
`;

const WatchlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  align-items: center;
  border-radius: 5px;
`;

const GridHeaders = styled.div``;

const Poster = styled.img`
  grid-column: 1/2;
  width: 4rem;
  height: 6rem;
`;

const Title = styled.div`
  grid-column: 2/3;
`;

const Rating = styled.div`
  grid-column: 3/4;
`;

const Year = styled.div`
  grid-column: 4/5;
`;

const Trash = styled.button`
  grid-column: 5/6;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
