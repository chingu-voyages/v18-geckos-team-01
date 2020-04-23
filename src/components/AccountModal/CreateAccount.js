import React, { useState } from 'react';
import { FormContainer, FormButton } from './SharedStyles/FormStyles';

const CreateAccount = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerAccount = async (p_email, p_password) => {
    const response = await fetch('http://localhost:1337/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: p_email,
        email: p_email,
        password: p_password
      })
    });
    props.onCreateAccountSuccess();
    console.log(response);
    return response.json();
  };

  return (
    <FormContainer>
      <h1>Create a New Account</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <FormButton
        onClick={() => {
          registerAccount(email, password);
        }}
      >
        Sign Up
      </FormButton>
      <h3>
        Already have an account?{' '}
        <span onClick={props.onSignInLinkClickedHandler}>Sign In</span>
      </h3>
      <h2>
        Or register with <span>Facebook</span>
      </h2>
    </FormContainer>
  );
};

export default CreateAccount;
