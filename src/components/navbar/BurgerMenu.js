import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  background: black;
  box-shadow: -5px 0 10px black;
  top: 0;
  right: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.25s;
  
  @media (max-width: 771px) {
    /* width: 100%; */
  }

  a {
    display: block;
    padding: 0 1.5rem;
    
    &:nth-child(1) {
    margin-top: 3rem;
    }
  }
`;

function BurgerMenu({onSubmitSearch, onSignInLinkClicked, onWatchListClicked, isLoggedIn, open}) {
  return (
    <StyledMenu open={open}>
      <NavItem text="movies" href="#"/>
      <NavItem text="TV shows" href="#"/>
      <NavItem text="friends" href="#"/>
      <NavItem text="watchlist" onClick={onWatchListClicked} href="#"/>
      <NavItem onClick={onSignInLinkClicked} isLoggedIn={isLoggedIn} color="#f9c132" text="sign in" />
    </StyledMenu>
  )
}
export default BurgerMenu;