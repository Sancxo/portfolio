import styled, {keyframes} from "styled-components";
import {colors,  fonts } from "../Assets/Style/style";
import { Link } from "react-router-dom";

const GlitchAnim = keyframes`
    0% {
        transform: skew(8deg);
        text-shadow: 0 0 2.1em ${colors.neonBlue};
    }
    5% {
        transform: skew(8deg);
        text-shadow: 0 0 2.1em ${colors.neonBlue};
    }
    10% {
        transform: skew(-2deg);
        text-shadow: 0 0 1em ${colors.neonBlue};
    }
    15% {
        transform: skew(-1deg);
        text-shadow: 0 0 1em ${colors.neonBlue};
    }
    20% {
        transform: skew(1deg);
        text-shadow: 0 0 1.3em ${colors.neonBlue};
    }
    25% {
        transform: skew(1deg);
        text-shadow: 0 0 1.3em ${colors.neonBlue};
    }
    30% {
        transform: skew(1deg);
        text-shadow: 0 0 1.3em ${colors.neonBlue};
    }
    35% {
        transform: skew(0deg);
        text-shadow: 0 0 2em ${colors.neonBlue};
    }
    40% {
        transform: skew(5deg);
        text-shadow: 0 0 2em ${colors.neonBlue};
    }
    45% {
        transform: skew(0deg);
        text-shadow: 0 0 2em ${colors.neonBlue};
    }
    50% {
        transform: skew(-5deg);
        text-shadow: 0 0 2.2em ${colors.neonBlue};
    }
    55% {
        transform: skew(-5deg);
        text-shadow: 0 0 1.3em ${colors.neonBlue};
    }
    60% {
        transform: skew(-5deg);
        text-shadow: 0 0 1.5em ${colors.neonBlue};
    }
    65% {
        transform: skew(2deg);
        text-shadow: 0 0 1.5em ${colors.neonBlue};
    }
    70% {
        transform: skew(-2deg);
        text-shadow: 0 0 1.9em ${colors.neonBlue};
    }
    75% {
        transform: skew(3deg);
        text-shadow: 0 0 1em ${colors.neonBlue};
    }
    80% {
        transform: skew(8deg);
        text-shadow: 0 0 1em ${colors.neonBlue};
    }
    85% {
        transform: skew(8deg);
        text-shadow: 0 0 2em ${colors.neonBlue};
    }
    90% {
        transform: skew(8deg);
        text-shadow: 0 0 1.2em ${colors.neonBlue};
    }
    95% {
        transform: skew(deg);
        text-shadow: 0 0 1.2em ${colors.neonBlue};
    }
    100% {
        transform: skew(-3deg);
        text-shadow: 0 0 1.8em ${colors.neonBlue};
    }
`
const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin: auto;
    background: ${colors.black};
`
const MenuLink = styled(Link)<{$brand?: boolean}>`
    margin: auto 1em;
    text-decoration: none;
    color: ${colors.futureBlue};
    text-shadow: 0 0 2em ${colors.neonBlue};
    &.brand {
        margin-right: auto;
        font: 2.5em ${fonts.pixel};
        text-shadow: none;
        transition: 2000ms;
    }
    &.brand:hover {
        color: #39ff14;
        text-shadow: 0 0 1em #39ff14;
    }
    &:hover:not(.brand) {
        animation: ${GlitchAnim} 750ms infinite;
    }
`
function Header() {
    return (
        <NavBar>
            <MenuLink to='/' className="brand" title="Home">Simon Tirant</MenuLink>
            <MenuLink to='/projects' title="See my projects">My projects</MenuLink>
            <MenuLink to='/about' title="More about me">About me</MenuLink>
            <MenuLink to='/contact' title="Contact me here">Contact me</MenuLink>
        </NavBar>
    )
}

export default Header;