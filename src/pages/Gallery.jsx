import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// 1. Beaches Imports
import beachViews from '../assets/Images/vizag-beach-views.jpg';
import vizagCityBeach from '../assets/Images/vizag-city-beach.jpg';
import divisBeach from '../assets/Images/divis-beach-vizag.jpg';
import beachCrescent from '../assets/Images/vizag-beach-crescent.jpg';
import puriBeach from '../assets/Images/puri-beach.jpg';

// 2. Tourist Places Imports
import thotlakonda from '../assets/Images/thotlakonda-buddha-stupas.jpg';
import borraCaves from '../assets/Images/araku-borra-caves.jpg';
import katikaWaterfall from '../assets/Images/araku-katika-waterfall.jpg';
import woodenBridge from '../assets/Images/araku-wooden-bridge.jpg';
import simhachalam from '../assets/Images/simhachalam-vizag.jpg';
import ttdVizag from '../assets/Images/ttd-vizag.jpg';
import kailashagiri from '../assets/Images/kailashagiri.jpg';
import kailashagiriGlassBridge from '../assets/Images/kailashagiri-glass-bridge.jpg';
import fishingHarbour from '../assets/Images/fishing-harbour.jpg';
import vizagViewpoint from '../assets/Images/vizag-viewpoint.jpg';
import arakuValley from '../assets/Images/araku-valley.jpg';
import tenetiPark from '../assets/Images/teneti-park.jpg';
import tenetiParkView from '../assets/Images/teneti-park-view.jpg';
import kondakarlaAva from '../assets/Images/kondakarla-ava.jpg';
import vizagZoo from '../assets/Images/vizag-zoo.jpg';
import buddha from '../assets/Images/buddha.jpg';
import ramabanamTemple from '../assets/Images/ramabanam-temple.jpg';
import ramanaiduStudio from '../assets/Images/ramanaidu-studio.jpg';
import rosieHillsChurch from '../assets/Images/rosie-hills-church.jpg';
import arakuSunkarimettaChurch from '../assets/Images/araku-sunkarimetta-church.jpg';
import lambasingi from '../assets/Images/lambasingi.jpg';


// 4. Customer Trips Imports
import nameboard from '../assets/Images/vizag-nameboard.jpg';
import sightseeing from '../assets/Images/vizag-sightseeing.jpg';
import cityGeneral from '../assets/Images/vizag-city-general.jpg';

// 5. Events Imports
import paragliding from '../assets/Images/rushikonda-paragliding.jpg';
import sunrise from '../assets/Images/vizag-sunrise.jpg';
import sunriseAlt from '../assets/Images/vizag-sunrise-alt.jpg';
import jettySunset from '../assets/Images/vizag-jetty-sunset.jpg';
import iconicSunrise from '../assets/Images/vizag-iconic-sunrise.jpg';
import sunset from '../assets/Images/vizag-sunset.jpg';
import sunset1 from '../assets/Images/vizag-sunset-1.jpg';

