import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Package, CreditCard, Star, Settings, Heart, History, User as UserIcon, Calendar, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const bookings = [
  { id: '1001', user: 'Ahsan Stark', package: 'Dubai Luxury Desert', date: '2026-04-12', pax: 2, status: 'Confirmed', amount: '270,000' },
  { id: '1002', user: 'John Doe', package: 'Paris Romance', date: '2026-05-01', pax: 4, status: 'Pending', amount: '616,000' },
  { id: '1003', user: 'Alice Smith', package: 'Swiss Alps', date: '2026-03-25', pax: 1, status: 'Cancelled', amount: '210,000' },
];

const userBookings = [
  { id: '1001', package: 'Dubai Luxury Desert', date: '2026-04-12', pax: 2, status: 'Confirmed', amount: '270,000', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop' }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setRole(storedRole);
    } else {
      // If absolutely no role is found, redirect to login for demo purposes
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  if (role === 'user') {
    return (
      <div className="dashboard" style={{ paddingTop: '80px', gridTemplateColumns: 'minmax(200px, 250px) 1fr' }}>
        <aside className="sidebar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '50%' }}>
              <UserIcon size={24} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.2rem' }}>Traveler Profile</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Basic Member</p>
            </div>
          </div>
          <nav className="sidebar-nav">
            <button className={`sidebar-link ${activeTab === 'bookings' ? 'active' : ''}`} onClick={() => setActiveTab('bookings')} style={{ width: '100%', textAlign: 'left' }}>
              <History size={18} /> My Trips
            </button>
            <button className={`sidebar-link ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')} style={{ width: '100%', textAlign: 'left' }}>
              <Heart size={18} /> Wishlist
            </button>
            <button className="sidebar-link" style={{ width: '100%', textAlign: 'left' }}>
              <UserIcon size={18} /> Profile Settings
            </button>
            <button className="sidebar-link" onClick={handleLogout} style={{ width: '100%', textAlign: 'left', marginTop: 'auto', color: '#ff4d4d' }}>
              Logout
            </button>
          </nav>
        </aside>

        <main className="dashboard-content">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome Back!</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Ready for your next adventure?</p>

          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={20} color="var(--accent)" /> Upcoming & Past Trips
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {userBookings.map(book => (
                <div key={book.id} style={{ display: 'flex', gap: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-glass)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <img src={book.img} alt={book.package} style={{ width: '120px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{book.package}</h4>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <span><Calendar size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> {book.date}</span>
                      <span><Users size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> {book.pax} Guests</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem' }}>₹{book.amount}</div>
                    <span className={`status-badge status-${book.status.toLowerCase()}`}>{book.status}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link to="/packages" className="btn btn-outline">Explore More Packages</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3 style={{ marginBottom: '2rem', color: '#fff', fontSize: '1.2rem' }}>Admin Portal</h3>
        <nav className="sidebar-nav">
          <button 
            className={`sidebar-link ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
            style={{ width: '100%', textAlign: 'left' }}
          >
            <LayoutDashboard size={18} /> Bookings
          </button>
          <button className="sidebar-link" style={{ width: '100%', textAlign: 'left' }}>
            <Package size={18} /> Tour Packages
          </button>
          <button className="sidebar-link" style={{ width: '100%', textAlign: 'left' }}>
            <Users size={18} /> Users
          </button>
          <button className="sidebar-link" style={{ width: '100%', textAlign: 'left' }}>
            <CreditCard size={18} /> Payments
          </button>
          <button className="sidebar-link" style={{ width: '100%', textAlign: 'left' }}>
            <Star size={18} /> Feedback
          </button>
          <button className="sidebar-link" onClick={handleLogout} style={{ width: '100%', textAlign: 'left', marginTop: 'auto', color: '#ff4d4d' }}>
            Logout
          </button>
        </nav>
      </aside>

      <main className="dashboard-content">
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Overview</h2>

        <div className="stats-grid">
          <div className="stat-card glass">
            <div style={{ color: 'var(--text-secondary)' }}>Total Bookings</div>
            <div className="stat-value">2,845</div>
            <div style={{ color: 'var(--success)', fontSize: '0.85rem', marginTop: '10px' }}>+12% this month</div>
          </div>
          <div className="stat-card glass">
            <div style={{ color: 'var(--text-secondary)' }}>Active Packages</div>
            <div className="stat-value">62</div>
            <div style={{ color: 'var(--success)', fontSize: '0.85rem', marginTop: '10px' }}>+4 new packages</div>
          </div>
          <div className="stat-card glass">
            <div style={{ color: 'var(--text-secondary)' }}>Revenue (INR)</div>
            <div className="stat-value">₹8.4M</div>
            <div style={{ color: 'var(--success)', fontSize: '0.85rem', marginTop: '10px' }}>+18% this month</div>
          </div>
        </div>

        <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Bookings</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Package</th>
                  <th>Date</th>
                  <th>Pax</th>
                  <th>Amount (₹)</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(book => (
                  <tr key={book.id}>
                    <td>#{book.id}</td>
                    <td>{book.user}</td>
                    <td>{book.package}</td>
                    <td>{book.date}</td>
                    <td>{book.pax}</td>
                    <td>{book.amount}</td>
                    <td>
                      <span className={`status-badge status-${book.status.toLowerCase()}`}>
                        {book.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
