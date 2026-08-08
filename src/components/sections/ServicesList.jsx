import React from 'react';
import { services } from '../../data/tours';
import { motion } from 'framer-motion';
import { Building2, Plane, HeartHandshake, Car } from 'lucide-react';

const iconMap = {
  temples: <Building2 size={36} color="var(--primary-blue)" />,
  airport: <Plane size={36} color="var(--primary-blue)" />,
  corporate: <Car size={36} color="var(--primary-blue)" />,
  marriages: <HeartHandshake size={36} color="var(--primary-blue)" />
};

const ServicesList = () => {
  return (
    <section id="services" className="section-padding bg-section" style={{ borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Premium Services
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We provide custom transportation solutions designed to offer complete peace of mind.
          </motion.p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-hover)' }}
              style={{ 
                padding: '40px 30px', 
                textAlign: 'center', 
                position: 'relative', 
                background: 'var(--bg-white)', 
                border: '1px solid rgba(15, 76, 129, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              {/* Subtle background decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(15,76,129,0.03) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '76px', 
                height: '76px', 
                borderRadius: '24px', 
                backgroundColor: 'rgba(15, 76, 129, 0.08)', 
                marginBottom: '28px',
                transition: 'all 0.3s'
              }} className="service-icon-box">
                {iconMap[service.id]}
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', fontWeight: 700, color: 'var(--primary-blue)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
