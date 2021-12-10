import styled, {keyframes} from "styled-components";
import {colors,  fonts } from "../Assets/Style/style";
import { Link } from "react-router-dom";

const GlitchBrand = keyframes`
    100% {
        clip-path: polygon(0% 9%,94% 9%,94% 31%,93% 31%,93% 16%,45% 16%,45% 98%,74% 98%,74% 6%,1% 6%,1% 84%,40% 84%,40% 9%,32% 9%,32% 44%,34% 44%,34% 45%,53% 45%,53% 91%,17% 91%,17% 18%,12% 18%,12% 3%,96% 3%,96% 70%,78% 70%,78% 34%,91% 34%,91% 3%,55% 3%,55% 16%,51% 16%,51% 94%,33% 94%,33% 64%,86% 64%,86% 61%,62% 61%,62% 69%,1% 69%,1% 82%,75% 82%,75% 24%,98% 24%,98% 98%,64% 98%,64% 63%,1% 63%,1% 21%,81% 21%,81% 32%,89% 32%,89% 69%,86% 69%,86% 27%,52% 27%,52% 79%);
    }
`
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
        animation: ${GlitchBrand} 200ms 750ms;
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