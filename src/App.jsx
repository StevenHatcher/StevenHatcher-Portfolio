
import HomePage from './Pages/HomePage.jsx'
import Portfolio from './Pages/Portfolio.jsx';
import About from './Pages/About.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

import ScrollToTop from "./scrollToTop";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <Router>
      <ScrollToTop />

      <NavBar currentPage={currentPage} onPageChange={setCurrentPage} />

      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

