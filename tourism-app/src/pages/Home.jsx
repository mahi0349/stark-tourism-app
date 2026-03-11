import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Globe, ShieldCheck, MapPin } from 'lucide-react';

const mockPopular = [
  { id: 1, name: 'Santorini Sunset', location: 'Greece', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Bali Escapade', location: 'Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Swiss Alps', location: 'Switzerland', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop' }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '120%', background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 60%)', zIndex: -1 }}></div>
        <span className="hero-tag" style={{ animation: 'fadeInUp 1s ease both' }}>Premium Touring Experience</span>
        <h1>Discover the World<br/>Like Never Before.</h1>
        <p>Book exclusive tour packages, explore breathtaking destinations, and manage your trips all in one place with Stark Agency.</p>
        <div className="hero-actions">
          <Link to="/packages" className="btn btn-primary">
            Explore Packages <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn btn-outline">
            Our Story
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section glass" style={{ margin: '0 5%', borderRadius: 24, padding: '5rem 3rem', animation: 'fadeInUp 1s ease 0.6s both' }}>
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">Experience the ultimate travel management system designed for comfort and security.</p>
        
        <div className="packages-grid" style={{ gap: '3rem' }}>
          <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(0,212,255,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', transition: 'var(--transition)' }} className="feature-icon">
              <Globe size={40} color="var(--accent)" />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Global Reach</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Access thousands of curated destinations from exotic islands to historic European cities.</p>
          </div>
          
          <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(16,185,129,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', transition: 'var(--transition)' }} className="feature-icon">
              <ShieldCheck size={40} color="var(--success)" />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Secure Bookings</h3>
            <p style={{ color: 'var(--text-secondary)' }}>State-of-the-art encrypted payments for a safe and hassle-free transaction experience.</p>
          </div>

          <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255,77,77,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', transition: 'var(--transition)' }} className="feature-icon">
              <Star size={40} color="var(--secondary-accent)" />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Top-Rated Agents</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Connect with verified travel agents who provide 24/7 support throughout your journey.</p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Trending Now</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>Most booked destinations this month.</p>
          </div>
          <Link to="/packages" className="btn btn-outline" style={{ display: 'none' }} id="view-all-desktop">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="packages-grid">
          {mockPopular.map(dest => (
            <div key={dest.id} className="package-card glass" style={{ padding: '1rem' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img src={dest.img} alt={dest.name} className="package-image" style={{ marginBottom: 0, height: '250px', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.3rem' }}>{dest.name}</h3>
                  <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
                    <MapPin size={14} /> {dest.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/packages" className="btn btn-outline">
            View All Destinations
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="glass" style={{ padding: '4rem 2rem', borderRadius: 24, textAlign: 'center', maxWidth: '800px', margin: '0 auto', border: '1px solid var(--accent)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Never Miss a Trip</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Subscribe to our newsletter for exclusive deals and travel inspiration.</p>
          <div style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            <input type="email" placeholder="Enter your email" className="form-control" style={{ flex: 1 }} />
            <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
