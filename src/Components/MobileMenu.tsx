import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Menu from './Menu';

const Hamburger = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    color: inherit;
    font-size: 1.5em;
`;
function MobileMenu ({ closeMobileMenu, isMenuDisplayed, setIsMenuDisplayed }: {
    closeMobileMenu: () => void,
    isMenuDisplayed: boolean,
    setIsMenuDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}): ReactElement {

    return(
        <div>
            <Hamburger onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}>
                {
                    !isMenuDisplayed ? 
                        <FontAwesomeIcon icon={faBars} style={{width: "1em"}} /> : 
                        <FontAwesomeIcon icon={faTimes} style={{width: "1em"}} />
                }
            </Hamburger>
            {isMenuDisplayed ? <Menu closeMobileMenu={ closeMobileMenu } /> : null}
        </div>
    )
}

export default MobileMenu;