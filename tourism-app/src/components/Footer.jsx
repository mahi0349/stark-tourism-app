import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between', paddingBottom: '2rem' }}>
        
        <div style={{ flex: 1, minWidth: 250 }}>
          <div className="logo" style={{ marginBottom: '1rem' }}>
             <Compass size={24} color="var(--accent)" />
             Stark<span>Agency</span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            Elevate your journey with elite travel packages designed for the modern explorer. Experience the world like never before.
          </p>
        </div>

        <div style={{ flex: 1, minWidth: 200, textAlign: 'left' }}>
          <h4 style={{ marginBottom: '1rem', color: '#fff' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'var(--text-secondary)' }}>About Us</Link></li>
            <li><Link to="/packages" style={{ color: 'var(--text-secondary)' }}>Destinations</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Contact Support</Link></li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: 250, textAlign: 'left' }}>
          <h4 style={{ marginBottom: '1rem', color: '#fff' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <MapPin size={18} color="var(--accent)" /> 123 Explorer HQ, World Wide
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Phone size={18} color="var(--accent)" /> +1 (800) 555-0199
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Mail size={18} color="var(--accent)" /> hello@starkagency.com
            </li>
          </ul>
        </div>

      </div>
      <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '1.5rem', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Stark Agency Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
