import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { MenuLink } from '../Assets/Style/styled-components'
import styled from "styled-components";
import { colours, fonts, mediaQueries, sizes } from "../Assets/Style/style";

const LinksContainer = styled.div`
    display: flex;
    @media ${mediaQueries.tablet} {
        flex-direction: column;
        background: ${colours.black};
        position: absolute;
        width: 100%;
        left: 0;
        top: ${sizes.headerHeight};
        padding-bottom: 1em;
        & a {
            margin: auto 4em;
        }
        & a::before {
            font-family: ${fonts.pixelHairline};
            font-size: 1.25em;
            content: "|> ";
        }
    }
`;
function Menu () {
    return(
        <LinksContainer>
            <MenuLink to='/' title="Home sweet home"><FontAwesomeIcon icon={faHome} /></MenuLink>
            <MenuLink to='/projects' title="See my projects">My projects</MenuLink>
            <MenuLink to='/about' title="More about me">About me</MenuLink>
            <MenuLink to='/contact' title="Contact me here">Contact me</MenuLink>
        </LinksContainer>
    )
}

export default Menu;