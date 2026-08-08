import React from 'react';
import { PhoneCall, Calendar, Users, ShieldCheck, Clock, Award, Star, ThumbsUp, Shield } from 'lucide-react';
import '../styles/Home.css';

// Import images for collage
import beachViews from '../assets/Images/vizag-beach-views.jpg';
import simhachalam from '../assets/Images/simhachalam-vizag.jpg';
import arakuValley from '../assets/Images/araku-valley.jpg';
import kailashagiri from '../assets/Images/kailashagiri.jpg';
import buddha from '../assets/Images/buddha.jpg';

// Import components
import PopularVehicles from '../components/sections/PopularVehicles';
import TourPackages from '../components/sections/TourPackages';
import GalleryPreview from '../components/sections/GalleryPreview';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      {/* Version 1 & 2 Combined Collage Hero Section */}
      <section className="hero-collage-section">
        <div className="container hero-collage-grid">
          {/* Left Side: Brand & Quote Card */}
          <div className="hero-text-container">
            <div className="brand-badge">VIZAG TOURS & CABS</div>
            <h1 className="hero-title">
              Explore Vizag <br />
              <span className="text-highlight">Like Never Before</span>
            </h1>
            <p className="hero-tagline">Explore Vizag with Trusted Cab & Tour Services</p>
            
            <div className="hero-quote-box">
              <p className="hero-quote">
                "As proud Vizagites, we promise to give you a heart full of memories—not just a trip. Welcome to Vizag, the City of Destiny."
              </p>
            </div>

            <div className="hero-actions">
              <a href="#packages" className="btn btn-accent">Explore Tour Packages</a>
              <a href="tel:+918885099940" className="btn btn-primary">
                <PhoneCall size={18} />
                <span>Call to Book</span>
              </a>
            </div>
          </div>

          {/* Right Side: Collage of Vizag Locations with Named Captions */}
          <div className="hero-images-collage">
            <div className="collage-left-featured">
              <img src={beachViews} alt="Vizag Beach" className="collage-img" />
              <div className="collage-caption">RushiKonda Beach</div>
            </div>
            <div className="collage-right-grid">
              <div className="collage-item">
                <img src={simhachalam} alt="Simhachalam Temple" className="collage-img" />
                <div className="collage-caption">Simhachalam Temple</div>
              </div>
              <div className="collage-item">
                <img src={arakuValley} alt="Araku Valley" className="collage-img" />
                <div className="collage-caption">Araku Valley</div>
              </div>
              <div className="collage-item">
                <img src={kailashagiri} alt="Kailasagiri Lord Shiva" className="collage-img" />
                <div className="collage-caption">Kailasagiri</div>
              </div>
              <div className="collage-item">
                <img src={buddha} alt="Thotlakonda Buddha Stupa" className="collage-img" />
                <div className="collage-caption">Buddha Stupa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Trust Statistics Bar (Version 1 & 2 Style) */}
      <section className="trust-stats-bar-section">
        <div className="container">
          <div className="trust-stats-bar">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Users size={24} color="var(--primary-blue)" />
              </div>
              <div>
                <div className="stat-number">5000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Award size={24} color="var(--primary-blue)" />
              </div>
              <div>
                <div className="stat-number">30+ Years</div>
                <div className="stat-label">Experience</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Clock size={24} color="var(--primary-blue)" />
              </div>
              <div>
                <div className="stat-number">24×7</div>
                <div className="stat-label">Service Support</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <ShieldCheck size={24} color="var(--primary-blue)" />
              </div>
              <div>
                <div className="stat-number">Safe & Secure</div>
                <div className="stat-label">Comfortable Rides</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version 2 & 3 Split Column Layout: Popular Vehicles + Why Choose Us Sidebar */}
      <section className="section-padding bg-section" id="fleet-section" style={{ borderBottom: '1px solid rgba(15, 76, 129, 0.08)' }}>
        <div className="container">
          <div className="homepage-split-layout">
            
            {/* Left Column: Popular Vehicles with Dropdown details */}
            <div className="vehicles-column">
              <div className="section-header-left">
                <h2 className="split-section-title">Popular Vehicles</h2>
                <p className="split-section-subtitle">
                  Choose from our wide range of clean, well-maintained cabs and traveler coaches. 
                  Tap "Specs & Rates" to see tariff dropdowns.
                </p>
              </div>
              <PopularVehicles />
            </div>

            {/* Right Column: Why Choose Us (Sticky vertical layout from Version 2/3) */}
            <div className="why-choose-us-column">
              <div className="why-choose-us-sidebar">
                <div className="sidebar-rating-badge">
                  <Star size={16} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
                  <span>RATED 4.9/5 BY VIZAGITES</span>
                </div>
                <h2 className="sidebar-title">Why Choose Us?</h2>
                <p className="sidebar-desc">
                  We are proud locals who set the standard for premium, reliable, and transparent travel services in Visakhapatnam.
                </p>

                <div className="sidebar-trust-list">
                  <div className="sidebar-trust-card">
                    <div className="trust-card-icon-container">
                      <ThumbsUp size={20} color="var(--primary-blue)" />
                    </div>
                    <div>
                      <h4 className="trust-card-title">Well-Maintained Fleet</h4>
                      <p className="trust-card-desc">Every cab undergoes strict daily cleaning and routine servicing for absolute comfort.</p>
                    </div>
                  </div>

                  <div className="sidebar-trust-card">
                    <div className="trust-card-icon-container">
                      <Users size={20} color="var(--primary-blue)" />
                    </div>
                    <div>
                      <h4 className="trust-card-title">Professional Local Drivers</h4>
                      <p className="trust-card-desc">Experienced, courteous drivers who know Vizag's local routes, attractions, and heritage.</p>
                    </div>
                  </div>

                  <div className="sidebar-trust-card">
                    <div className="trust-card-icon-container">
                      <Shield size={20} color="var(--primary-blue)" />
                    </div>
                    <div>
                      <h4 className="trust-card-title">Best Price Guarantee</h4>
                      <p className="trust-card-desc">Transparent pricing structure with absolutely zero hidden charges or surprises.</p>
                    </div>
                  </div>

                  <div className="sidebar-trust-card">
                    <div className="trust-card-icon-container">
                      <Clock size={20} color="var(--primary-blue)" />
                    </div>
                    <div>
                      <h4 className="trust-card-title">On-Time Service</h4>
                      <p className="trust-card-desc">We respect your schedule. Punctual pickups and stress-free transitions guaranteed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other sections in customer journey */}
      <div id="packages">
        <TourPackages />
      </div>
      <GalleryPreview />
      <Testimonials />
    </div>
  );
};

export default Home;
