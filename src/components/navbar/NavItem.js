import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.a`
  position: relative;
  display: inline-block;
  font-size: 1.2em;
  text-transform: capitalize;
  line-height: 60px;
  color: ${props => props.color || 'white'};
  padding: .5em;
  height: 60px;

  &::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 0%;
    bottom: 10px;
    width: 100%;
    border-bottom: solid 3px #f9c132;
    transform: scale(0);
    transition: transform .15s;
  }

  &:hover:after {
    transform: scale(1);
  }

  @media (max-width: 977px) {
    font-size: 1em;
  }

  @media (max-width: 771px) {
    display: none;
  }
`;

function NavItem(props) {
  return (
     <StyledNavItem color={props.color} href={props.href} onClick={props.onClick}>
    { props.isLoggedIn ? props.user.username : props.text }
    </StyledNavItem>
  );
}

export default NavItem;
