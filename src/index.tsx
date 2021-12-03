import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

// Components imports
import Home from './Components/Home';
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";

ReactDOM.render(
  <React.StrictMode>
     <div className="App">
      <header className="header">
        
      </header>

      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>

      <footer>

      </footer>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
