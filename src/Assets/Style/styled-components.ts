import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import { colours, fonts} from './style';
import { pathGenerator } from "../Helpers/generativeGlitchAnimation/properties-generators";

// General animations and style
const onloadOpacity = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
export const pageLoadAnimation = css`
  opacity: 0;
  animation: 1250ms ease-out 125ms forwards ${onloadOpacity};
`
export const GlobalStyle = createGlobalStyle`
  *::selection { 
    background: ${colours.ultraViolet};
    color: ${colours.white};
  }
  body {
    background: ${colours.black};
    color: ${colours.white};
    font-family: ${fonts.code};
    opacity: 0;
    animation: 1250ms ease-out 500ms forwards ${onloadOpacity};
  }
  header {
    position: fixed;
    z-index: 2;
    width: 100vw;
  }

  a {
    color: ${colours.white};
    transition: color 50ms linear;
    &:hover {
      color: ${colours.ultraViolet}
    }
  }
`

// Loader
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
export const Loader = styled.div`
  padding: 1em;
  border: 1em solid ${colours.neonFuchsia};
  border-bottom-color transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  text-align: center;
  position: absolute;
  translate: -50% -50%;
  top: 50%;
  left: 50%;
  filter: drop-shadow(0 0 1em ${colours.neonFuchsia});
`

// Header animations 
export const GlitchBrand = keyframes`
    0% { clip-path: none; }
    100% { clip-path: polygon(${pathGenerator()}); }
`
export const GlitchAnim = keyframes`
    0% { transform: skew(8deg); }
    5% { transform: skew(8deg); }
    10% { transform: skew(-2deg); }
    15% { transform: skew(-1deg); }
    20% { transform: skew(1deg); }
    25% { transform: skew(1deg); }
    30% { transform: skew(1deg); }
    35% { transform: skew(0deg); }
    40% { transform: skew(5deg); }
    45% { transform: skew(0deg); }
    50% { transform: skew(-5deg); }
    55% { transform: skew(-5deg); }
    60% { transform: skew(-5deg); }
    65% { transform: skew(2deg); }
    70% { transform: skew(-2deg); }
    75% { transform: skew(3deg); }
    80% { transform: skew(8deg); }
    85% { transform: skew(8deg); }
    90% { transform: skew(8deg); }
    95% { transform: skew(8deg); }
    100% { transform: skew(-3deg); }
`