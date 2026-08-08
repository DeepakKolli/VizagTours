import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Vizag<span>Tours</span></h3>
          <p>Your trusted travel partner in Visakhapatnam. Offering premium cab services and unforgettable tour packages.</p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/fleet">Cab Fleet</Link></li>
            <li><Link to="/packages">Tour Packages</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li><MapPin size={18} /> <span>123 Beach Road, Visakhapatnam, AP</span></li>
            <li><Phone size={18} /> <span>+91 8885099940</span></li>
            <li><Mail size={18} /> <span>info@vizagtours.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vizag Tourism & Cab Booking. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
