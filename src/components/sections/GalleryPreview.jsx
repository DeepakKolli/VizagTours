import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import 6 preview images
import thotlakonda from '../../assets/Images/thotlakonda-buddha-stupas.jpg';
import beachViews from '../../assets/Images/vizag-beach-views.jpg';
import borraCaves from '../../assets/Images/araku-borra-caves.jpg';
import katikaWaterfall from '../../assets/Images/araku-katika-waterfall.jpg';
import simhachalam from '../../assets/Images/simhachalam-vizag.jpg';
import vizagView from '../../assets/Images/vizag-city-beach.jpg';

const GalleryPreview = () => {
  const images = [
    { src: vizagView, alt: "Vizag City Beach View" },
    { src: beachViews, alt: "Scenic Beach Views" },
    { src: borraCaves, alt: "Borra Caves, Araku Valley" },
    { src: katikaWaterfall, alt: "Katika Waterfalls" },
    { src: simhachalam, alt: "Simhachalam Temple" },
    { src: thotlakonda, alt: "Thotlakonda Buddhist Stupas" }
  ];

  return (
    <section id="gallery" className="section-padding bg-section" style={{ borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Memorable Destinations
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Here are some of the most popular scenic locations our travelers visit.
          </motion.p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '24px',
          marginBottom: '40px'
        }}>
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              className="gallery-item-preview"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: 'var(--shadow-soft)',
                cursor: 'pointer'
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                className="preview-img"
              />
              <div className="preview-overlay">
                <span>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/gallery" className="btn btn-outline" style={{ padding: '12px 32px' }}>
            View Full Photo Gallery
          </Link>
        </div>
      </div>

      <style>{`
        .gallery-item-preview:hover .preview-img {
          transform: scale(1.1);
        }
        .preview-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 76, 129, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .preview-overlay span {
          color: white;
          font-weight: 600;
          font-size: 1.05rem;
          font-family: var(--font-heading);
          padding: 0 16px;
          text-align: center;
          transform: translateY(15px);
          transition: transform 0.3s ease;
        }
        .gallery-item-preview:hover .preview-overlay {
          opacity: 1;
        }
        .gallery-item-preview:hover .preview-overlay span {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default GalleryPreview;
