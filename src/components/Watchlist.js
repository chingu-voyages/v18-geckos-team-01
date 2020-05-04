import React from 'react';
import styled from 'styled-components';

const Watchlist = () => {
  return (
    <WatchlistContainer>
      <WatchlistGrid>Table goes here</WatchlistGrid>
    </WatchlistContainer>
  );
};

export default Watchlist;

const WatchlistContainer = styled.div`
  color: white;
`;

const WatchlistGrid = styled.div``;
