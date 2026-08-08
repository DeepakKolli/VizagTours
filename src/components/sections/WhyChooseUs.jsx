import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, ShieldCheck, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const trustPoints = [
    {
      id: 1,
      icon: <Users size={32} color="var(--primary-blue)" />,
      value: "5000+",
      label: "Happy Customers",
      desc: "Trusted by thousands of families and corporate groups for their journeys."
    },
    {
      id: 2,
      icon: <Calendar size={32} color="var(--primary-blue)" />,
      value: "30+ Years",
      label: "Experience",
      desc: "Decades of expertise in guiding tours and handling logistics across India."
    },
    {
      id: 3,
      icon: <ShieldCheck size={32} color="var(--primary-blue)" />,
      value: "24×7",
      label: "Support Service",
      desc: "Round-the-clock availability for bookings, queries, and emergency support."
    }
  ];

  return (
    <section className="section-padding bg-section" style={{ borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(244, 180, 0, 0.1)', padding: '6px 16px', borderRadius: '20px', marginBottom: '16px' }}>
            <Star size={16} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue)' }}>RATED 4.9/5 BY CUSTOMERS</span>
          </div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose VizagTours?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We set the standard for premium, reliable, and transparent travel services in Visakhapatnam.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {trustPoints.map((point, index) => (
            <motion.div 
              key={point.id}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              style={{ padding: '32px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--bg-white)', border: '1px solid rgba(15, 76, 129, 0.05)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'rgba(15, 76, 129, 0.08)', marginBottom: '20px' }}>
                {point.icon}
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '4px' }}>{point.value}</h3>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>{point.label}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
