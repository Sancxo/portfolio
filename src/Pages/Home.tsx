import { ReactElement, useEffect } from 'react';
import { Link } from "react-router-dom";

// generativeGlitchAnimation library imports
import { animationDuration, fontGenerator, positionGenerator } from '../Assets/Helpers/generativeGlitchAnimation/properties-generators';
import { glitchAnimation } from '../Assets/Helpers/generativeGlitchAnimation/animation-code-generator';

// style
import styled, { keyframes } from 'styled-components';
import { colours, fonts, mediaQueries, sizes } from '../Assets/Style/style';
import { pageLoadAnimation } from '../Assets/Style/styled-components';
import Bckgrd from '../Assets/Imgs/bckgrd_2.jpg';

// Animations
const pathsAndOpacityDuration: string = animationDuration(5, 10);
let [PathsCode, OpacityCode] = glitchAnimation('path/opac');
PathsCode = keyframes`${PathsCode}`;
OpacityCode = keyframes`${OpacityCode}`;
// We call each functions twice to have different parameters so we get asynchronous animations.
const GlitchPositionBefore = keyframes`${glitchAnimation('position', 'negative')}`;
const GlitchPositionAfter = keyframes`${glitchAnimation('position', 'positive')}`;
const GlitchFontBefore = keyframes`${glitchAnimation('font')}`;
const GlitchFontAfter = keyframes`${glitchAnimation('font')}`;

// Styled components
const HomeContainer = styled.div` ${pageLoadAnimation} `
const Jumbotron = styled.div`
  background: linear-gradient(#16161675, #161616EE), 50% 50% / cover no-repeat url(${Bckgrd});
  height: calc(100vh - ${sizes.headerHeight});
  filter: blur(.25em);
`
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`
const MainTitle = styled.h1`
  margin-top: 50%;
  color: ${colours.white};
  opacity: 1;
  font-family: ${fonts.pixel};
  font-size: 3em;
  text-align: center;
  text-shadow: 0 0 .25em ${colours.white};
  animation: ${pathsAndOpacityDuration} step-end 500ms infinite ${PathsCode};
  @media ${mediaQueries.tablet} {
    line-height: 1.5em;
  }
  &::after, &::before {
    margin-top: 50%;
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
const Pipe = styled(Link)`
  color: ${colours.neonBlue};
  font-family: ${fonts.pixelHairline};
  background: ${colours.black};
  font-weight: bold;
  margin: .25em 0 .25em 25%;
  font-size: 2em;
  text-decoration: none;
  line-height: 1em;
  &:hover { color: ${colours.neonFuchsia}; }
  @media ${mediaQueries.tablet} { font-size: 1.75em; }
  @media ${mediaQueries.mobileLandscape} { 
    font-size: 1.5em; 
    margin: .25em 0 .25em 12.5%
  }
`
const ExternalPipe = styled.a`
  color: ${colours.neonBlue};
  font-family: ${fonts.pixelHairline};
  background: ${colours.black};
  font-weight: bold;
  margin: .25em 0 .25em 25%;
  font-size: 2em;
  text-decoration: none;
  line-height: 1em;
  &:hover { color: ${colours.neonFuchsia}; }
  @media ${mediaQueries.tablet} { font-size: 1.75em; }
  @media ${mediaQueries.mobileLandscape} { 
    font-size: 1.5em; 
    margin: .25em 0 .25em 12.5%
  }
`;

function Home(): ReactElement {
  // used to go at the top of the page after loading
  useEffect(() => { window.scroll({ top: 0 }); }, [])

  return (
    <HomeContainer>
      {/* Background image from Harrison Qi (https://unsplash.com/photos/ce-K_rj1P7U) */}
      <Jumbotron></Jumbotron>
      <Container>
        <MainTitle className='title'>Hello, World&nbsp;!</MainTitle>
        <ExternalPipe href='https://blog.simontirant.dev' title="My tech blog">|&gt; My blog</ExternalPipe>
        <Pipe to='/projects' title="See my projects">|&gt; My projects</Pipe>
        <Pipe to='/about' title="More about me">|&gt; About me</Pipe>
        <Pipe to='/contact' title="Contact me here">|&gt; Contact me</Pipe>
      </Container>
    </HomeContainer>
  );
}

export default Home;
