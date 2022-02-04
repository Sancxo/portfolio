import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import { pageLoadAnimation } from "../Assets/Style/styled-components";

const ErrorPageContainer = styled.div` ${pageLoadAnimation} `

function Error(): ReactElement {
    // used to go at the top of the page after loading
    useEffect( () => {
        window.scrollTo({top:0, behavior:"smooth"});
    }, [])
    return (
        <ErrorPageContainer>
            <h1>404 Error</h1>
            <p>The page you're looking for doesn't exists</p>   
        </ErrorPageContainer>
    )
}

export default Error;