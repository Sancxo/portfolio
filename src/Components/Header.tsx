import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavBar, MenuLink } from '../Assets/Style/styled-components'
import { mediaQueries } from "../Assets/Style/style";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

function Header() { 
    const mediaQuery = window.matchMedia(mediaQueries.tablet);
    
    let [isScreenSmall, setIsScreenSmall] = useState(mediaQuery.matches ? true : false);

    function DisplayMenu() { 
       return( isScreenSmall ?
        <MobileMenu /> :
        <NavBar>
            <MenuLink to='/' className="brand" title="Home">Simon Tirant</MenuLink>
            <MenuLink to='/' title="Home sweet home"><FontAwesomeIcon icon={faHome} /></MenuLink>
            <MenuLink to='/projects' title="See my projects">My projects</MenuLink>
            <MenuLink to='/about' title="More about me">About me</MenuLink>
            <MenuLink to='/contact' title="Contact me here">Contact me</MenuLink>
        </NavBar>
       )
    }
    useEffect(() => {
        mediaQuery.addEventListener('change', () => {setIsScreenSmall(!isScreenSmall)})
    })


    return (
        DisplayMenu()
    )
}

export default Header;