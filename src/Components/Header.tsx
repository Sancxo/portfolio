import styled, {keyframes} from "styled-components";
import {colours, fonts, sizes } from "../Assets/Style/style";
import { Link } from "react-router-dom";
import { pathGenerator } from "../Assets/Helpers/path-generator";

// Animations
const GlitchBrand = keyframes`
    0% {
        clip-path: none;
    }
    100% {
        clip-path: polygon(${pathGenerator()});
    }
`
const GlitchAnim = keyframes`
    0% {
        transform: skew(8deg);
        text-shadow: 0 0 2.1em ${colours.neonBlue};
    }
    5% {
        transform: skew(8deg);
        text-shadow: 0 0 2.1em ${colours.neonBlue};
    }
    10% {
        transform: skew(-2deg);
        text-shadow: 0 0 1em ${colours.neonBlue};
    }
    15% {
        transform: skew(-1deg);
        text-shadow: 0 0 1em ${colours.neonBlue};
    }
    20% {
        transform: skew(1deg);
        text-shadow: 0 0 1.3em ${colours.neonBlue};
    }
    25% {
        transform: skew(1deg);
        text-shadow: 0 0 1.3em ${colours.neonBlue};
    }
    30% {
        transform: skew(1deg);
        text-shadow: 0 0 1.3em ${colours.neonBlue};
    }
    35% {
        transform: skew(0deg);
        text-shadow: 0 0 2em ${colours.neonBlue};
    }
    40% {
        transform: skew(5deg);
        text-shadow: 0 0 2em ${colours.neonBlue};
    }
    45% {
        transform: skew(0deg);
        text-shadow: 0 0 2em ${colours.neonBlue};
    }
    50% {
        transform: skew(-5deg);
        text-shadow: 0 0 2.2em ${colours.neonBlue};
    }
    55% {
        transform: skew(-5deg);
        text-shadow: 0 0 1.3em ${colours.neonBlue};
    }
    60% {
        transform: skew(-5deg);
        text-shadow: 0 0 1.5em ${colours.neonBlue};
    }
    65% {
        transform: skew(2deg);
        text-shadow: 0 0 1.5em ${colours.neonBlue};
    }
    70% {
        transform: skew(-2deg);
        text-shadow: 0 0 1.9em ${colours.neonBlue};
    }
    75% {
        transform: skew(3deg);
        text-shadow: 0 0 1em ${colours.neonBlue};
    }
    80% {
        transform: skew(8deg);
        text-shadow: 0 0 1em ${colours.neonBlue};
    }
    85% {
        transform: skew(8deg);
        text-shadow: 0 0 2em ${colours.neonBlue};
    }
    90% {
        transform: skew(8deg);
        text-shadow: 0 0 1.2em ${colours.neonBlue};
    }
    95% {
        transform: skew(deg);
        text-shadow: 0 0 1.2em ${colours.neonBlue};
    }
    100% {
        transform: skew(-3deg);
        text-shadow: 0 0 1.8em ${colours.neonBlue};
    }
`

// Style
const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin: auto;
    background: ${colours.black};
    height: ${sizes.headerHeight};
    padding-right: 1em;
`

const MenuLink = styled(Link)`
    margin: auto 1em;
    text-decoration: none;
    color: ${colours.futureBlue};
    text-shadow: 0 0 2em ${colours.neonBlue};
    &.brand {
        margin-right: auto;
        font: 2.5em ${fonts.pixel};
        text-shadow: none;
        transition: 2000ms;
    }
    &.brand:hover {
        color: #39ff14;
        text-shadow: 0 0 1em #39ff14;
        animation: ${GlitchBrand} 100ms 750ms backwards;
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