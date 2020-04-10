import React from 'react';
import styled from 'styled-components';
import HeroImg from '../images/bloodshot.jpg';

const Hero = () => {
  return (
    <HeroImage />
  );
};

export default Hero;

const HeroImage = styled.div`
  background-image: url(${HeroImg});
  height: 65vh;
  width: 100vw;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    height: 50vh;
  }

  @media (max-width: 600px) {
    height: 33vh;
  }
  
`;
