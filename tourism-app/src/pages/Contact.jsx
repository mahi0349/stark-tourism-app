import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section" style={{ paddingTop: '100px' }}>
      <h2 className="section-title" style={{ animation: 'fadeInUp 1s ease both' }}>Get In Touch</h2>
      <p className="section-subtitle" style={{ animation: 'fadeInUp 1s ease 0.2s both' }}>
        We would love to hear from you. Let's plan your next adventure.
      </p>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', animation: 'fadeInUp 1s ease 0.4s both' }}>
        
        {/* Contact Info */}
        <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--accent)' }}>Contact Information</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(0, 212, 255, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <MapPin size={24} color="var(--accent)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem' }}>Our Office</h4>
                <p style={{ color: 'var(--text-secondary)' }}>123 Explorer HQ, World Wide Avenue<br/>New York, NY 10001</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Phone size={24} color="var(--success)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem' }}>Phone</h4>
                <p style={{ color: 'var(--text-secondary)' }}>+1 (800) 555-0199<br/>Mon-Fri 9am-6pm EST</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(255, 77, 77, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Mail size={24} color="var(--secondary-accent)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem' }}>Email</h4>
                <p style={{ color: 'var(--text-secondary)' }}>hello@starkagency.com<br/>support@starkagency.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="How can we help you?" required style={{ resize: 'vertical', minHeight: '120px' }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
