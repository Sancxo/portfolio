import styled, { keyframes } from 'styled-components';
import { colours, fonts, sizes } from '../Assets/Style/style';
import { animationDurationGenerator, glitchAnimationCodeGenerator, positionGenerator } from '../Assets/Helpers/path-generator';
import HeroImg from '../Assets/Imgs/bckgrd_2.jpg';
import React from 'react';

// Animation
// put a setInterval with random time to recall functions
const onloadOpacity = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
const pathsAndOpacityDuration = animationDurationGenerator(8, 12);
let [PathsCode, OpacityCode ] = glitchAnimationCodeGenerator('path/opac');
PathsCode = keyframes`${PathsCode}`;
OpacityCode = keyframes`${OpacityCode}`;
// We call each functions twice to have different parameters
// so we get asynchronous animations.
const GlitchPositionBefore = keyframes`${glitchAnimationCodeGenerator('position', 'negative')}`;
const GlitchPositionAfter = keyframes`${glitchAnimationCodeGenerator('position', 'positive')}`;
const GlitchFontBefore = keyframes`${glitchAnimationCodeGenerator('font')}`;
const GlitchFontAfter = keyframes`${glitchAnimationCodeGenerator('font')}`;

// Style
const Jumbotron = styled.div`
  background:  linear-gradient(#16161675, #161616EE), 50% 50% / cover no-repeat url(${HeroImg});
  height: calc(100vh - ${sizes.headerHeight});
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(0.25em);
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
  opacity: 1;
  animation: ${onloadOpacity} 666ms ease-out,${PathsCode} ${pathsAndOpacityDuration} step-end infinite;
  &::after, &::before {
    content: "Hello, World !";
    position: absolute;
    width: 125%;
    z-index: -1;
  }
  &::before {
    opacity: 0;
    top: ${positionGenerator('negative')};
    left: ${positionGenerator('negative')};
    color: ${colours.neonBlue};
    animation: ${OpacityCode} ${pathsAndOpacityDuration} step-end infinite,
    ${GlitchPositionBefore} ${animationDurationGenerator(2, 3)} step-end infinite,
    ${GlitchFontBefore} ${animationDurationGenerator(2, 4)} step-end infinite;
  }
  &::after {
    opacity: 0;
    top: ${positionGenerator('positive')};
    left: ${positionGenerator('positive')};
    color: ${colours.neonFuchsia};
    animation: ${OpacityCode} ${pathsAndOpacityDuration} step-end infinite,
    ${GlitchPositionAfter} ${animationDurationGenerator(4, 5)} step-end infinite,
    ${GlitchFontAfter} ${animationDurationGenerator(3, 5)} step-end infinite;
  }
`

function Home() {
  return (
    <React.Fragment>
      <Jumbotron></Jumbotron>
      <MainTitle className='title'>Hello, World !</MainTitle>
    </React.Fragment>
  );
}

export default Home;
