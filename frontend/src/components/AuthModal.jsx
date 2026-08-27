import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { Lock, Mail, User, Building, ArrowRight } from 'lucide-react';
import axios from 'axios';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const { addToast } = useToast();
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    company: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isRegister ? '/api/v1/auth/register/' : '/api/v1/auth/login/';
      
      // Strict request: no catch fallback that creates fake accounts!
      const response = await axios.post(endpoint, formData);

      if (response.data && response.data.success) {
        localStorage.setItem('ecaitm_token', response.data.token);
        localStorage.setItem('ecaitm_user', JSON.stringify(response.data.user));
        
        addToast(response.data.message || (isRegister ? 'Account created successfully! Please sign in.' : 'Sign in successful!'), 'success');
        
        if (onLoginSuccess) onLoginSuccess(response.data.user);

        if (isRegister) {
          setIsRegister(false); // Switch to login view after registration
        } else {
          onClose();
        }
      } else {
        addToast(response.data.message || 'Authentication failed.', 'error');
      }
    } catch (err) {
      const msg = err.response?.data?.message || (isRegister ? 'Registration failed. Email may already exist.' : 'Account not found or invalid password. Please Sign Up first!');
      addToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bounded-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
          title="Close Modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="6" r="2.5" fill="#00C4EE" />
              <circle cx="14" cy="14" r="2.5" fill="#00C4EE" />
              <circle cx="26" cy="14" r="2.5" fill="#00C4EE" />
              <circle cx="20" cy="22" r="2.5" fill="#FFD100" />
            </svg>
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF' }}>ECAITM® Access</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', color: '#F8FAFC' }}>
            {isRegister ? 'Create Registered Account' : 'Sign In to Account'}
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '4px' }}>
            {isRegister ? 'Register your user account to access liquid cooling services.' : 'Enter your registered email and password to sign in.'}
          </p>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {isRegister && (
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Full Name / Username *</label>
              <div style={{ position: 'relative' }}>
                <User style={{ position: 'absolute', left: '12px', top: '12px', width: '18px', height: '18px', color: '#64748B' }} />
                <input
                  type="text"
                  required
                  placeholder="Alex Vance"
                  className="form-input"
                  style={{ paddingLeft: '40px' }}
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Facility Email Address *</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: '12px', top: '12px', width: '18px', height: '18px', color: '#64748B' }} />
              <input
                type="email"
                required
                placeholder="operator@datacenter.com"
                className="form-input"
                style={{ paddingLeft: '40px' }}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Company / Organization</label>
              <div style={{ position: 'relative' }}>
                <Building style={{ position: 'absolute', left: '12px', top: '12px', width: '18px', height: '18px', color: '#64748B' }} />
                <input
                  type="text"
                  placeholder="ColoTech Data Centers"
                  className="form-input"
                  style={{ paddingLeft: '40px' }}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Password *</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '12px', top: '12px', width: '18px', height: '18px', color: '#64748B' }} />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                className="form-input"
                style={{ paddingLeft: '40px' }}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', padding: '12px', marginTop: '8px' }}
          >
            {loading ? 'Authenticating...' : isRegister ? 'Register Account' : 'Sign In'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Toggle Login/Register */}
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.88rem', color: '#94A3B8' }}>
          {isRegister ? 'Already registered?' : "Don't have an account yet?"}{' '}
          <button
            onClick={() => setIsRegister(!isRegister)}
            style={{ background: 'none', color: '#00C4EE', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}
          >
            {isRegister ? 'Sign In' : 'Sign Up / Register'}
          </button>
        </div>

      </div>
    </div>
  );
};
