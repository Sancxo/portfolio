import { createGlobalStyle, keyframes } from 'styled-components';
import { colours, fonts, sizes } from './Assets/Style/style';
import React, {Suspense, lazy, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


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

// Styled Components
const onloadOpacity = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
const GlobalStyle = createGlobalStyle`
  body {
    background: ${colours.black};
    color: ${colours.white};
    font-family: ${fonts.code};
    opacity: 0;
    animation: 1250ms ease-out 500ms forwards ${onloadOpacity};
  }
  header {
    position: fixed;
    z-index: 1;
    width: 100vw;
  }
  main {
    padding-top: ${sizes.headerHeight};
  }
  a {
    color: ${colours.white};
    transition: color 50ms linear;
    &:hover {
      color: ${colours.ultraViolet}
    }
  }
`

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
                        <Suspense fallback={<div><p>Chargement en cours ...</p></div>}>
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