import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import axios from '../Watchlist/axios-watchlist';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios
      .get('https://movie-finder-21a43.firebaseio.com/watchlist.json')
      .then(response => {
        setWatchlist(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(watchlist);

  return (
    <WatchlistContainer>
      <WatchlistGrid></WatchlistGrid>
    </WatchlistContainer>
  );
};

export default Watchlist;

const WatchlistContainer = styled.div`
  color: white;
`;

const WatchlistGrid = styled.div``;