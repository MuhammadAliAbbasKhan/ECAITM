import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage = () => {
  return (
    <div style={{ background: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container-xl" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <ShieldCheck className="w-12 h-12 text-cyan-400" style={{ margin: '0 auto 12px auto' }} />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>ECAITM® Privacy Policy</h1>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Effective Date: January 1, 2026</p>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.95rem', lineHeight: 1.7, color: '#CBD5E1' }}>
          <p>
            ECAITM LLC ("ECAITM", "we", "us", or "our") respects your privacy and is committed to protecting the telemetry and personal data generated through our direct-to-chip two-phase liquid cooling systems, AI agents, and Virtual Power Plant (EV VPP) energy management portal.
          </p>

          <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>1. Information We Collect</h3>
          <p>
            We collect facility operational telemetry (GPU rack heatmaps, dielectric fluid flow rates, PUE metrics, utility power grid discharge values) and administrative credentials (work email, name, company name) provided during user authentication and demo booking.
          </p>

          <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>2. Data Encryption & Dual Storage</h3>
          <p>
            All telemetry metrics and account records are encrypted using AES-256 at rest and TLS 1.3 in transit. Primary database records are stored in secure local Django SQLite repositories and synchronized in real-time with enterprise MongoDB Atlas Cloud clusters (`aidcevvpp_db`).
          </p>

          <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>3. Contact & Rights</h3>
          <p>
            Users may request data deletion or export by contacting <strong style={{ color: '#00C4EE' }}>privacy@ecaitm.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
