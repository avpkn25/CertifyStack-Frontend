import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Home from './components/Home/Home';
import About from './components/general/About/About';
import Contact from './components/general/contact/Contact';
import Certifications from './components/general/certifications/Certifications';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginRegister />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
