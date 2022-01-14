import styled, { keyframes } from 'styled-components';
import arrowUp from "../Assets/Imgs/icons/arrow_up.png";


const ArrowUpAnim = keyframes`
    25% { transform: rotate(10deg) }
    50% { transform: rotate(-10deg) }
    75% { transform: rotate(10deg) }
    100% { transform: rotate(-10deg) }
`
const ArrowUp = styled.img`
  filter: invert(100%);
  position: fixed;
  bottom: 1em;
  right: 1em;
  width: 3em;
  cursor: pointer;
  &:hover {
    animation: ${ArrowUpAnim} 375ms ease-in-out;
  }
`

function GoUpArrow () {
    function goTop () {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return (
        <ArrowUp src={arrowUp} alt="Go up arrow" id="go-up-arrow" onClick={goTop}/>
    )
}

export default GoUpArrow;