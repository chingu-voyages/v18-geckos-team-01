import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: #000;
  border: 3px solid #02B2D9;
  border-radius: 30px;
  color: ${props => props.inputColor || "#02B2D9"};
  height: 60px;
  outline: none;
  padding-left: 27px;
  width: 680px;



  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;

  &::placeholder {
    color: #C4C4C4;
  }

`;

const SearchButton = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  left: 655px;
  top: -50px;

  border: 3px solid #02B2D9;
  border-radius: 10px;
  box-sizing: border-box;

  cursor: pointer;

  &::before {
    content: "";
    background-color: #02B2D9;
    display: inline-block;
    position: absolute;
    width: 12.21px;
    height: 0px;
    right: -12px;
    top: 16px;

    border: 2px solid #02B2D9;
    transform: rotate(45deg);
  }

`

function Search({onSubmitSearch}) {
  const [query, setQuery] = useState("");

  const handleChange = event => setQuery(event.target.value);

  return (
    <div>
      <Input placeholder="Find Movies, TV Shows, Celebrities, and more..." onChange = {handleChange} />
      <SearchButton onClick = { ()=>{
        if (query !== '')
          onSubmitSearch(query)
        } } />
    </div>
  )
}

export default Search;