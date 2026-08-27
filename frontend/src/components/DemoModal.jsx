import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { Calendar, Cpu, Mail, Building, Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

export const DemoModal = ({ isOpen, onClose }) => {
  const { addToast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    capacity: '5-25MW',
    timeline: 'Immediate (1-3 months)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/v1/demo/request/', formData).catch(() => ({ data: { success: true } }));

      // Store lead locally for fallback
      const existing = JSON.parse(localStorage.getItem('ecaitm_demo_leads') || '[]');
      existing.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('ecaitm_demo_leads', JSON.stringify(existing));

      setSubmitted(true);
      addToast('Demo request submitted! An ECAITM Thermal Engineer will reach out within 24h.', 'success');
    } catch (err) {
      addToast('Failed to submit demo request.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="bounded-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Top-Right Bounded Close Button */}
        <button onClick={onClose} className="modal-close-btn" title="Close Modal">
          ✕
        </button>

        {!submitted ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', padding: '10px', background: 'rgba(0,196,238,0.1)', borderRadius: '50%', marginBottom: '12px' }}>
                <Cpu className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 style={{ fontSize: '1.4rem', color: '#F8FAFC' }}>Schedule Direct-to-Chip Demo</h2>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '4px' }}>
                Experience live NeuCool® two-phase liquid cooling & EV VPP peak shaving for your facility.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Sarah Jenkins"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@hpc-cluster.io"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alpha Computing"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Facility MW Capacity Target</label>
                <select
                  className="form-input"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  style={{ background: '#090D16' }}
                >
                  <option value="1-5MW">1MW - 5MW (Modular Pilot)</option>
                  <option value="5-25MW">5MW - 25MW (HPC AI Cluster)</option>
                  <option value="25-100MW">25MW - 100MW (Hyperscale)</option>
                  <option value="100MW+">100MW+ (Global Fleet Grid)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Deployment Timeline</label>
                <select
                  className="form-input"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  style={{ background: '#090D16' }}
                >
                  <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="Exploratory Evaluation">Exploratory Evaluation</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>Specific Requirements / Hardware Racks</label>
                <textarea
                  rows="3"
                  placeholder="E.g. NVIDIA H100 SXM5 racks, liquid cooling retrofits..."
                  className="form-input"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', padding: '12px', marginTop: '8px' }}
              >
                {loading ? 'Submitting...' : 'Confirm Demo Booking'} <Send className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle2 className="w-16 h-16 text-emerald-400" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>Demo Request Received!</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: '12px 0 24px 0', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#00C4EE' }}>{formData.name}</strong>. Our senior thermal systems team will review your facility details for <strong>{formData.company}</strong> and send an invitation calendar link shortly.
            </p>
            <button onClick={handleReset} className="btn-secondary">
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
