import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Airport Transfers",
      desc: "Punctual pickup and drop-off to Visakhapatnam International Airport. Never miss a flight with our reliable service.",
      icon: "✈️"
    },
    {
      title: "Local Sightseeing",
      desc: "Customized day tours covering RK Beach, Kailasagiri, Submarine Museum, Rushikonda, and more.",
      icon: "🏖️"
    },
    {
      title: "Outstation Trips",
      desc: "Comfortable rides to Araku Valley, Annavaram, Srikakulam, and other neighboring districts.",
      icon: "🛣️"
    },
    {
      title: "Corporate Travel",
      desc: "Premium cabs for business executives, client pickups, and corporate events with monthly billing options.",
      icon: "💼"
    },
    {
      title: "Wedding Cars",
      desc: "Luxury vehicles for the bride, groom, and guests to make your special day perfectly comfortable.",
      icon: "🎀"
    },
    {
      title: "Hourly Rentals",
      desc: "Need a car for a few hours for shopping or meetings? Book our 4hr/40km or 8hr/80km packages.",
      icon: "⏱️"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">Comprehensive travel solutions designed for your comfort and convenience.</p>
        
        <div className="services-grid-page">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card-full">
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid-page {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .service-card-full {
          background: var(--bg-white);
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: transform var(--transition-speed);
          border-bottom: 4px solid var(--accent-orange);
        }
        .service-card-full:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .service-card-full h3 {
          color: var(--primary-blue);
          margin-bottom: 1rem;
        }
        .service-card-full p {
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};

export default Services;
