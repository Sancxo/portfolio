import reportWebVitals from './reportWebVitals';
import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

// Components imports
const Home = lazy(() => import('./Components/Home'));
const Projects = lazy(() => import("./Components/Projects"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Header = lazy(() => import('./Components/Layout/Header'));
const Footer = lazy(() => import('./Components/Layout/Footer'));
const Error = lazy(() => import('./Components/Error'));

ReactDOM.render(
  <React.StrictMode>
     <div className="App">
        <Router>
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
