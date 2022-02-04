
import React, { ReactElement, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Menu from './Menu';
import { Link } from "react-router-dom";

// animations and styles
import { GlitchAnim, GlitchBrand } from "../Assets/Style/styled-components";
import { colours, fonts, mediaQueries, sizes } from "../Assets/Style/style";
import styled from "styled-components";

// Styled components
const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin: auto;
    background: ${colours.black};
    height: ${sizes.headerHeight};
    padding: 0 3em 0 1em;
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
`

function Header ({ closeMobileMenu, isMenuDisplayed, setIsMenuDisplayed }: {
    closeMobileMenu: () => void,
    isMenuDisplayed: boolean,
    setIsMenuDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}): ReactElement { 
    const mediaQueryTablet: MediaQueryList = window.matchMedia(mediaQueries.tablet);
    
    // State to switch between tablet/mobile and desktop menu
    let [isTablet, setIsTablet] = useState(mediaQueryTablet.matches ? true : false);

    useEffect(() => {
        mediaQueryTablet.addEventListener('change', _ => setIsTablet(!isTablet));
        return mediaQueryTablet.removeEventListener('change', _ => setIsTablet(!isTablet));
    })

    return (
        <NavBar>
            <MenuLink to='/' className="brand" title="Home" onClick={ closeMobileMenu }>Simon Tirant</MenuLink>
            
            { isTablet ?
                <MobileMenu 
                    closeMobileMenu={ closeMobileMenu } 
                    isMenuDisplayed={ isMenuDisplayed } 
                    setIsMenuDisplayed={ setIsMenuDisplayed }  /> 
            :
                <Menu closeMobileMenu={ closeMobileMenu } /> }
        </NavBar>
    )
}

export default Header;