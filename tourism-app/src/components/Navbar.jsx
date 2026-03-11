import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMenu = () => setIsMobileOpen(false);

  return (
    <nav className="navbar glass">
      <Link to="/" className="logo" onClick={closeMenu}>
        <Plane size={24} color="var(--accent)" />
        Stark<span>Agency</span>
      </Link>

      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      <div className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
        <Link to="/packages" className={location.pathname === '/packages' ? 'active' : ''} onClick={closeMenu}>Packages</Link>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''} onClick={closeMenu}>Dashboard</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
        <Link to="/login" className="btn btn-primary" onClick={closeMenu}>
          <User size={18} /> Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
