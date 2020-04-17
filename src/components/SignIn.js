import React from 'react';
import styled from 'styled-components';

const SignIn = props => {
  return (
    <SignInContainer showSignInModal={props.showSignInModal}>
      <CloseButton onClick={props.onSignInCloseButtonClicked}>&times;</CloseButton>
      <SignInForm>
        <h1>Sign In To Your Account</h1>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <SignInButton>Sign In</SignInButton>
        <h3>
          Don't have an account? <span>Create</span>
        </h3>
        <h2>
          Or sign in with <span>Facebook</span>
        </h2>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;

// const ModalBackground = styled.div`
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   filter: blur(8px);
//   -webkit-filter: blur(8px);
//   -moz-filter: blur(8px);
//   -o-filter: blur(8px);
//   -ms-filter: blur(8px);
// `;

const SignInContainer = styled.div`
  display: ${props => (props.showSignInModal ? 'block' : 'none')};
  position: absolute;
  top: 25%;
  left: 33%;
  width: 450px;
  height: 450px;
  background: #000;
  border: 5px solid #0087a5;
  box-sizing: border-box;
  border-radius: 25px;
  z-index: 1;
`;

const CloseButton = styled.span`
  cursor: pointer;
  color: white;
  font-size: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  line-height: 18px;
`;

const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 25px;
  height: 100%;
  width: 100%;

  h1 {
    font-family: Poppins;
    font-weight: 300;
    font-size: 28px;
    line-height: 45px;
    color: #ffc107;
  }

  h3 {
    color: white;
    font-weight: 400;

    span {
      cursor: pointer;
      color: #ffc107;

      &:hover {
        color: #cc8e00;
      }
    }
  }

  h2 {
    color: white;
    font-size: 22px;
    font-weight: 400;

    span {
      cursor: pointer;
      color: #3b5998;
      font-weight: 600;

      &:hover {
        color: #22407f;
      }
    }
  }

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
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: white;
  background: #0087a5;
  border-radius: 25px;
  width: 72%;
  height: 3rem;
  border-style: none;
  margin-bottom: 1rem;

  &:hover {
    background: #006e8c;
  }
`;
