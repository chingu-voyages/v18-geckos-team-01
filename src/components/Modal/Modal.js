import React from 'react';
import styled from 'styled-components';

const Modal = props => {
  return (
    <ModalContainer showModal={props.showModal}>
      <ModalContent>
        <CloseButton onClick={props.onCloseButtonClicked}>&times;</CloseButton>
        {props.children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: ${props => (props.showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  background-color: #000;
  border: 5px solid #0087a5;
  box-sizing: border-box;
  border-radius: 25px;

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
