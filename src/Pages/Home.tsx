import styled, { keyframes } from 'styled-components';
import { colours, fonts, sizes } from '../Assets/Style/style';
import { animationDurationGenerator, glitchAnimationCodeGenerator } from '../Assets/Helpers/path-generator';
import HeroImg from '../Assets/Imgs/bckgrd_2.jpg';
import React from 'react';

// Animation
const pathsAndOpacityDuration = animationDurationGenerator(3, 7);
const GlitchPaths = keyframes`${glitchAnimationCodeGenerator('path/pos')}`;
// We call each functions twice to have different parameters 
// so we get asynchronous animations.
const GlitchOpacityBefore = keyframes`${glitchAnimationCodeGenerator('opacity')}`;
const GlitchOpacityAfter = keyframes`${glitchAnimationCodeGenerator('opacity')}`;
const GlitchPositionBefore = keyframes`${glitchAnimationCodeGenerator('path/pos')}`;
const GlitchPositionAfter = keyframes`${glitchAnimationCodeGenerator('path/pos')}`;

// Style
const Jumbotron = styled.div`
  background:  linear-gradient(#16161675, #161616EE), 50% 50% / cover no-repeat url(${HeroImg});
  height: calc(100vh - ${sizes.headerHeight});
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(0.125rem);
`
const MainTitle = styled.h1`
  font-family: ${fonts.pixel};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colours.white};
  text-shadow: 0 0 0.25em ${colours.white};
  font-size: 3em;
  animation: ${GlitchPaths} ${pathsAndOpacityDuration} step-end infinite;
  &::after, &::before {
    content: "Hello, World !";
    position: absolute;
    width: 110%;
    z-index: -1;
  }
  &::before {
    opacity: 0;
    top: 0.25em;
    left: 0.33em;
    color: ${colours.neonFuchsia};
    animation: ${GlitchOpacityBefore} ${pathsAndOpacityDuration} step-end infinite,
    ${GlitchPositionBefore} ${animationDurationGenerator(2, 5)} step-end infinite;
  }
  &::after {
    opacity: 0;
    top: 0.125em;
    left: -0.25em;
    color: ${colours.neonBlue};
    animation: ${GlitchOpacityAfter} ${pathsAndOpacityDuration} step-end infinite,
    ${GlitchPositionAfter} ${animationDurationGenerator(2, 5)} step-end infinite;
  }
`

function Home() {
  return (
    <React.Fragment>
      <Jumbotron>
      </Jumbotron>
      <MainTitle className='title'>Hello, World !</MainTitle>
    </React.Fragment>
  );
}

export default Home;
