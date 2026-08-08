import React, { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    if (!name || !phone || !message) return;
    
    const text = `Hi Vizag Tours & Cabs,
*Name:* ${name}
*Phone:* ${phone}
*Message:* ${message}`;
    window.open(`https://wa.me/918885099940?text=${encodeURIComponent(text)}`, '_blank');
  };
  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-section)' }}>
      <div className="container">
        <h1 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h1>
        <p className="section-subtitle">We are here to help you plan your perfect trip in and around Visakhapatnam.</p>
        
        <div className="contact-grid">
          <div className="contact-info-cards">
            <div className="info-card">
              <Phone className="info-icon" size={32} color="var(--secondary-blue)" />
              <div>
                <h3>Call or WhatsApp</h3>
                <p style={{ fontWeight: 600, color: 'var(--primary-blue)', fontSize: '1.05rem', margin: '4px 0' }}>+91 88850 99940</p>
                <p style={{ fontWeight: 600, color: 'var(--primary-blue)', fontSize: '1.05rem', margin: '4px 0' }}>+91 77025 35887</p>
                <p>Available 24/7 for bookings</p>
              </div>
            </div>
            
            <div className="info-card">
              <Mail className="info-icon" size={32} color="var(--secondary-blue)" />
              <div>
                <h3>Email Us</h3>
                <p style={{ fontWeight: 600, color: 'var(--primary-blue)', fontSize: '1.05rem', margin: '4px 0' }}>venkat10d@gmail.com</p>
                <p>We'll reply within 24 hours</p>
              </div>
            </div>

            <div className="info-card">
              <Clock className="info-icon" size={32} color="var(--secondary-blue)" />
              <div>
                <h3>Working Hours</h3>
                <p style={{ fontWeight: 600, color: 'var(--primary-blue)', fontSize: '1.05rem', margin: '4px 0' }}>Monday - Sunday</p>
                <p>Open 24 Hours</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3 style={{ fontFamily: 'var(--font-heading)' }}>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Phone / WhatsApp</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        .contact-info-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-card {
          background: var(--bg-white);
          padding: 2rem;
          border-radius: var(--radius-card);
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-soft);
          border: 1px solid rgba(15, 76, 129, 0.05);
          text-align: left;
        }
        .info-icon {
          flex-shrink: 0;
        }
        .info-card h3 {
          color: var(--primary-blue);
          margin-bottom: 0.25rem;
          font-size: 1.15rem;
          font-family: var(--font-heading);
        }
        .info-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        .contact-form-container {
          background: var(--bg-white);
          padding: 2.5rem;
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-soft);
          border: 1px solid rgba(15, 76, 129, 0.05);
        }
        .contact-form-container h3 {
          margin-bottom: 1.5rem;
          color: var(--primary-blue);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color var(--transition-speed);
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--secondary-blue);
        }
        .contact-form button {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Contact;
