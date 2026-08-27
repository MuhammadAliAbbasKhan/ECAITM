import React from 'react';
import { Flame, Shield, Droplets, Zap, Activity, Thermometer, CheckCircle2 } from 'lucide-react';

export const ThermalPage = ({ onOpenDemo }) => {
  return (
    <div style={{ background: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container-xl">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge-cyan">THERMAL PHYSICS & SCIENCE</span>
          <h1 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: 900 }}>
            Two-Phase Thermal Optimization Engine
          </h1>
          <p style={{ color: '#94A3B8', maxWidth: '780px', margin: '16px auto 0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Understanding latent heat of vaporization — how ECAITM dissipates extreme heat density directly at the silicon junction without water, pumps, or thermal throttling.
          </p>
        </div>

        {/* Comparison Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          
          <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid #EF4444' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#EF4444', marginBottom: '12px' }}>Traditional Air Cooling</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: '#94A3B8', fontSize: '0.9rem' }}>
              <li>❌ Max density capped at 30kW per rack</li>
              <li>❌ Heavy fan power consumption (PUE 1.40+)</li>
              <li>❌ High acoustic noise & vibration risk</li>
              <li>❌ Severe thermal throttling during AI training peak</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid #F59E0B' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#F59E0B', marginBottom: '12px' }}>Single-Phase Liquid Water</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: '#94A3B8', fontSize: '0.9rem' }}>
              <li>⚠️ Risk of catastrophic water leak on GPUs</li>
              <li>⚠️ Requires continuous water supply & chemical treatment</li>
              <li>⚠️ High mechanical pump energy required</li>
              <li>⚠️ Sensible heat transfer limits peak cooling</li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid #00C4EE' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#00C4EE', marginBottom: '12px' }}>ECAITM Direct-Phase Vapor</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: '#F8FAFC', fontSize: '0.9rem' }}>
              <li>✅ 100kW+ per rack thermal dissipation capacity</li>
              <li>✅ Non-conductive dielectric fluid (zero short circuit risk)</li>
              <li>✅ Zero water consumption (100% closed dry loop)</li>
              <li>✅ Sub-1.05 PUE with passive phase transition</li>
            </ul>
          </div>

        </div>

        {/* Thermal Dynamics Infographic Card */}
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <span className="badge-cyan">CLOSED-LOOP DIELECTRIC VAPOR</span>
            <h2 style={{ fontSize: '2rem', marginTop: '12px', marginBottom: '16px' }}>
              Sub-Boiling Surface Evaporative Cycle
            </h2>
            <p style={{ color: '#94A3B8', lineHeight: 1.6, marginBottom: '20px' }}>
              As GPU temperature reaches ~45°C, the dielectric fluid inside the copper cold plate boils into vapor. The vapor rises naturally to the heat exchanger, transfers heat to the ambient air, condenses back into liquid, and returns via gravity.
            </p>
            <div style={{ display: 'flex', gap: '16px', color: '#00C4EE', fontWeight: 700 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Thermometer className="w-5 h-5" /> 45°C Boiling Pt</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Droplets className="w-5 h-5" /> 0% Dielectric Leak Loss</div>
            </div>
          </div>

          <div style={{ background: '#090D16', padding: '28px', borderRadius: '12px', border: '1px solid #1E293B', textAlign: 'center' }}>
            <Activity className="w-16 h-16 text-cyan-400" style={{ margin: '0 auto 16px auto' }} />
            <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '8px' }}>Thermal Junction Resistance</h4>
            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFD100', fontFamily: "'Outfit'" }}>0.015 °C/W</span>
            <p style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '8px' }}>Ultra-low thermal impedance between GPU silicon die & vapor chamber</p>
          </div>
        </div>

      </div>
    </div>
  );
};
