import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 5%' }}>
      <Compass size={80} color="var(--accent)" style={{ marginBottom: '2rem', animation: 'spin 10s linear infinite' }} />
      <h1 style={{ fontSize: '6rem', background: 'linear-gradient(to right, #00d4ff, #fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Lost in the wilderness?</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px' }}>
        The destination you are looking for does not exist or has been moved to another universe.
      </p>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
