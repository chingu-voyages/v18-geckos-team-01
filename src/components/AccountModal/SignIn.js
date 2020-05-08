import React, { useState } from 'react';
import { FormContainer, FormButton } from './SharedStyles/FormStyles';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jwt, setJwt] = useState('');

  const SignInToAccount = async (p_email, p_password) => {
    let response = await fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: p_email,
        password: p_password
      })
    });
    let result = await response.json();
    props.onSignInSuccess(result.jwt, result.user);
    console.log(result);
    return result;
  };

  return (
    <FormContainer>
      <h1>Sign In To Your Account</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <FormButton
        onClick={() => {
          SignInToAccount(email, password);
        }}
      >
        Sign In
      </FormButton>
      <h3>
        Don't have an account?{' '}
        <span onClick={props.onCreateClickedHandler}>Create</span>
      </h3>
    </FormContainer>
  );
};

export default SignIn;
