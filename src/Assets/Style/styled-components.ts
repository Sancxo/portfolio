import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { colours, fonts, sizes } from './style';

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