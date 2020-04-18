import React, {useState} from 'react';
import styled from 'styled-components';

const CreateAccount = props => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerAccount = async (p_email, p_password) => {
    const response = await fetch('http://localhost:1337/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        "username": p_email,
        "email": p_email,
        "password": p_password
      })
    });
    props.onCreateAccountCloseButtonClicked();
    console.log(response);
    return response.json();
  }

  return (
    <CreateAccountContainer
      showCreateAccountModal={props.showCreateAccountModal}
    >
      <CloseButton onClick={props.onCreateAccountCloseButtonClicked}>
        &times;
      </CloseButton>
      <CreateAccountForm>
        <h1>Create a New Account</h1>
        <input type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
        <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
        <SignUpButton onClick={() => {registerAccount(email, password)}}>Sign Up</SignUpButton>
        <h3>Already have an account? <span>Sign In</span></h3>
        <h2>
            Or register with <span>Facebook</span>
          </h2>
      </CreateAccountForm>
    </CreateAccountContainer>
  );
};

export default CreateAccount;

const CreateAccountContainer = styled.div`
  display: ${props => (props.showCreateAccountModal ? 'block' : 'none')};
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

const CreateAccountForm = styled.div`
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

const SignUpButton = styled.button`
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
