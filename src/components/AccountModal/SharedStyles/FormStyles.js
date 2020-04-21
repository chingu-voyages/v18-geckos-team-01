import styled from 'styled-components';

export const FormContainer = styled.div`
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
    outline: none;
  }
`;

export const FormButton = styled.button`
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

