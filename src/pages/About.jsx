import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import beachImg from '../assets/Images/vizag-beach-views.jpg';
import cityImg from '../assets/Images/vizag-night.jpg';
import kailasagiriImg from '../assets/Images/kailashagiri.jpg';
import simhachalamImg from '../assets/Images/simhachalam-vizag.jpg';
import harbourImg from '../assets/Images/fishing-harbour.jpg';
import viewpointImg from '../assets/Images/vizag-viewpoint.jpg';
import arakuImg from '../assets/Images/araku-valley.jpg';
import parkImg from '../assets/Images/teneti-park.jpg';
import heritageImg from '../assets/Images/thotlakonda-buddha-stupas.jpg';
import eventsImg from '../assets/Images/rushikonda-paragliding.jpg';

const About = () => {
  const slides = [
    { src: beachImg, title: "Scenic Beaches" },
    { src: cityImg, title: "Vibrant City Life" },
    { src: kailasagiriImg, title: "Kailasagiri Hilltop" },
    { src: simhachalamImg, title: "Simhachalam Temple" },
    { src: harbourImg, title: "Fishing Harbour" },
    { src: viewpointImg, title: "Breathtaking Viewpoints" },
    { src: arakuImg, title: "Araku Valley" },
    { src: parkImg, title: "Teneti Park" },
    { src: heritageImg, title: "Thotlakonda Heritage" },
    { src: eventsImg, title: "Adventure & Events" }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <h1 className="section-title" style={{ color: 'var(--primary-blue)', fontFamily: 'var(--font-heading)' }}>About VizagTours</h1>
        <p className="section-subtitle">Your reliable and premium travel partner in the City of Destiny.</p>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              VizagTours started with a single vision: to provide transparent, reliable, and premium travel experiences to tourists and locals in Visakhapatnam. Over the years, we have grown into one of the most trusted names in cab services and tourism in Andhra Pradesh, committed to honesty with zero hidden charges.
            </p>
            
            <h2>Why Choose Us?</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}>✅ <strong>Premium Fleet:</strong> Clean, sanitized, and well-maintained vehicles.</li>
              <li style={{ marginBottom: '12px' }}>✅ <strong>Professional Drivers:</strong> Experienced, polite, and familiar with all local routes.</li>
              <li style={{ marginBottom: '12px' }}>✅ <strong>Transparent Pricing:</strong> No hidden costs or surprise charges.</li>
              <li style={{ marginBottom: '12px' }}>✅ <strong>24/7 Support:</strong> Always available via Call or WhatsApp for your peace of mind.</li>
            </ul>
          </div>
          
          <div className="about-image-container">
            <div className="slider-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="slide-content"
                >
                  <img 
                    src={slides[activeSlide].src} 
                    alt={slides[activeSlide].title} 
                    className="about-image" 
                  />
                  <div className="slide-caption">
                    {slides[activeSlide].title}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="slider-dots">
                {slides.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveSlide(i)}
                    className={`dot ${activeSlide === i ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-content {
          display: flex;
          gap: 4rem;
          align-items: flex-start;
          margin-top: 3rem;
        }
        .about-text {
          flex: 1;
        }
        .about-text h2 {
          color: var(--primary-blue);
          margin-bottom: 1rem;
          margin-top: 2rem;
          font-family: var(--font-heading);
        }
        .about-text h2:first-child {
          margin-top: 0;
        }
        .about-text p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
        }
        .about-text ul li {
          color: var(--text-primary);
          font-size: 1rem;
        }
        .about-image-container {
          flex: 1.2;
          min-height: 400px;
        }
        .slider-wrapper {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-hover);
          aspect-ratio: 16 / 10;
        }
        .slide-content {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .slide-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(15, 76, 129, 0.95));
          color: white;
          padding: 24px 16px 12px;
          font-weight: 600;
          font-size: 1.1rem;
          font-family: var(--font-heading);
          text-align: center;
        }
        .slider-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s;
        }
        .dot.active {
          background-color: var(--accent-yellow);
          transform: scale(1.3);
        }
        
        @media (max-width: 992px) {
          .about-content {
            flex-direction: column;
            gap: 2rem;
          }
          .about-image-container {
            width: 100%;
            max-width: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
