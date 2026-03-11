import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, User as UserIcon } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userRole', role);
    navigate('/dashboard'); // simulate login
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '450px', padding: '3rem', borderRadius: '24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {isLogin ? 'Enter your credentials to access your account.' : 'Join Stark Agency to book premium packages.'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserIcon size={16} /> Full Name
              </label>
              <input type="text" className="form-control" placeholder="Ahsan Stark" required />
            </div>
          )}

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} /> Email Address
            </label>
            <input type="email" className="form-control" placeholder="hello@example.com" required />
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={16} /> Password
            </label>
            <input type="password" className="form-control" placeholder="••••••••" required />
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Account Type</label>
            <select 
              className="form-control" 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              style={{ padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)' }}
            >
              <option value="user" style={{ color: '#000' }}>Traveler (User)</option>
              <option value="admin" style={{ color: '#000' }}>Agency Admin</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button" 
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: 'var(--accent)', fontWeight: '600' }}
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
