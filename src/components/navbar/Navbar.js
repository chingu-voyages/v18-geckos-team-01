import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import Search from '../Search';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import styled from 'styled-components';
import Logo from '../../images/cinema.svg';

function Navbar({
  onSubmitSearch,
  onSignInLinkClicked,
  onWatchListClicked,
  isLoggedIn,
  user,
  open,
  setOpen
}) {
  return (
    <StyledNav>
      <Link to={'/'}>
        <StyledLogo>
          <img src={Logo} alt={'film reel logo'} href={'#'} />
        </StyledLogo>
      </Link>
      <NavItem text="movies" href="#" />
      <NavItem text="TV shows" href="#" />
      <Search onSubmitSearch={onSubmitSearch} />
      <NavItem text="friends" href="#" />
      <Link to={'/watchlist'}>
        {/* <NavItem text="watchlist" onClick={onWatchListClicked} href="#" /> */}
        <NavItem text="watchlist" href="#" />
      </Link>
      <NavItem
        onClick={onSignInLinkClicked}
        isLoggedIn={isLoggedIn}
        user={user}
        color="#f9c132"
        text="sign in"
      />
      <Burger
        onClick={onSignInLinkClicked}
        isLoggedIn={isLoggedIn}
        open={open}
        setOpen={setOpen}
      />
      <BurgerMenu open={open} />
    </StyledNav>
  );
}

export default Navbar;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.2em;

  @media screen and (max-width: 771px) {
    justify-content: space-between;
  }
`;

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  margin-left: 10px;
  line-height: 60px;

  @media screen and (max-width: 771px) {
    margin-top: 8px;
  }
`;
