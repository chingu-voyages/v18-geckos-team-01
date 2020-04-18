import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import CreateAccount from './CreateAccount';

const SignIn = props => {
  const [showCreateAccountModal, setCreateAccountModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onCreateClickedHandler = () => {
    setCreateAccountModal(true);
  };

  const onCreateClosedClickedHandler = () => {
    setCreateAccountModal(false);
  };

  const SignInToAccount = async (p_email, p_password) => {
    let response = await fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        "identifier": p_email,
        "password": p_password
      })
    });
    let result = await response.json();
    props.onSignInCloseButtonClicked();
    alert('Logged in as ' + result.user.username + " jwt: " + result.jwt);
    console.log(result);
    return result;
  }

  return (
    <Fragment>
      <SignInContainer showSignInModal={props.showSignInModal}>
        <CloseButton onClick={props.onSignInCloseButtonClicked}>
          &times;
        </CloseButton>
        <SignInForm>
          <h1>Sign In To Your Account</h1>
          <input type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
          <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
          <SignInButton onClick={()=>{SignInToAccount(email, password)}}>Sign In</SignInButton>
          <h3>Don't have an account? <span onClick={onCreateClickedHandler}>Create</span></h3>
          <h2>
            Or sign in with <span>Facebook</span>
          </h2>
        </SignInForm>
      </SignInContainer>
      <CreateAccount
        showCreateAccountModal={showCreateAccountModal}
        onCreateAccountCloseButtonClicked={onCreateClosedClickedHandler}
      />
    </Fragment>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  display: ${props => (props.showSignInModal ? 'block' : 'none')};
  position: absolute;
  top: 25%;
  left: 33%;
  width: 450px;
  height: 450px;
  background-color: #000;
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
