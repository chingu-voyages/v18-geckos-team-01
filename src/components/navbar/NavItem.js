import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.a`
  display: inline-block;
  font-size: 1.2em;
  text-transform: capitalize;
  line-height: 60px;
  color: ${props => props.color || 'white'};
  padding: 0.5em;
  height: 60px;

  @media (max-width: 977px) {
    font-size: 1em;
  }
`;

function NavItem(props) {
  return (
    <StyledNavItem color={props.color} href={props.href} onClick={props.onClick}>
      {props.text}
    </StyledNavItem>
  );
}

export default NavItem;
