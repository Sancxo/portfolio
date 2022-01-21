
import { NavBar, MenuLink } from '../Assets/Style/styled-components'
import { mediaQueries } from "../Assets/Style/style";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Menu from './Menu';

function Header() { 
    const mediaQueryTablet = window.matchMedia(mediaQueries.tablet);
    
    let [isTablet, setIsTablet] = useState(mediaQueryTablet.matches ? true : false);

    useEffect(() => {
        mediaQueryTablet.addEventListener('change', () => setIsTablet(!isTablet));
    })

    return (
        <NavBar>
                <MenuLink to='/' className="brand" title="Home">Simon Tirant</MenuLink>
            {
                isTablet ?
                    <MobileMenu /> :
                    <Menu />
            }
        </NavBar>
    )
}

export default Header;