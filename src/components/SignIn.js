import React from 'react';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <SignInContainer>
      <h1>Sign In To Your Account</h1>
      <SignInForm>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <SignInButton>Sign In</SignInButton>
        <h3>
          Don't have an account? <span>Create</span>
        </h3>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 450px;
  height: 450px;
  background: #000;
  border: 5px solid #0087a5;
  box-sizing: border-box;
  border-radius: 25px;
  z-index: 1;

  h1 {
    font-family: Poppins;
    font-weight: 300;
    font-size: 28px;
    line-height: 45px;
    color: #ffc107;
    text-align: center;
  }

  h3 {
    color: white;
    font-weight: 300;
    span {
      cursor: pointer;
      color: #ffc107;
    }
  }
`;

const SignInForm = styled.div`
  text-align: center;

  input {
    font-size: 20px;
    font-weight: 500;
    background: #e5e5e5;
    border-radius: 25px;
    width: 70%;
    height: 2.8rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    border-style: none;
    font-family: inherit;
  }
`;

const SignInButton = styled.button`
  font-size: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: white;
  background: #0087a5;
  border-radius: 25px;
  width: 70%;
  height: 3rem;
  border-style: none;
`;
