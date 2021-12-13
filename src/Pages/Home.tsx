import styled, { keyframes } from 'styled-components';
import { colors, sizes } from '../Assets/Style/style';
import { glitchAnimationCodeGenerator } from '../Assets/Helpers/path-generator';
import HeroImg from '../Assets/Imgs/hero_img.JPG';

// Animation
const GlitchPaths = keyframes`
  ${glitchAnimationCodeGenerator()}
`

// Style
const Jumbotron = styled.div`
  background: center / cover no-repeat url(${HeroImg});
  height: calc(100vh - ${sizes.headerHeight});
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainTitle = styled.h1`
  color: ${colors.white};
  text-shadow: 0 0 0.25em ${colors.white};
  font-size: 3em;
  animation: ${GlitchPaths} 5s step-end infinite;
`

function Home() {
  return (
    <Jumbotron>
      <MainTitle>Hello, world !</MainTitle>
    </Jumbotron>
  );
}

export default Home;
