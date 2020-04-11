import React from 'react';
import NavItem from './NavItem';
import Search from '../Search';
import styled from 'styled-components';
import Logo from '../../images/cinema.svg';

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.2em;
`;

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  margin-left: 10px;
  line-height: 60px;
`;

function Navbar({onSubmitSearch}) {
  return (
    <StyledNav>
      <StyledLogo><img src={Logo} alt={"film reel logo"} href={"#"}/></StyledLogo>
      <NavItem text="movies" href="#"/>
      <NavItem text="TV shows" href="#"/>
      <Search onSubmitSearch={onSubmitSearch} />
      <NavItem text="friends" href="#"/>
      <NavItem text="watchlist" href="#"/>
      <NavItem color="#f9c132" text="sign in" href="#"/>
    </StyledNav>
  )
}

export default Navbar;