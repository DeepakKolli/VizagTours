import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ContactFooter from './components/layout/ContactFooter';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Packages from './pages/Packages';
import RoutesPage from './pages/Routes';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
