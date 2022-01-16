import React, {Suspense, lazy, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Style imports
import { GlobalStyle, Loader } from './Assets/Style/styled-components';

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

function App() {
    useEffect(() => {
        window.addEventListener('scroll', _ => {
            const goUpArrow = document.querySelector('#go-up-arrow') as HTMLElement;
            window.scrollY <= 100 ? goUpArrow.style.display = 'none' : goUpArrow.style.display = 'block';
        })
    });

    return (
        <React.StrictMode>
            <div className="App" >
                <Router>
                    <GlobalStyle />

                    <header>
                        <Header />
                    </header>
                    
                    <main>
                        <Suspense fallback={<Loader />}>
                        <Routes >
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