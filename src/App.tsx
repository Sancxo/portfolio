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
    
    const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

    useEffect(() => {
        const goUpArrow = document.querySelector('#go-up-arrow') as HTMLElement;

        function displayArrow() {
            const scrollPos = window.scrollY;
            scrollPos <= 100 ? goUpArrow.style.display = "none" : goUpArrow.style.display = "block";
            const timeout = setTimeout(() => { scrollPos === window.scrollY ? goUpArrow.style.display = "none" : goUpArrow.style.display = "block" }, 2000);
            return clearTimeout(timeout); // Do I clean the timeout properly ?
        }
        window.addEventListener('load', _ => goUpArrow.style.display = 'none' );
        window.addEventListener('scroll', _ => displayArrow() );

        return () => {
            window.removeEventListener('load', _ => displayArrow() );
            window.removeEventListener('scroll',  _ => displayArrow() );
        };
    });

    const closeMobileMenu = () => setIsMenuDisplayed(!isMenuDisplayed);

    return (
        <React.StrictMode>
            <div className="App" >
                <Router>
                    <GlobalStyle />

                    <header>
                        <Header closeMobileMenu={ closeMobileMenu } isMenuDisplayed={ isMenuDisplayed } setIsMenuDisplayed={ setIsMenuDisplayed } />
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