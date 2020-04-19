import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.a`
  display: inline-block;
  font-size: 1.2em;
  text-transform: capitalize;
  line-height: 60px;
  color: ${props => props.color || 'white'};
  padding: .5em;
  height: 45px;
  border-bottom: 3px solid transparent;
  transition: border-bottom 250ms;

  &:hover {
    border-bottom: solid 3px #f9c132;
  }
`;

function NavItem(props) {
  return (
    <StyledNavItem 
      color={props.color}
      href={ props.href }>
      { props.isLoggedIn ? 'Logged In' : props.text }
    </StyledNavItem>
  )
}

export default NavItem;