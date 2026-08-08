import React from 'react';
import PopularVehicles from '../components/sections/PopularVehicles';

const Fleet = () => {
  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <h1 className="section-title" style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Our Fleet & Pricing</h1>
        <p className="section-subtitle" style={{ marginBottom: '40px' }}>
          Choose from our wide range of premium, well-maintained cabs, travelers, and buses. Click "Specs & Rates" to view complete tariff rates.
        </p>
        <PopularVehicles showAll={true} />
      </div>
    </div>
  );
};

export default Fleet;
