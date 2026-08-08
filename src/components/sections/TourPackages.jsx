import React, { useState } from 'react';
import { tours, specialPackages, templePackages } from '../../data/tours';
import { Clock, Info, ChevronDown, ChevronUp, Phone, Star, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────
   Reusable collapsible tour card (with image)
───────────────────────────────────────────── */
const TourCard = ({ tour, index, expandedId, onToggle }) => (
  <motion.div
    key={tour.id}
    className="card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.08 * index }}
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    {tour.image && (
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
        <img src={tour.image} alt={tour.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {tour.price && (
          <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'var(--primary-blue)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700 }}>
            Starting {tour.price}
          </div>
        )}
      </div>
    )}

    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{tour.title}</h3>

      {tour.duration && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '12px', fontSize: '0.9rem' }}>
          <Clock size={15} />
          <span>{tour.duration}</span>
        </div>
      )}

      <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
        {tour.description}
      </p>

      <button
        onClick={() => onToggle(tour.id)}
        className="btn btn-outline"
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: 'auto', padding: '10px 20px' }}
      >
        <span>{expandedId === tour.id ? 'Hide Details' : 'View Details'}</span>
        {expandedId === tour.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <AnimatePresence>
        {expandedId === tour.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', marginTop: '16px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}
          >
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '10px' }}>
              Places We Cover / Itinerary:
            </h4>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '16px' }}>
              {tour.highlights.map((h, i) => <li key={i} style={{ marginBottom: '6px' }}>{h}</li>)}
            </ul>

            {tour.notes && tour.notes.length > 0 && (
              <div style={{ backgroundColor: 'var(--bg-section)', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
                <h5 style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', fontSize: '0.82rem', color: 'var(--accent-yellow)', fontWeight: 700 }}>
                  <Info size={13} /> Important Info
                </h5>
                <ul style={{ paddingLeft: '16px', listStyleType: 'circle', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {tour.notes.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
              </div>
            )}

            <a
              href={`https://wa.me/918885099940?text=${encodeURIComponent(`Hi Vizag Tours & Cabs, I'm interested in booking the ${tour.title}${tour.duration ? ` (${tour.duration})` : ''}. Please share details and availability.`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}
            >
              <Phone size={16} /> Book This Package
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   Temple package card — no image, list style
───────────────────────────────────────────── */
const TempleCard = ({ pkg, index, expandedId, onToggle }) => (
  <motion.div
    className="card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.08 * index }}
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    {pkg.image && (
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
        <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,76,129,0.7) 0%, transparent 60%)' }} />
        <span style={{ position: 'absolute', bottom: '12px', left: '12px', fontSize: '1.5rem' }}>🛕</span>
      </div>
    )}

    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span style={{ fontSize: '2rem' }}>🛕</span>
        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--primary-blue)' }}>{pkg.title}</h3>
      </div>

      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
        {pkg.temples.length} temples covered · Custom pricing available
      </p>

      <button
        onClick={() => onToggle(pkg.id)}
        className="btn btn-outline"
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: 'auto', padding: '10px 20px' }}
      >
        <span>{expandedId === pkg.id ? 'Hide Temples' : 'View Temples'}</span>
        {expandedId === pkg.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <AnimatePresence>
        {expandedId === pkg.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', marginTop: '16px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}
          >
            <ul style={{ paddingLeft: '0', listStyle: 'none', fontSize: '0.9rem', marginBottom: '16px' }}>
              {pkg.temples.map((temple, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', borderBottom: '1px solid #f0f0f0', color: 'var(--text-primary)' }}>
                  <MapPin size={13} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
                  {temple}
                </li>
              ))}
            </ul>

            <div style={{ backgroundColor: '#FFF8E6', border: '1px solid #FDE68A', borderRadius: '8px', padding: '12px', marginBottom: '16px', fontSize: '0.82rem', color: '#92400E' }}>
              ⚠️ No fixed pricing for temple packages. Contact us for custom quotes based on vehicle and group size.
            </div>

            <a
              href={`https://wa.me/918885099940?text=${encodeURIComponent(`Hi Vizag Tours & Cabs, I'm interested in the ${pkg.title}. Please share the pricing and availability.`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}
            >
              <Phone size={16} /> Enquire on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   Section header helper
───────────────────────────────────────────── */
const SectionHeader = ({ emoji, title, subtitle }) => (
  <div style={{ marginBottom: '40px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
      <span style={{ fontSize: '2.2rem' }}>{emoji}</span>
      <h2 className="section-title" style={{ margin: 0, textAlign: 'left', fontFamily: 'var(--font-heading)' }}>{title}</h2>
    </div>
    <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: 0 }}>{subtitle}</p>
  </div>
);

/* ─────────────────────────────────────────────
   Main Packages page component
───────────────────────────────────────────── */
const TourPackages = () => {
  const [expandedTour, setExpandedTour] = useState(null);
  const [expandedSpecial, setExpandedSpecial] = useState(null);
  const [expandedTemple, setExpandedTemple] = useState(null);

  return (
    <div>
      {/* ── 1. Popular Tour Packages ───────────────── */}
      <section id="tours" className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader
            emoji="🗺️"
            title="Popular Tour Packages"
            subtitle="Explore the best of Vizag and Araku with our carefully curated tour itineraries."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'start' }}>
            {tours.map((tour, i) => (
              <TourCard
                key={tour.id}
                tour={tour}
                index={i}
                expandedId={expandedTour}
                onToggle={(id) => setExpandedTour(expandedTour === id ? null : id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Special Packages ────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="container">
          <SectionHeader
            emoji="⭐"
            title="Special Packages"
            subtitle="Unique hill station, forest & waterfall experiences off the beaten path."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'start' }}>
            {specialPackages.map((pkg, i) => (
              <TourCard
                key={pkg.id}
                tour={pkg}
                index={i}
                expandedId={expandedSpecial}
                onToggle={(id) => setExpandedSpecial(expandedSpecial === id ? null : id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Temple Packages ─────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader
            emoji="🛕"
            title="Temple Packages"
            subtitle="Pilgrimage tours to sacred temples across Andhra Pradesh, Odisha, and South India. No fixed pricing — contact us for custom quotes."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'start' }}>
            {templePackages.map((pkg, i) => (
              <TempleCard
                key={pkg.id}
                pkg={pkg}
                index={i}
                expandedId={expandedTemple}
                onToggle={(id) => setExpandedTemple(expandedTemple === id ? null : id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;
