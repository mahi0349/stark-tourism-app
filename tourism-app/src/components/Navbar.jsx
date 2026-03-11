import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Compass, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar glass">
      <Link to="/" className="logo">
        <Plane size={24} color="var(--accent)" />
        Stark<span>Agency</span>
      </Link>
      
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/packages" className={location.pathname === '/packages' ? 'active' : ''}>Packages</Link>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
        <Link to="/login" className="btn btn-primary">
          <User size={18} /> Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
