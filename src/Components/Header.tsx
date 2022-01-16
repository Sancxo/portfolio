import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavBar, MenuLink } from '../Assets/Style/styled-components'

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