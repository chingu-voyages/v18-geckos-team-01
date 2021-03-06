import React from 'react';
import styled from 'styled-components';
import HeroImg from '../images/bloodshot.jpg';

const Hero = () => {
  return <HeroImage />;
};

export default Hero;

const HeroImage = styled.div`
  background-image: url(${HeroImg});
  height: 65vh;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1.2em;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1024px) {
    height: 50vh;
  }

  @media (max-width: 600px) {
    height: 33vh;
  }
`;
