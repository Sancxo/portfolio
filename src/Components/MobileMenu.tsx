import { ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Menu from './Menu';

const Hamburger = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    color: inherit;
    font-size: 1.5em;
`;
function MobileMenu(): ReactElement {
    let [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

    return(
        <div>
            <Hamburger onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}><FontAwesomeIcon icon={faBars} /></Hamburger>
            {isMenuDisplayed ? <Menu /> : null}
        </div>
    )
}

export default MobileMenu;