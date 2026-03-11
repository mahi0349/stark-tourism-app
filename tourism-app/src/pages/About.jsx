import React from 'react';
import { Users, Target, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="section" style={{ paddingTop: '100px' }}>
      <h2 className="section-title" style={{ animation: 'fadeInUp 1s ease both' }}>About Stark Agency</h2>
      <p className="section-subtitle" style={{ animation: 'fadeInUp 1s ease 0.2s both' }}>
        Curating exceptional travel experiences since 2010.
      </p>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: '24px', animation: 'fadeInUp 1s ease 0.4s both' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>Our Story</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            Founded by a group of passionate globetrotters, Stark Agency was built on a simple premise: travel should be intuitive, extraordinary, and profoundly personal. From navigating the busy streets of Tokyo to finding hidden gems in the Mediterranean, we've dedicated ourselves to uncovering the world's most spectacular destinations.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Today, we are a global leader in premium tourism, offering bespoke itineraries, state-of-the-art booking technology, and 24/7 dedicated support to ensure your journey is nothing short of perfection.
          </p>
        </div>

        <div className="packages-grid" style={{ animation: 'fadeInUp 1s ease 0.6s both' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'rgba(0, 212, 255, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Users size={32} color="var(--accent)" />
            </div>
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Expert Agents</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Verified professionals with decades of combined experience.</p>
          </div>
          
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Target size={32} color="var(--success)" />
            </div>
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Tailored Itineraries</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Every trip is highly customized to your specific needs.</p>
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255, 77, 77, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Shield size={32} color="var(--secondary-accent)" />
            </div>
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Trust & Safety</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Unwavering commitment to your security.</p>
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Award size={32} color="#f59e0b" />
            </div>
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Award Winning</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Recognized globally for outstanding service.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
