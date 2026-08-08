import React, { useState, useEffect, useRef } from 'react';
import { reviews as initialReviews } from '../../data/reviews';
import ReviewForm from '../ui/ReviewForm';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const avatarColors = ['#0F4C81', '#1E88E5', '#F4B400', '#10B981', '#7C3AED', '#DC2626', '#D97706'];

const getInitials = (name) => name ? name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : 'C';

const Testimonials = () => {
  const [allReviews, setAllReviews] = useState(initialReviews);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [allReviews.length]);

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % allReviews.length);

  // Called when user submits a new review — append to list and scroll carousel to the new review
  const handleNewReview = (review) => {
    const newReview = {
      id: Date.now(),
      ...review
    };
    setAllReviews((prev) => {
      const updated = [...prev, newReview];
      // Set activeIndex to the last item (the new review) after state update
      setTimeout(() => setActiveIndex(updated.length - 1), 100);
      return updated;
    });
    // Smooth scroll down to the carousel
    setTimeout(() => {
      carouselRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  };

  const review = allReviews[activeIndex];

  return (
    <section style={{ backgroundColor: 'var(--bg-section)' }}>

      {/* ── Review Form ───────────────────────────── */}
      <div className="section-padding" style={{ borderBottom: '1px solid rgba(15,76,129,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Leave Us a Review
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Your feedback helps future travellers choose the best service. Thank you!
            </motion.p>
          </div>
          <ReviewForm onSubmit={handleNewReview} />
        </div>
      </div>

      {/* ── Testimonials Carousel ─────────────────── */}
      <div className="section-padding" ref={carouselRef} style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We take pride in providing exceptional service. Here is the feedback from our recent travellers.
            </motion.p>
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '0 48px' }}>
            <div style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                {review && (
                  <motion.div
                    key={review.id}
                    className="card"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      padding: '40px',
                      position: 'relative',
                      width: '100%',
                      background: 'var(--bg-white)',
                      border: '1px solid rgba(15, 76, 129, 0.05)',
                      boxShadow: 'var(--shadow-soft)'
                    }}
                  >
                    <Quote size={48} color="rgba(15, 76, 129, 0.07)" style={{ position: 'absolute', top: '24px', right: '24px' }} />

                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={i < (review.rating ?? 5) ? 'var(--accent-yellow)' : '#E2E8F0'}
                          color={i < (review.rating ?? 5) ? 'var(--accent-yellow)' : '#E2E8F0'}
                        />
                      ))}
                    </div>

                    <p style={{ color: 'var(--text-primary)', marginBottom: '32px', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.75', minHeight: '80px' }}>
                      "{review.comment}"
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
                      <div style={{
                        width: '48px', height: '48px', borderRadius: '50%',
                        backgroundColor: avatarColors[activeIndex % avatarColors.length],
                        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        flexShrink: 0
                      }}>
                        {getInitials(review.name)}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.05rem', marginBottom: '2px', color: 'var(--primary-blue)' }}>{review.name}</h4>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>{review.trip}</span>
                      </div>
                      {/* New badge for user-submitted reviews */}
                      {review.id > 1000 && (
                        <span style={{ marginLeft: 'auto', backgroundColor: '#DCFCE7', color: '#16A34A', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>
                          ✓ New
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Arrows */}
            {[{ dir: 'prev', side: 'left', fn: handlePrev, Icon: ChevronLeft }, { dir: 'next', side: 'right', fn: handleNext, Icon: ChevronRight }].map(({ dir, side, fn, Icon }) => (
              <button
                key={dir}
                onClick={fn}
                style={{
                  position: 'absolute', [side]: '0', top: '50%', transform: 'translateY(-50%)',
                  background: 'var(--bg-white)', border: '1px solid #E2E8F0', borderRadius: '50%',
                  width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-section)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-white)'}
              >
                <Icon size={20} color="var(--primary-blue)" />
              </button>
            ))}

            {/* Dot Indicators */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
              {allReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    width: activeIndex === index ? '24px' : '8px',
                    height: '8px', borderRadius: '4px',
                    backgroundColor: activeIndex === index ? 'var(--primary-blue)' : '#CBD5E1',
                    border: 'none', cursor: 'pointer', transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>

            {/* Total count badge */}
            <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Review {activeIndex + 1} of {allReviews.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
