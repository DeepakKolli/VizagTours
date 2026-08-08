import React, { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [trip, setTrip] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your name';
    if (!trip.trim()) e.trip = 'Please enter your trip name';
    if (rating === 0) e.rating = 'Please select a star rating';
    if (!message.trim() || message.trim().length < 10) e.message = 'Please write at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({ name: name.trim(), trip: trip.trim(), rating, comment: message.trim() });
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setName(''); setTrip(''); setRating(0); setMessage(''); setSubmitted(false); setErrors({});
    }, 3000);
  };

  const starLabels = ['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'];

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <div className="card" style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
            Share Your Experience
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Had a trip with us? Tell others what you thought!
          </p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center', padding: '32px 0' }}
            >
              <CheckCircle size={56} color="#10B981" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-blue)', marginBottom: '8px' }}>Thank you for your review!</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Your review has been added to our testimonials below.</p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} noValidate>
              {/* Name + Trip row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Ravi Kumar"
                    style={{
                      width: '100%', padding: '11px 14px', borderRadius: '8px', fontSize: '0.9rem',
                      border: errors.name ? '1.5px solid #EF4444' : '1px solid #E2E8F0',
                      fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none', transition: 'border 0.2s'
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--secondary-blue)'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#EF4444' : '#E2E8F0'}
                  />
                  {errors.name && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px' }}>{errors.name}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    Trip / Package *
                  </label>
                  <input
                    type="text"
                    value={trip}
                    onChange={e => setTrip(e.target.value)}
                    placeholder="e.g. Araku 2 Day Trip"
                    style={{
                      width: '100%', padding: '11px 14px', borderRadius: '8px', fontSize: '0.9rem',
                      border: errors.trip ? '1.5px solid #EF4444' : '1px solid #E2E8F0',
                      fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none', transition: 'border 0.2s'
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--secondary-blue)'}
                    onBlur={e => e.target.style.borderColor = errors.trip ? '#EF4444' : '#E2E8F0'}
                  />
                  {errors.trip && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px' }}>{errors.trip}</p>}
                </div>
              </div>

              {/* Star Rating */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Your Rating *
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', transition: 'transform 0.15s' }}
                      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.9)'}
                      onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <Star
                        size={32}
                        fill={(hoveredStar || rating) >= star ? 'var(--accent-yellow)' : 'transparent'}
                        color={(hoveredStar || rating) >= star ? 'var(--accent-yellow)' : '#CBD5E1'}
                        style={{ transition: 'all 0.15s' }}
                      />
                    </button>
                  ))}
                  {(hoveredStar || rating) > 0 && (
                    <span style={{ marginLeft: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-blue)' }}>
                      {starLabels[hoveredStar || rating]}
                    </span>
                  )}
                </div>
                {errors.rating && <p style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '6px' }}>{errors.rating}</p>}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Your Review *
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell us about your experience — the driver, the route, the places you visited..."
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: '8px', fontSize: '0.9rem',
                    border: errors.message ? '1.5px solid #EF4444' : '1px solid #E2E8F0',
                    fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box', outline: 'none', transition: 'border 0.2s', lineHeight: 1.6
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--secondary-blue)'}
                  onBlur={e => e.target.style.borderColor = errors.message ? '#EF4444' : '#E2E8F0'}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                  {errors.message
                    ? <p style={{ color: '#EF4444', fontSize: '0.78rem' }}>{errors.message}</p>
                    : <span />}
                  <span style={{ fontSize: '0.75rem', color: message.length > 10 ? '#10B981' : 'var(--text-secondary)' }}>
                    {message.length} chars
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '1rem', padding: '14px' }}
              >
                <Send size={18} /> Submit Review
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReviewForm;
