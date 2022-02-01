import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { MenuLink } from '../Assets/Style/styled-components'
import styled from "styled-components";
import { colours, fonts, mediaQueries, sizes } from "../Assets/Style/style";
import { ReactElement } from "react";

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
            font-size: 1.25em;
            margin: 0 4em;
        }
        & a::before {
            font-family: ${fonts.pixelHairline};
            font-size: 1.25em;
            content: "|> ";
        }
    }
`;
function Menu ({ closeMobileMenu }: { closeMobileMenu: () => void }): ReactElement {
    
    return(
        <LinksContainer>
            <MenuLink to='/' onClick={ closeMobileMenu } title="Home sweet home"><FontAwesomeIcon icon={faHome} /></MenuLink>
            <MenuLink to='/projects' onClick={ closeMobileMenu } title="See my projects">My projects</MenuLink>
            <MenuLink to='/about' onClick={ closeMobileMenu } title="More about me">About me</MenuLink>
            <MenuLink to='/contact' onClick={ closeMobileMenu } title="Contact me here">Contact me</MenuLink>
        </LinksContainer>
    )
}

export default Menu;