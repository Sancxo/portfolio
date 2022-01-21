import { Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { colours, fonts, mediaQueries, sizes } from './style';
import { pathGenerator } from "../Helpers/generativeGlitchAnimation/properties-generators";

// App.tsx
const onloadOpacity = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colours.black};
    color: ${colours.white};
    font-family: ${fonts.code};
    opacity: 0;
    animation: 1250ms ease-out 500ms forwards ${onloadOpacity};
  }
  header {
    position: fixed;
    z-index: 1;
    width: 100vw;
  }
  main {
    padding-top: ${sizes.headerHeight};
  }
  a {
    color: ${colours.white};
    transition: color 50ms linear;
    &:hover {
      color: ${colours.ultraViolet}
    }
  }
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
export const Loader = styled.div`
  padding: 1em;
  border: 1em solid ${colours.ultraViolet};
  border-bottom-color transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  text-align: center;
  position: absolute;
  translate: 50% 50%;
  top: 50%;
  left: 50%;
  filter: drop-shadow(0 0 1em ${colours.ultraViolet});
`

// Header.tsx
export const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin: auto;
    background: ${colours.black};
    height: ${sizes.headerHeight};
    padding: 0 3em 0 1em;
`
const GlitchBrand = keyframes`
    0% { clip-path: none; }
    100% { clip-path: polygon(${pathGenerator()}); }
`
const GlitchAnim = keyframes`
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
export const MenuLink = styled(Link)`
    margin: auto 1em;
    text-decoration: none;
    color: ${colours.futureBlue};
    &.brand {
        margin-right: auto;
        font: 2em ${fonts.pixel};
        text-shadow: none;
        transition: color 2000ms, text-shadow 2000ms;
        @media ${mediaQueries.mobile} { font-size: 1.5em; }
    }
    &:hover {
        color: ${colours.neonGreen};
        animation: ${GlitchAnim} 750ms infinite;
    }
    &.brand:hover {
        text-shadow: 0 0 1em ${colours.neonGreen};
        animation: ${GlitchBrand} 100ms 500ms backwards;
    }
`

// Footer.tsx
export const FooterContainer = styled.div`
    padding: 0 3em;
    height: ${sizes.footerHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const GitHub = styled.a`
    color: ${colours.white};
    margin-right: 0.5em;
    & svg {
        transition: 500ms;
    }
    & svg:hover {
        color: #39ff14;
        box-shadow: 0 0 1em #39ff14;
        transform: rotate(45deg);
    }
`
export const LinkedIn = styled.a`
    color: ${colours.galaxyBlue};
    margin-left: 0.5em;
    & svg {
        transition: 500ms;
    }    
    & svg:hover {
        color: #39ff14;
        box-shadow: 0 0 1em #39ff14;
        transform: rotate(-45deg)
    }
`