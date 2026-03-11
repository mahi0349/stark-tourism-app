import React, { useState } from 'react';
import { LayoutDashboard, Users, Package, CreditCard, Star, Settings } from 'lucide-react';

const bookings = [
  { id: '1001', user: 'Ahsan Stark', package: 'Dubai Luxury Desert', date: '2026-04-12', pax: 2, status: 'Confirmed', amount: '270,000' },
  { id: '1002', user: 'John Doe', package: 'Santorini Sunset', date: '2026-05-01', pax: 4, status: 'Pending', amount: '616,000' },
  { id: '1003', user: 'Alice Smith', package: 'Swiss Alps', date: '2026-03-25', pax: 1, status: 'Cancelled', amount: '210,000' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

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
          <button className="sidebar-link" style={{ width: '100%', textAlign: 'left', marginTop: 'auto' }}>
            <Settings size={18} /> Settings
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
