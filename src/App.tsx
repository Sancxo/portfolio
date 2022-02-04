import React, {Suspense, lazy, useEffect, useState, ReactElement} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Style imports
import { GlobalStyle, Loader} from './Assets/Style/styled-components';
import { sizes } from './Assets/Style/style';


// Components imports
import Header from './Components/Header';
import Footer from './Components/Footer';
import GoUpArrow from './Components/GoUpArrow';

// Lazy loading
const Home = lazy(() => import('./Pages/Home'));
const Projects = lazy(() => import("./Pages/Projects"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Error = lazy(() => import('./Pages/Error'));

function App(): ReactElement {
    
    // state to check if mobile menu is open or not
    const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

    
    useEffect(() => {
        // To show and hide the scroll to top button (we show if we scroll, we hide again after a certain time)
        const goUpArrow: HTMLElement = document.querySelector('#go-up-arrow') as HTMLElement;
        let timeout: NodeJS.Timeout; // Pointer so we can clean the setTimeout

        goUpArrow.style.display = 'none';

        function displayArrow(): void {
            const scrollPos: number = window.scrollY;

            goUpArrow.style.display = scrollPos <= 100 ? "none" : "block";
            timeout = setTimeout(() => { if(scrollPos === window.scrollY && (!goUpArrow.matches(':hover'))) goUpArrow.style.display = "none" }, 2000);
        }

        goUpArrow.addEventListener('mouseout', _ => displayArrow() );
        window.addEventListener('scroll', _ => displayArrow() );

        return () => {
            // eventListeners & setTimeout cleaning functions
            goUpArrow.removeEventListener('mouseout', _ => displayArrow() );
            window.removeEventListener('scroll',  _ => displayArrow() );
            clearTimeout(timeout);
        };
    });

    const closeMobileMenu: () => void = () => setIsMenuDisplayed(false);

    return (
        <React.StrictMode>
            <div className="App" >
                <Router>
                    <GlobalStyle />

                    <header>
                        <Header 
                            closeMobileMenu={ closeMobileMenu } 
                            isMenuDisplayed={ isMenuDisplayed } 
                            setIsMenuDisplayed={ setIsMenuDisplayed } />
                    </header>
                    

                    <main style={{paddingTop: sizes.headerHeight}}>
                        <Suspense fallback={ <div style={{height: "100vh"}}> <Loader /> </div> }>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                        </Suspense>
                    </main>

                    <footer>
                        <Footer />
                    </footer>
                </Router>

                <GoUpArrow />
            </div>
        </React.StrictMode>
    )
}

export default App;