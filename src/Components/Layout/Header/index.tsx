import './header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/projects'>My projects</Link>
            <Link to='/about'>About me</Link>
            <Link to='/contact'>Contact me</Link>
        </nav>
    )
}

export default Header;