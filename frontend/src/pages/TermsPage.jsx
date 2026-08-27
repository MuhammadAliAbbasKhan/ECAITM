import React from 'react';
import { FileText } from 'lucide-react';

export const TermsPage = () => {
  return (
    <div style={{ background: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container-xl" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <FileText className="w-12 h-12 text-yellow-400" style={{ margin: '0 auto 12px auto' }} />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>ECAITM® Terms of Service</h1>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Effective Date: January 1, 2026</p>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.95rem', lineHeight: 1.7, color: '#CBD5E1' }}>
          <p>
            Welcome to ECAITM®. By accessing our 2D Telemetry Simulator, NeuCool® direct-to-chip liquid cooling management software, or purchasing subscription plans, you agree to these Terms of Service.
          </p>

          <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>1. Free Simulator License</h3>
          <p>
            The ECAITM 2D Telemetry Simulator is provided free of charge for public evaluation and educational purposes. Active physical facility deployments require a paid subscription plan.
          </p>

          <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>2. SLA & System Operation</h3>
          <p>
            Paid subscribers receive SLA-backed thermal optimization agent control. ECAITM guarantees non-conductive dielectric fluid compatibility with certified server OEM cold plates.
          </p>

          <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>3. Governed Jurisdiction</h3>
          <p>
            These terms are governed by the laws of the State of Texas, USA.
          </p>
        </div>
      </div>
    </div>
  );
};
