import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Globe, ShieldCheck } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <span className="hero-tag">Premium Touring Experience</span>
        <h1>Discover the World<br/>Like Never Before.</h1>
        <p>Book exclusive tour packages, explore breathtaking destinations, and manage your trips all in one place with Stark Agency.</p>
        <div className="hero-actions">
          <Link to="/packages" className="btn btn-primary">
            Explore Packages <ArrowRight size={18} />
          </Link>
          <Link to="/login" className="btn btn-outline">
            Join Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section glass" style={{ margin: '0 5%', borderRadius: 24, padding: '5rem 3rem' }}>
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">Experience the ultimate travel management system designed for comfort and security.</p>
        
        <div className="packages-grid" style={{ gap: '3rem' }}>
          <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(0,212,255,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Globe size={40} color="var(--accent)" />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Global Reach</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Access thousands of curated destinations from exotic islands to historic European cities.</p>
          </div>
          
          <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(16,185,129,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <ShieldCheck size={40} color="var(--success)" />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Secure Bookings</h3>
            <p style={{ color: 'var(--text-secondary)' }}>State-of-the-art encrypted payments for a safe and hassle-free transaction experience.</p>
          </div>

          <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255,77,77,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Star size={40} color="var(--secondary-accent)" />
            </div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Top-Rated Agents</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Connect with verified travel agents who provide 24/7 support throughout your journey.</p>
          </div>
        </div>
      </section>

      <section style={{ height: '10vh' }}></section>
    </div>
  );
};

export default Home;
