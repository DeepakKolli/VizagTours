import React from 'react';
import { pricing, pricingDisclaimer } from '../../data/pricing';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';

const PricingTable = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Fleet & Pricing
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Choose from our wide range of well-maintained vehicles. <br/>
          <span style={{ color: 'var(--accent-yellow)', fontWeight: 500 }}>{pricingDisclaimer}</span>
        </motion.p>

        <div style={{ overflowX: 'auto', marginTop: '40px', paddingBottom: '20px' }}>
          <table style={{ width: '100%', minWidth: '900px', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--bg-white)', borderRadius: 'var(--radius-card)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                <th style={{ padding: '20px' }}>Vehicle</th>
                <th style={{ padding: '20px' }}>Seats</th>
                <th style={{ padding: '20px' }}>Local</th>
                <th style={{ padding: '20px' }}>Araku 1 Day</th>
                <th style={{ padding: '20px' }}>Araku 2 Days</th>
                <th style={{ padding: '20px' }}>Rental (8hr/100km)</th>
                <th style={{ padding: '20px' }}>Out Station</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((car, index) => (
                <motion.tr 
                  key={car.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: index % 2 === 0 ? 'white' : 'var(--bg-section)' }}
                >
                  <td style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', fontWeight: 600 }}>
                    <img src={car.image} alt={car.name} style={{ width: '80px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                    {car.name}
                  </td>
                  <td style={{ padding: '16px 20px' }}>{car.seats > 0 ? car.seats : '-'}</td>
                  <td style={{ padding: '16px 20px', fontWeight: 500 }}>{car.local}</td>
                  <td style={{ padding: '16px 20px' }}>{car.araku1}</td>
                  <td style={{ padding: '16px 20px' }}>{car.araku2}</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{car.rental}</td>
                  <td style={{ padding: '16px 20px' }}>{car.outstation}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
