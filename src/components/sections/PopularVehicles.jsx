import React, { useState } from 'react';
import { pricing } from '../../data/pricing';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Wind, ChevronDown, ChevronUp, Check, MessageSquare } from 'lucide-react';

const PopularVehicles = ({ showAll = false }) => {
  // Let's keep track of which vehicle card is expanded
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  // We only show the popular vehicles on the homepage to avoid cluttering (Dzire, Ertiga, Crysta, Force, Urbania)
  const popularVehiclesList = showAll 
    ? pricing.filter(car => car.id !== 16)
    : pricing.filter(car => [1, 2, 4, 6, 9].includes(car.id));

  const handleBookNow = (carName) => {
    const text = encodeURIComponent(`Hi Vizag Tours & Cabs, I would like to book a ${carName} for my trip to Vizag. Please share pricing and availability.`);
    window.open(`https://wa.me/918885099940?text=${text}`, '_blank');
  };

  return (
    <div className="vehicles-list-container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'start' }}>
        {popularVehiclesList.map((car) => {
          const isExpanded = expandedId === car.id;
          
          // Get car-specific highlights for the 2-3 points shown initially
          let highlights = [];
          if (car.seats <= 4) {
            highlights = [
              { icon: <Users size={16} />, text: `${car.seats} Seats` },
              { icon: <Wind size={16} />, text: 'AC Included' },
              { icon: <Briefcase size={16} />, text: 'Compact / Sedan' }
            ];
          } else if (car.seats <= 7) {
            highlights = [
              { icon: <Users size={16} />, text: `${car.seats} Seats` },
              { icon: <Wind size={16} />, text: 'Dual AC' },
              { icon: <Briefcase size={16} />, text: 'Spacious SUV' }
            ];
          } else {
            highlights = [
              { icon: <Users size={16} />, text: `${car.seats} Seats` },
              { icon: <Wind size={16} />, text: 'AC Coach' },
              { icon: <Briefcase size={16} />, text: 'Large Groups' }
            ];
          }

          return (
            <motion.div 
              key={car.id}
              className="vehicle-card-modern"
              layout
              style={{
                background: 'var(--bg-white)',
                borderRadius: 'var(--radius-card)',
                boxShadow: 'var(--shadow-soft)',
                border: '1px solid rgba(15, 76, 129, 0.08)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Image Header */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
                <img 
                  src={car.image} 
                  alt={car.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px', transition: 'transform 0.5s ease' }}
                  className="vehicle-img"
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '20px'
                }}>
                  {car.seats <= 7 ? 'CAB' : 'TRAVELER / BUS'}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {car.name}
                </h3>
                
                {/* Initial Specs (2-3 Points) */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  {highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-section)', padding: '4px 8px', borderRadius: '6px' }}>
                      {h.icon}
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>

                {/* Starting Price */}
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Local Package</span>
                  {car.local === 'Contact for pricing' ? (
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--accent-orange)', lineHeight: '1.4', marginTop: '4px' }}>
                      📞 Contact for pricing
                    </div>
                  ) : (
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-blue)', lineHeight: '1.2' }}>
                      {car.local} <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-secondary)' }}>/ day</span>
                    </div>
                  )}
                </div>

                {/* Action Row */}
                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                  <button 
                    onClick={() => toggleExpand(car.id)}
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      color: 'var(--primary-blue)',
                      border: '1px solid var(--primary-blue)',
                      borderRadius: 'var(--radius-btn)',
                      padding: '10px 14px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Specs & Rates</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <button 
                    onClick={() => handleBookNow(car.name)}
                    style={{
                      flex: 1,
                      backgroundColor: 'var(--accent-yellow)',
                      color: 'var(--text-primary)',
                      border: 'none',
                      borderRadius: 'var(--radius-btn)',
                      padding: '10px 14px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Book Cab</span>
                  </button>
                </div>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden', marginTop: '12px' }}
                    >
                      <div style={{ padding: '16px 0 0 0', borderTop: '1px dashed #e2e8f0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '4px' }}>Detailed Tariff Rate:</div>
                        
                        {car.local === 'Contact for pricing' ? (
                          <div style={{ backgroundColor: '#FFF8E6', border: '1px solid #FDE68A', borderRadius: '8px', padding: '12px', textAlign: 'center', color: '#92400E', fontSize: '0.85rem', fontWeight: 600 }}>
                            📞 Pricing for buses is customised based on your route & group size. Please contact us for a quote.
                          </div>
                        ) : (
                          <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid #f8fafc', paddingBottom: '4px' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>Araku 1-Day Trip:</span>
                              <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{car.araku1}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid #f8fafc', paddingBottom: '4px' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>Araku 2-Days Trip:</span>
                              <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{car.araku2}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid #f8fafc', paddingBottom: '4px' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>8hr/100km Rental:</span>
                              <span style={{ fontWeight: '600', color: 'var(--text-primary)', textAlign: 'right' }}>{car.rental.split('+')[0]}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid #f8fafc', paddingBottom: '4px' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>Outstation Rate:</span>
                              <span style={{ fontWeight: '600', color: 'var(--text-primary)', textAlign: 'right' }}>{car.outstation}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--success-green)', marginTop: '4px' }}>
                              <Check size={14} />
                              <span>Includes driver allowance & toll help</span>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularVehicles;
