const fs = require('fs');
const path = require('path');

const pages = ['About', 'Services', 'Fleet', 'Packages', 'Routes', 'Gallery', 'Contact'];
const dir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

pages.forEach(page => {
    const content = `import React from 'react';

const ${page} = () => {
  return (
    <div className="container section-padding">
      <h1 className="section-title">${page === 'Fleet' ? 'Vehicles & Pricing' : page === 'Routes' ? 'Popular Routes' : page}</h1>
      <p style={{textAlign: 'center'}}>Content for ${page} is coming soon.</p>
    </div>
  );
};

export default ${page};
`;
    fs.writeFileSync(path.join(dir, `${page}.jsx`), content);
});

// also create Home.css
const homeCss = `
.hero {
  background: linear-gradient(rgba(15, 76, 129, 0.8), rgba(15, 76, 129, 0.8)), url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80') center/cover;
  color: white;
  padding: 8rem 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: transform var(--transition-speed);
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card h3 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
}
`;
fs.writeFileSync(path.join(dir, 'Home.css'), homeCss);
console.log('Pages created successfully.');
