import React, { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import { Shield, Key, Database, Server, Users, DollarSign, Activity, CheckCircle2, Lock, RefreshCw, FileText } from 'lucide-react';
import axios from 'axios';

export const AdminPage = () => {
  const { addToast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loading, setLoading] = useState(false);

  // Admin Data State
  const [analytics, setAnalytics] = useState({
    activeFacilities: 48,
    totalManagedMw: 620,
    monthlyRevenue: 142500,
    mongoSyncStatus: 'CONNECTED (aidcevvpp_db / ecaitm_cluster)',
    demoLeads: [],
    subscriptions: [],
    contacts: [],
    logs: [],
  });

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const secret = 'aliabbas1234578!';

    if (passcode === secret) {
      setIsAuthenticated(true);
      addToast('Executive Admin authorization granted.', 'success');
      loadAnalyticsData(secret);
    } else {
      // Try backend endpoint verification
      try {
        const res = await axios.get('/api/v1/admin/analytics/', {
          headers: { 'X-Admin-Passcode': passcode },
        });
        if (res.data.success) {
          setIsAuthenticated(true);
          setAnalytics(res.data);
          addToast('Authorized via backend API.', 'success');
        } else {
          addToast('Invalid admin passcode!', 'error');
        }
      } catch (err) {
        addToast('Invalid admin passcode!', 'error');
      }
    }
    setLoading(false);
  };

  const loadAnalyticsData = (secretPasscode) => {
    const demoLeads = JSON.parse(localStorage.getItem('ecaitm_demo_leads') || '[]');
    const contacts = JSON.parse(localStorage.getItem('ecaitm_contacts') || '[]');
    const activeSub = JSON.parse(localStorage.getItem('ecaitm_active_subscription') || 'null');

    const defaultLogs = [
      { timestamp: new Date().toLocaleTimeString(), level: 'INFO', message: 'NeuCool CDU #42 dynamic fluid pressure nominal (4.2 bar)' },
      { timestamp: new Date(Date.now() - 300000).toLocaleTimeString(), level: 'SUCCESS', message: 'EV VPP Peak Shaving dispatched 2,400 kW to Grid Node #7' },
      { timestamp: new Date(Date.now() - 900000).toLocaleTimeString(), level: 'INFO', message: 'Dual DB Sync: 14 records committed to MongoDB Cloud Atlas' },
      { timestamp: new Date(Date.now() - 1800000).toLocaleTimeString(), level: 'WARN', message: 'Rack B12 thermal junction spiked to 68°C - CDU flow increased +150 L/min' },
    ];

    setAnalytics((prev) => ({
      ...prev,
      demoLeads: demoLeads.length ? demoLeads : [
        { name: 'Marcus Sterling', company: 'Titan HPC Systems', email: 'marcus@titanhpc.com', capacity: '25-100MW', date: '2026-08-27' },
        { name: 'Dr. Anna Becker', company: 'EuroData Colocation', email: 'a.becker@eurodata.de', capacity: '10-25MW', date: '2026-08-26' },
      ],
      contacts: contacts.length ? contacts : [
        { name: 'Robert Vance', company: 'Vance Computing', email: 'rvance@vancecomp.io', capacity: '1-5MW', date: '2026-08-27' },
      ],
      subscriptions: activeSub ? [activeSub] : [
        { plan_tier: 'Professional AIDC & Liquid Cooling', amount: 150, billing_cycle: 'yearly', email: 'operator@datacenter.com', paid_date: '2026-08-25' },
      ],
      logs: defaultLogs,
    }));
  };

  return (
    <div style={{ background: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container-xl">
        
        {/* Passcode Lock Overlay if not authenticated */}
        {!isAuthenticated ? (
          <div style={{ maxWidth: '440px', margin: '40px auto', background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '36px', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,196,238,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', border: '1px solid rgba(0,196,238,0.3)' }}>
              <Lock className="w-7 h-7 text-cyan-400" />
            </div>

            <h2 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '8px' }}>Executive Admin Authorization</h2>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '24px' }}>
              Enter executive passcode (`X-Admin-Passcode`) to unlock system controls and telemetry logs.
            </p>

            <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ position: 'relative' }}>
                <Key style={{ position: 'absolute', left: '12px', top: '12px', width: '18px', height: '18px', color: '#64748B' }} />
                <input
                  type="password"
                  required
                  placeholder="Enter passcode..."
                  className="form-input"
                  style={{ paddingLeft: '40px', textAlign: 'center', letterSpacing: '0.2em' }}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                />
              </div>

              <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', padding: '12px' }}>
                {loading ? 'Authenticating...' : 'Authenticate Portal'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            {/* Admin Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="badge-cyan">SECURE CONTROL PORTAL</span>
                <h1 style={{ fontSize: '2.4rem', marginTop: '8px', fontWeight: 900 }}>Executive Analytics & Telemetry</h1>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981', padding: '6px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Database className="w-4 h-4" /> {analytics.mongoSyncStatus}
                </span>
                <button onClick={() => setIsAuthenticated(false)} className="btn-secondary" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
                  Lock Portal
                </button>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
              <div className="glass-card" style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Active Data Centers</span>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#00C4EE', display: 'block', marginTop: '4px' }}>{analytics.activeFacilities}</span>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Managed MW Capacity</span>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFD100', display: 'block', marginTop: '4px' }}>{analytics.totalManagedMw} MW</span>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Monthly ARR Revenue</span>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#10B981', display: 'block', marginTop: '4px' }}>${analytics.monthlyRevenue.toLocaleString()}</span>
              </div>

              <div className="glass-card" style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Pending Demo Leads</span>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#8B5CF6', display: 'block', marginTop: '4px' }}>{analytics.demoLeads.length}</span>
              </div>
            </div>

            {/* Tables Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '28px' }}>
              
              {/* Demo Leads Table */}
              <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Users className="w-5 h-5 text-cyan-400" /> Recent Demo Requests
                </h3>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', fontSize: '0.85rem', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ color: '#64748B', borderBottom: '1px solid #334155' }}>
                        <th style={{ padding: '8px' }}>Name / Company</th>
                        <th style={{ padding: '8px' }}>Email</th>
                        <th style={{ padding: '8px' }}>MW Target</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analytics.demoLeads.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #1E293B' }}>
                          <td style={{ padding: '10px 8px', color: '#FFFFFF', fontWeight: 600 }}>{item.name}<br /><span style={{ color: '#64748B', fontWeight: 400 }}>{item.company}</span></td>
                          <td style={{ padding: '10px 8px', color: '#00C4EE' }}>{item.email}</td>
                          <td style={{ padding: '10px 8px', color: '#FFD100', fontWeight: 700 }}>{item.capacity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Live Telemetry Audit Log */}
              <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity className="w-5 h-5 text-emerald-400" /> Live System Telemetry Audit Log
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
                  {analytics.logs.map((log, idx) => (
                    <div key={idx} style={{ background: '#090D16', padding: '10px 12px', borderRadius: '6px', border: '1px solid #1E293B' }}>
                      <span style={{ color: '#64748B', marginRight: '8px' }}>[{log.timestamp}]</span>
                      <span style={{ color: log.level === 'SUCCESS' ? '#10B981' : log.level === 'WARN' ? '#F59E0B' : '#00C4EE', fontWeight: 700, marginRight: '8px' }}>{log.level}:</span>
                      <span style={{ color: '#CBD5E1' }}>{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
