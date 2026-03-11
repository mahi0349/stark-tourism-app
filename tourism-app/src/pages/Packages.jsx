import React, { useState } from 'react';
import { MapPin, Clock, CalendarDays, IndianRupee } from 'lucide-react';

const mockPackages = [
  {
    id: 1,
    name: 'Santorini Sunset Retreat',
    destination: 'Santorini, Greece',
    img: 'https://images.unsplash.com/photo-1613395877344-13d4a3215430?q=80&w=600&auto=format&fit=crop',
    price: 154000,
    duration: 5,
    agent: 'Wanderlust Tours'
  },
  {
    id: 2,
    name: 'Kyoto Zen Experience',
    destination: 'Kyoto, Japan',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    price: 120000,
    duration: 7,
    agent: 'Samurai Travels'
  },
  {
    id: 3,
    name: 'Swiss Alps Adventure',
    destination: 'Zermatt, Switzerland',
    img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop',
    price: 210000,
    duration: 6,
    agent: 'Alpine Routes'
  },
  {
    id: 4,
    name: 'Bali Beach Escapade',
    destination: 'Bali, Indonesia',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
    price: 85000,
    duration: 4,
    agent: 'Island Hoppers'
  },
  {
    id: 5,
    name: 'Maldives Paradise',
    destination: 'Malé, Maldives',
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop',
    price: 280000,
    duration: 5,
    agent: 'Oceania Travels'
  },
  {
    id: 6,
    name: 'Dubai Luxury Desert',
    destination: 'Dubai, UAE',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
    price: 135000,
    duration: 4,
    agent: 'Desert Kings'
  }
];

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockPackages.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section" style={{ paddingTop: '100px' }}>
      <h2 className="section-title">Explore Global Packages</h2>
      <p className="section-subtitle">Find your next breathtaking adventure.</p>

      <div style={{ maxWidth: 500, margin: '0 auto 4rem' }}>
        <input 
          type="text" 
          className="form-control glass" 
          placeholder="Search destinations or packages..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="packages-grid">
        {filtered.map(pkg => (
          <div key={pkg.id} className="package-card glass">
            <img src={pkg.img} alt={pkg.name} className="package-image" />
            <div className="package-header">
              <h3 className="package-title">{pkg.name}</h3>
              <div className="package-price" style={{ display: 'flex', alignItems: 'center' }}>
                <IndianRupee size={20} />{pkg.price.toLocaleString('en-IN')}
              </div>
            </div>
            
            <div className="package-location">
              <MapPin size={16} /> {pkg.destination}
            </div>
            
            <div className="package-details">
              <div className="detail-item">
                <Clock size={16} color="var(--accent)" /> {pkg.duration} Days
              </div>
              <div className="detail-item">
                <CalendarDays size={16} color="var(--accent)" /> Daily
              </div>
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
         <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)' }}>
            No packages found for "{searchTerm}"
         </div>
      )}
    </div>
  );
};

export default Packages;
