import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MobileMenu(): ReactElement {

    return(
        <div>
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}

export default MobileMenu;