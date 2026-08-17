import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ContactFooter from './components/layout/ContactFooter';
import ScrollToTop from './components/layout/ScrollToTop';
import SEO from './components/ui/SEO';

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
            <Route path="/" element={<><SEO title="Vizag Tours & Cabs | Cab Services & Tour Packages in Visakhapatnam" description="Vizag Tours & Cabs offers reliable cab services, airport transfers, local sightseeing, outstation trips and tour packages in Visakhapatnam." /><Home /></>} />
            <Route path="/about" element={<><SEO title="About Vizag Tours & Cabs | Visakhapatnam" description="Learn about Vizag Tours & Cabs, your travel partner for cab services, sightseeing and tour packages in Visakhapatnam." /><About /></>} />
            <Route path="/services" element={<><SEO title="Cab Services in Visakhapatnam | Vizag Tours & Cabs" description="Explore airport transfers, local sightseeing, outstation trips, corporate travel, wedding cars and hourly cab rentals in Visakhapatnam." /><Services /></>} />
            <Route path="/fleet" element={<><SEO title="Cabs & Fleet in Vizag | Vizag Tours & Cabs" description="Explore our range of cars, cabs, travelers and buses for travel in Visakhapatnam and nearby destinations." /><Fleet /></>} />
            <Route path="/packages" element={<><SEO title="Vizag Tour Packages | Visakhapatnam Tours" description="Explore Vizag and nearby destination tour packages including sightseeing and outstation trips from Visakhapatnam." /><Packages /></>} />
            <Route path="/routes" element={<><SEO title="Cab Routes & Pricing in Vizag | Vizag Tours & Cabs" description="View popular cab routes from Visakhapatnam, estimated travel times and starting prices for selected destinations." /><RoutesPage /></>} />
            <Route path="/gallery" element={<><SEO title="Vizag Tours Photo Gallery | Visakhapatnam" description="View photos of Vizag beaches, tourist attractions, customer trips, events and destinations around Visakhapatnam." /><Gallery /></>} />
            <Route path="/contact" element={<><SEO title="Contact Vizag Tours & Cabs | Book a Cab in Vizag" description="Contact Vizag Tours & Cabs for cab bookings, airport transfers, sightseeing and tour packages in Visakhapatnam." /><Contact /></>} />
          </Routes>
        </main>
        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
