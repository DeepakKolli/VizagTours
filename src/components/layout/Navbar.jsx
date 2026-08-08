import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Menu, X } from 'lucide-react';
import './Navbar.css';
import logoImg from '../../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const phoneNumber = "+918885099940";

  const handleHomeClick = (e) => {
    setIsOpen(false);
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" onClick={handleHomeClick} className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src={logoImg} alt="Vizag Tours & Cabs" style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary-blue)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ lineHeight: '1.2' }}>Vizag<span>Tours</span></div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px', marginTop: '2px', textTransform: 'uppercase' }}>
              All types of vehicles available
            </div>
          </div>
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleHomeClick}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/fleet" onClick={() => setIsOpen(false)}>Vehicles & Pricing</Link>
          <Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
        
        <div className="nav-actions">
          <a href={`tel:${phoneNumber}`} className="btn btn-primary call-btn">
            <PhoneCall size={18} />
            <span>Call Now</span>
          </a>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
