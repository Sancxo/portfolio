import styled, { keyframes } from 'styled-components';
import { colours, fonts, sizes } from '../Assets/Style/style';
import { animationDuration, fontGenerator, positionGenerator } from '../Assets/Helpers/generativeGlitchAnimation/properties-generators';
import glitchAnimation from '../Assets/Helpers/generativeGlitchAnimation/animation-code-generator';
import HeroImg from '../Assets/Imgs/bckgrd_2.jpg';
import React from 'react';

// Animation
// put a setInterval with random time to recall functions
const pathsAndOpacityDuration = animationDuration(8, 12);
let [PathsCode, OpacityCode ] = glitchAnimation('path/opac');
PathsCode = keyframes`${PathsCode}`;
OpacityCode = keyframes`${OpacityCode}`;
// We call each functions twice to have different parameters
// so we get asynchronous animations.
const GlitchPositionBefore = keyframes`${glitchAnimation('position', 'negative')}`;
const GlitchPositionAfter = keyframes`${glitchAnimation('position', 'positive')}`;
const GlitchFontBefore = keyframes`${glitchAnimation('font')}`;
const GlitchFontAfter = keyframes`${glitchAnimation('font')}`;

// Style
const Jumbotron = styled.div`
  background: linear-gradient(#16161675, #161616EE), 50% 50% / cover no-repeat url(${HeroImg});
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
  animation: ${pathsAndOpacityDuration} step-end 500ms infinite ${PathsCode};
  &::after, &::before {
    content: "Hello, World !";
    position: absolute;
    width: 110%;
    z-index: -1;
  }
  &::before {
    font-family: ${fontGenerator()};
    opacity: 0;
    top: ${positionGenerator('negative')[0]};
    left: ${positionGenerator('negative')[1]};
    color: ${colours.neonBlue};
    animation: ${pathsAndOpacityDuration} step-end 500ms infinite ${OpacityCode},
    ${animationDuration(2, 3)} step-end infinite ${GlitchPositionBefore},
    ${animationDuration(2, 4)} step-end infinite ${GlitchFontBefore};
  }
  &::after {
    font-family: ${fontGenerator()};
    opacity: 0;
    top: ${positionGenerator('positive')[0]};
    left: ${positionGenerator('positive')[1]};
    color: ${colours.neonFuchsia};
    animation: ${pathsAndOpacityDuration} step-end 500ms infinite ${OpacityCode},
    ${GlitchPositionAfter} ${animationDuration(4, 5)} step-end infinite,
    ${GlitchFontAfter} ${animationDuration(3, 5)} step-end infinite;
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
