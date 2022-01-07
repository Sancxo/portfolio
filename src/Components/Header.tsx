import styled, {keyframes} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {colours, fonts, sizes } from "../Assets/Style/style";
import { Link } from "react-router-dom";
import { pathGenerator } from "../Assets/Helpers/generativeGlitchAnimation/properties-generators";

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
    }
    5% {
        transform: skew(8deg);
    }
    10% {
        transform: skew(-2deg);
    }
    15% {
        transform: skew(-1deg);
    }
    20% {
        transform: skew(1deg);
    }
    25% {
        transform: skew(1deg);
    }
    30% {
        transform: skew(1deg);
    }
    35% {
        transform: skew(0deg);
    }
    40% {
        transform: skew(5deg);
    }
    45% {
        transform: skew(0deg);
    }
    50% {
        transform: skew(-5deg);
    }
    55% {
        transform: skew(-5deg);
    }
    60% {
        transform: skew(-5deg);
    }
    65% {
        transform: skew(2deg);
    }
    70% {
        transform: skew(-2deg);
    }
    75% {
        transform: skew(3deg);
    }
    80% {
        transform: skew(8deg);
    }
    85% {
        transform: skew(8deg);
    }
    90% {
        transform: skew(8deg);
    }
    95% {
        transform: skew(deg);
    }
    100% {
        transform: skew(-3deg);
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
    &.brand {
        margin-right: auto;
        font: 2em ${fonts.pixel};
        text-shadow: none;
        transition: 2000ms;
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

function Header() {
    return (
        <NavBar>
            <MenuLink to='/' className="brand" title="Home">Simon Tirant</MenuLink>
            <MenuLink to='/' title="Home sweet home"><FontAwesomeIcon icon={faHome} /></MenuLink>
            <MenuLink to='/projects' title="See my projects">My projects</MenuLink>
            <MenuLink to='/about' title="More about me">About me</MenuLink>
            <MenuLink to='/contact' title="Contact me here">Contact me</MenuLink>
        </NavBar>
    )
}

export default Header;