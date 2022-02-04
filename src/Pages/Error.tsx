import { ReactElement, useEffect } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";

// style
import styled from "styled-components";
import { mediaQueries, sizes } from '../Assets/Style/style';
import { pageLoadAnimation } from "../Assets/Style/styled-components";

// styled components
const ErrorPageContainer = styled.div`
    ${pageLoadAnimation} 
    margin-top: ${sizes.pageMarginTop};
    padding: ${sizes.pagePadding};
    & { text-align: center; }
    & h1 { font-size: 5em; margin-bottom: 0; }
    & p:nth-child(2) { margin-top: 0 }
    & p:nth-child(3) { margin-top: ${sizes.pageMarginTop} }
    @media ${mediaQueries.mobile} { 
        margin-top: 0;
        & h1 { margin-top: 0; }
        & p:nth-child(3) { margin-top: 1em }
    }
`

function Error(): ReactElement {
    // used to go at the top of the page after loading
    useEffect(() => { window.scroll({top:0}); }, [])
    return (
        <ErrorPageContainer>
            <h1>404 Error <FontAwesomeIcon icon={faExclamationTriangle}/></h1>
            <p>(not found)</p>
            <p>Thank you Mario!</p>
            <p>But the page you're looking for is in another castle! <FontAwesomeIcon icon={faFortAwesome}/></p>   
        </ErrorPageContainer>
    )
}

export default Error;