const Gallery = () => {
  const categories = ['All', 'Beaches', 'Tourist Places', 'Customer Trips', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = [
    // --- Beaches ---
    { src: beachViews, alt: "Scenic Rishikonda Beach Views", category: "Beaches" },
    { src: vizagCityBeach, alt: "RK Beach City Coastline", category: "Beaches" },
    { src: divisBeach, alt: "Divis Beach Rocky Shore", category: "Beaches" },
    { src: beachCrescent, alt: "Crescent Moon Bay Sunset", category: "Beaches" },
    { src: puriBeach, alt: "Puri Beach Odisha Golden Sands", category: "Beaches" },

    // --- Tourist Places ---
    { src: thotlakonda, alt: "Thotlakonda Ancient Buddhist Stupas", category: "Tourist Places" },
    { src: borraCaves, alt: "Borra Caves Limestone Formations", category: "Tourist Places" },
    { src: katikaWaterfall, alt: "Katika Waterfall Ghats", category: "Tourist Places" },
    { src: woodenBridge, alt: "Araku Valley Coffee Gardens Wooden Bridge", category: "Tourist Places" },
    { src: simhachalam, alt: "Simhachalam Lord Narasimha Temple", category: "Tourist Places" },
    { src: ttdVizag, alt: "TTD Temple atop Ridge road", category: "Tourist Places" },
    { src: kailashagiri, alt: "Lord Shiva Parvathi Statue Kailasagiri", category: "Tourist Places" },
    { src: kailashagiriGlassBridge, alt: "Kailasagiri Hilltop Glass Bridge View", category: "Tourist Places" },
    { src: fishingHarbour, alt: "Vizag Fishing Harbour Jetties", category: "Tourist Places" },
    { src: vizagViewpoint, alt: "Vizag City view from Top Hill", category: "Tourist Places" },
    { src: arakuValley, alt: "Ghat Roads of Araku Valley", category: "Tourist Places" },
    { src: tenetiPark, alt: "Teneti Park Seafront Path", category: "Tourist Places" },
    { src: tenetiParkView, alt: "Scenic Teneti Park Landscape", category: "Tourist Places" },
    { src: kondakarlaAva, alt: "Kondakarla Ava Bird Sanctuary Lake", category: "Tourist Places" },
    { src: vizagZoo, alt: "Indira Gandhi Zoological Park Entrance", category: "Tourist Places" },
    { src: buddha, alt: "White Buddha Statue Monument", category: "Tourist Places" },
    { src: ramabanamTemple, alt: "Rama Banam Temple Complex", category: "Tourist Places" },
    { src: ramanaiduStudio, alt: "Rama Naidu Film Studios Viewpoint", category: "Tourist Places" },
    { src: rosieHillsChurch, alt: "Rose Hill Church Hillside View", category: "Tourist Places" },
    { src: arakuSunkarimettaChurch, alt: "Baptist Church in Sunkarimetta Araku", category: "Tourist Places" },
    { src: lambasingi, alt: "Chilly Misty Hills of Lambasingi", category: "Tourist Places" },


    // --- Customer Trips ---
    { src: nameboard, alt: "Guests pose at Vizag Name Board", category: "Customer Trips" },
    { src: sightseeing, alt: "Happy family sightseeing in Araku valley", category: "Customer Trips" },
    { src: cityGeneral, alt: "Cab client group enjoying local vizag trip", category: "Customer Trips" },

    // --- Events ---
    { src: paragliding, alt: "Paragliding event at Rushikonda Beach", category: "Events" },
    { src: sunrise, alt: "Breathtaking Sea Sunrise over Bay of Bengal", category: "Events" },
    { src: sunriseAlt, alt: "Golden Sunrise hitting the coastal road", category: "Events" },
    { src: jettySunset, alt: "Evening sunset view from Fishing Harbour Jetty", category: "Events" },
    { src: iconicSunrise, alt: "Iconic Beach Sunrise Spot in Vizag", category: "Events" },
    { src: sunset, alt: "Gorgeous Beach Sunset Landscape", category: "Events" },
    { src: sunset1, alt: "Golden Hour sunset at RK Beach", category: "Events" }
  ];

  // Filter images based on selected category
  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (src) => {
    // Find index in filtered list
    const index = filteredImages.findIndex(img => img.src === src);
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    setLightboxIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-white)', minHeight: '80vh' }}>
      <div className="container">
        <h1 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>Photo Gallery</h1>
        <p className="section-subtitle">
          Browse through all high-quality images of Vizag beaches, tourist places, vehicles, customer trips, and events.
        </p>

        {/* Category Filters Selector */}
        <div className="category-filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout 
          className="gallery-grid-categorized"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="gallery-card-modern"
                onClick={() => openLightbox(img.src)}
              >
                <div className="gallery-img-wrapper">
                  <img src={img.src} alt={img.alt} loading="lazy" className="gallery-photo" />
                  <span className="category-badge">{img.category}</span>
                  <div className="gallery-hover-overlay">
                    <ZoomIn size={32} color="white" />
                    <span className="hover-caption">{img.alt}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal (Interactive Image Slider popup) */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredImages[lightboxIndex] && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
            >
              <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>
                <X size={28} />
              </button>

              <button className="lightbox-nav nav-left" onClick={handlePrev}>
                <ChevronLeft size={36} />
              </button>

              <div className="lightbox-content-box">
                <motion.img 
                  key={filteredImages[lightboxIndex].src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={filteredImages[lightboxIndex].src} 
                  alt={filteredImages[lightboxIndex].alt} 
                  className="lightbox-image"
                />
                <div className="lightbox-caption">
                  <span className="lightbox-badge">{filteredImages[lightboxIndex].category}</span>
                  <p>{filteredImages[lightboxIndex].alt}</p>
                </div>
              </div>

              <button className="lightbox-nav nav-right" onClick={handleNext}>
                <ChevronRight size={36} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        /* Category filter bar styling */
        .category-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          margin-top: 20px;
        }

        .filter-btn {
          background-color: var(--bg-section);
          color: var(--text-secondary);
          border: 1px solid rgba(15, 76, 129, 0.08);
          padding: 10px 20px;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-btn:hover {
          background-color: rgba(15, 76, 129, 0.05);
          color: var(--primary-blue);
        }

        .filter-btn.active {
          background-color: var(--primary-blue);
          color: white;
          border-color: var(--primary-blue);
          box-shadow: 0 4px 12px rgba(15, 76, 129, 0.2);
        }

        /* Modern Grid layout */
        .gallery-grid-categorized {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .gallery-card-modern {
          border-radius: var(--radius-card);
          overflow: hidden;
          background: white;
          box-shadow: var(--shadow-soft);
          cursor: pointer;
          aspect-ratio: 4 / 3;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .gallery-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: rgba(15, 76, 129, 0.85);
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(15, 76, 129, 0.4), rgba(15, 76, 129, 0.9));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          gap: 12px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .hover-caption {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          font-family: var(--font-heading);
        }

        .gallery-card-modern:hover .gallery-photo {
          transform: scale(1.08);
        }

        .gallery-card-modern:hover .gallery-hover-overlay {
          opacity: 1;
        }

        /* Lightbox overlays */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1100;
        }

        .lightbox-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.05);
        }

        .nav-left {
          left: 24px;
        }

        .nav-right {
          right: 24px;
        }

        .lightbox-content-box {
          max-width: 900px;
          width: 90%;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .lightbox-caption {
          margin-top: 20px;
          color: white;
          text-align: center;
          max-width: 600px;
        }

        .lightbox-badge {
          background-color: var(--accent-yellow);
          color: var(--text-primary);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 8px;
        }

        .lightbox-caption p {
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .lightbox-nav {
            width: 44px;
            height: 44px;
          }
          .nav-left {
            left: 12px;
          }
          .nav-right {
            right: 12px;
          }
          .category-filter-bar {
            gap: 8px;
          }
          .filter-btn {
            padding: 8px 16px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
