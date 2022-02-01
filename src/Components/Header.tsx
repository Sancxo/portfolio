
import { NavBar, MenuLink } from '../Assets/Style/styled-components'
import { mediaQueries } from "../Assets/Style/style";
import React, { ReactElement, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Menu from './Menu';

function Header ({ closeMobileMenu, isMenuDisplayed, setIsMenuDisplayed }: {
    closeMobileMenu: () => void,
    isMenuDisplayed: boolean,
    setIsMenuDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}): ReactElement { 
    const mediaQueryTablet = window.matchMedia(mediaQueries.tablet);
    
    let [isTablet, setIsTablet] = useState(mediaQueryTablet.matches ? true : false);

    useEffect(() => {
        mediaQueryTablet.addEventListener('change', _ => setIsTablet(!isTablet));
        return mediaQueryTablet.removeEventListener('change', _ => setIsTablet(!isTablet));
    })

    return (
        <NavBar>
                <MenuLink to='/' className="brand" title="Home" onClick={ _ => setIsMenuDisplayed(false) }>Simon Tirant</MenuLink>
            {
                isTablet ?
                    <MobileMenu closeMobileMenu={ closeMobileMenu } isMenuDisplayed={ isMenuDisplayed } setIsMenuDisplayed={ setIsMenuDisplayed }  /> :
                    <Menu closeMobileMenu={ closeMobileMenu } />
            }
        </NavBar>
    )
}

export default Header;