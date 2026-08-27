import React from 'react';
import { Zap, BatteryCharging, Shield, Activity, TrendingUp, RefreshCw, ArrowRight } from 'lucide-react';

export const EvVppPage = ({ onOpenDemo }) => {
  return (
    <div style={{ background: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container-xl">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge-cyan">VIRTUAL POWER PLANT INTEGRATION</span>
          <h1 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: 900 }}>
            ECAITM® EV VPP Energy Optimization
          </h1>
          <p style={{ color: '#94A3B8', maxWidth: '780px', margin: '16px auto 0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Bridging AI compute workload spikes with distributed Electric Vehicle (EV) battery storage and utility microgrids for dynamic peak shaving.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          <div className="glass-card" style={{ padding: '36px' }}>
            <BatteryCharging className="w-12 h-12 text-yellow-400" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Bidirectional EV Discharge (V2G)</h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>
              Aggregates onsite EV fleet chargers & utility BESS storage to inject up to 5,000 kW of stored power during peak electricity tariff hours.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <TrendingUp className="w-12 h-12 text-emerald-400" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Automated Energy Arbitrage</h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>
              AI agents continuously monitor real-time spot electricity prices, automatically switching data center thermal load between grid and battery.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <Activity className="w-12 h-12 text-cyan-400" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Grid Frequency Regulation</h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>
              Provides sub-second frequency response (60Hz grid stabilization) generating additional revenue streams from transmission system operators.
            </p>
          </div>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '40px', textAlignment: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFD100', fontFamily: "'Outfit'" }}>$180,000 / MW</span>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginTop: '8px' }}>Average Annual VPP Grid Incentive Revenue</h3>
            <p style={{ color: '#94A3B8', maxWidth: '600px', margin: '12px auto 24px auto' }}>
              Turn your AI facility's backup power infrastructure into an active revenue-generating asset.
            </p>
            <button onClick={onOpenDemo} className="btn-primary">Connect VPP to Your Data Center <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
