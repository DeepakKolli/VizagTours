import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactFooter = () => {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '80px 0 30px' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '40px', 
          marginBottom: '60px' 
        }}>
          {/* Section 1: Logo & Desc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'white', fontFamily: 'var(--font-heading)' }}>
              Vizag<span style={{ color: 'var(--accent-yellow)' }}>Tours</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '24px', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Your premium travel partner for Visakhapatnam and Araku Valley. We guarantee safe, comfortable, and affordable journeys.
            </p>
            {/* Social Media */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Section 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white', fontFamily: 'var(--font-heading)' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.85)' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.85)' }}>About Us</Link></li>
              <li><Link to="/gallery" style={{ color: 'rgba(255,255,255,0.85)' }}>Gallery</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.85)' }}>Contact</Link></li>
            </ul>
          </motion.div>

          {/* Section 3: Services & Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white', fontFamily: 'var(--font-heading)' }}>Our Services</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <li><Link to="/fleet" style={{ color: 'rgba(255,255,255,0.85)' }}>Vehicles & Pricing</Link></li>
              <li><Link to="/packages" style={{ color: 'rgba(255,255,255,0.85)' }}>Tour Packages</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.85)' }}>Airport Transfers</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.85)' }}>Temple Tours</Link></li>
            </ul>
          </motion.div>

          {/* Section 4: Contact & Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white', fontFamily: 'var(--font-heading)' }}>Get In Touch</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--accent-yellow)" />
                <a href="tel:+918885099940" style={{ color: 'white', fontWeight: 600 }}>+91 88850 99940</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--accent-yellow)" />
                <a href="tel:+917702535887" style={{ color: 'white', fontWeight: 600 }}>+91 77025 35887</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--accent-yellow)" />
                <a href="mailto:venkat10d@gmail.com" style={{ color: 'white' }}>venkat10d@gmail.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={18} color="var(--accent-yellow)" />
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>Open 24/7 (Business Hours)</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '24px', 
          textAlign: 'center', 
          color: 'rgba(255,255,255,0.5)', 
          fontSize: '0.9rem' 
        }}>
          © {new Date().getFullYear()} Vizag Tours & Cabs. All rights reserved.
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918885099940?text=Hi%20Vizag%20Tours%20%26%20Cabs%2C%20I%20would%20like%20to%20plan%20and%20book%20a%20trip%20to%20Vizag.%20Please%20help%20me%20with%20cab%20rates%20and%20tour%20packages." 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </footer>
  );
};

export default ContactFooter;
