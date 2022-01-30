import { createContext, useState } from "react";

export const MobileMenuContext = createContext({});

export function MobileMenuProvider ({ children }: { children: {} }) {
    const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
    const switchMenuIcon = () => setIsMenuDisplayed(!isMenuDisplayed);
    return(
        <MobileMenuContext.Provider value={{ isMenuDisplayed, switchMenuIcon }}>
            {children}
        </MobileMenuContext.Provider>
    )
}