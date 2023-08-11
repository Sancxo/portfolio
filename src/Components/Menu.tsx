import { ReactElement } from "react";
import { MenuLink } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colours, fonts, mediaQueries, sizes } from "../Assets/Style/style";
import { GlitchAnim, GlitchBrand } from "../Assets/Style/styled-components";

// styled components
const LinksContainer = styled.div`
    display: flex;
    @media ${mediaQueries.tablet} {
        flex-direction: column;
        background: ${colours.black};
        position: absolute;
        width: 100%;
        height: 100vh;
        left: 0;
        top: ${sizes.headerHeight};
        padding-bottom: 1em;
        & a {
            margin: 0 4em;
        }
        & a::before {
            font-family: ${fonts.pixelHairline};
            font-size: 1.25em;
            content: "|> ";
        }
    }
`;

const ExternalLink = styled.a`
    margin: auto 1em;
    text-decoration: none;
    color: ${colours.futureBlue};
    &.brand {
        margin-right: auto;
        font: 2em ${fonts.pixel};
        text-shadow: none;
        transition: color 2000ms, text-shadow 2000ms;
        @media ${mediaQueries.mobile} { 
        font-size: 1.25em; 
        margin-left: 0;
        }
    }
    &:hover {
        color: ${colours.neonGreen};
        animation: ${GlitchAnim} 750ms infinite;
    }
    &.brand:hover {
        text-shadow: 0 0 1em ${colours.neonGreen};
        animation: ${GlitchBrand} 100ms 500ms backwards;
    }
`;
function Menu({ closeMobileMenu }: { closeMobileMenu: () => void }): ReactElement {

    return (
        <LinksContainer>
            <MenuLink to='/' onClick={closeMobileMenu} title="Home sweet home"><FontAwesomeIcon icon={faHome} /></MenuLink>
            <ExternalLink href='https://blog.simontirant.dev' title="My tech blog">My blog</ExternalLink>
            <MenuLink to='/projects' onClick={closeMobileMenu} title="See my projects">My projects</MenuLink>
            <MenuLink to='/about' onClick={closeMobileMenu} title="More about me">About me</MenuLink>
            <MenuLink to='/contact' onClick={closeMobileMenu} title="Contact me here">Contact me</MenuLink>
        </LinksContainer>
    )
}

export default Menu;