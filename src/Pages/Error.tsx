import { ReactElement, useEffect } from "react";

function Error(): ReactElement {
    // used to go at the top of the page after loading
    useEffect( () => {
        window.scrollTo({top:0, behavior:"smooth"});
    }, [])
    return (
        <div>
            <h1>404 Error</h1>
            <p>The page you're looking for does'nt exists</p>   
        </div>
    )
}

export default Error;