import React, { useState } from 'react';
import styled from 'styled-components';

function Search({ onSubmitSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = event => setQuery(event.target.value);

  const handleEnterKey = event => {
    if (event.key === "Enter" && query !== '')
      onSubmitSearch(query);
  }

  const handleSearch = () => {
    if (query !== '') {
      onSubmitSearch(query);
    } 
  }

  return (
    <SearchDiv>
      <Input placeholder="Find Movies, TV Shows, Celebrities, and more..." 
            onChange = {handleChange} 
            onKeyUp = {handleEnterKey}
          />

      <SearchButton onClick = {handleSearch} />
    </SearchDiv>
  );
}

export default Search;

const Input = styled.input`
  box-sizing: border-box;
  background: #000;
  border: 3px solid #02b2d9;
  border-radius: 30px;
  color: ${props => props.inputColor || '#02B2D9'};
  height: 50px;
  outline: none;
  padding-left: 1.8em;
  padding-right: 3em;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2em;
  line-height: 36px;
  width: 100%;
  text-overflow: ellipsis;

  &::placeholder {
    color: #c4c4c4;
  }

  @media screen and (max-width: 771px) {
    margin-top: 8px;
    align-self: center;
    font-size: 0.9em;
  }
`;

const SearchButton = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 31px;
  top: 13px;

  border: 3px solid #02b2d9;
  border-radius: 10px;
  box-sizing: border-box;

  cursor: pointer;

  &::before {
    content: '';
    background-color: #02b2d9;
    display: inline-block;
    position: absolute;
    width: 9.21px;
    height: 0px;
    right: -11px;
    top: 13px;

    border: 2px solid #02b2d9;
    transform: rotate(45deg);
  }

  @media screen and (max-width: 771px) {
    top: 21px;
  }
`;
const SearchDiv = styled.div`
  position: relative;
  width: 40%;

  @media screen and (max-width: 771px) {
    width: 60%;
  }
`;
