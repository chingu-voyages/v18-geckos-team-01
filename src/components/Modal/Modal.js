import React from 'react';
import styled from 'styled-components';

const Modal = props => {
  return (
    <ModalContainer showModal={props.showModal}>
      <CloseButton onClick={props.onCloseButtonClicked}>&times;</CloseButton>
      {props.children}
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: ${props => (props.showModal ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 450px;
  background-color: #000;
  border: 5px solid #0087a5;
  box-sizing: border-box;
  border-radius: 25px;
  z-index: 1;

  @media screen and (max-width: 420px) {
    width: 390px;
  }
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
