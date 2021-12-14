import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { colours, fonts } from './Assets/Style/style';
import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

// Components imports
import Header from './Components/Header';
import Footer from './Components/Footer';
// Lazy loading
const Home = lazy(() => import('./Pages/Home'));
const Projects = lazy(() => import("./Pages/Projects"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Error = lazy(() => import('./Pages/Error'));

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colours.white};
    font-family: ${fonts.regular};
  }
`

ReactDOM.render(
  <React.StrictMode>
     <div className="App">
        <Router>
          <GlobalStyle />

          <header>
            <Header />
          </header>
          
          <main>
            <Suspense fallback={<div><p>Chargement en cours ...</p></div>}>
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
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
