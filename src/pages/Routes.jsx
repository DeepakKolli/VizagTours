import React from 'react';

const Routes = () => {
  const dummyRoutes = [
    { from: "Vizag Airport", to: "RK Beach", price: "₹600", time: "45 Mins" },
    { from: "Vizag Railway Station", to: "Rushikonda", price: "₹800", time: "50 Mins" },
    { from: "Vizag", to: "Araku Valley", price: "₹4,000", time: "3.5 Hours" },
    { from: "Vizag", to: "Annavaram Temple", price: "₹3,500", time: "2.5 Hours" },
    { from: "Vizag", to: "Lambasingi", price: "₹4,500", time: "3 Hours" }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="section-title">Popular Routes & Estimated Pricing</h1>
        <p className="section-subtitle">Transparent pricing for the most frequently requested routes. Prices are estimates and may vary slightly based on the exact vehicle chosen.</p>
        
        <div className="routes-table-container">
          <table className="routes-table">
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Estimated Time</th>
                <th>Starting Price (Sedan)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyRoutes.map((route, index) => (
                <tr key={index}>
                  <td>{route.from}</td>
                  <td>{route.to}</td>
                  <td>{route.time}</td>
                  <td className="price-cell">{route.price}</td>
                  <td>
                    <a href={`https://wa.me/918885099940?text=${encodeURIComponent(`Hi Vizag Tours & Cabs, I would like to book a cab from ${route.from} to ${route.to}. Please share pricing and availability.`)}`} target="_blank" rel="noreferrer" className="btn btn-accent btn-sm">Book</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .routes-table-container {
          overflow-x: auto;
          background: var(--bg-white);
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
        }
        .routes-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .routes-table th, .routes-table td {
          padding: 1.2rem;
          border-bottom: 1px solid var(--border-light);
        }
        .routes-table th {
          background-color: var(--primary-blue);
          color: var(--bg-white);
          font-weight: 600;
        }
        .routes-table tr:hover {
          background-color: var(--bg-light);
        }
        .price-cell {
          color: var(--accent-orange);
          font-weight: 700;
        }
        .btn-sm {
          padding: 8px 16px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Routes;
