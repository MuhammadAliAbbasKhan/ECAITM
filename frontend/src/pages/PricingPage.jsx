import React, { useState, useEffect } from 'react';
import { Zap, Check, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const PricingPage = ({ onSelectPlan, onNavigatePaidServices }) => {
  const [isYearly, setIsYearly] = useState(true);
  const [user, setUser] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('ecaitm_user');
    const storedSub = localStorage.getItem('ecaitm_active_subscription');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUser(parsed);
        setIsPaid(parsed.is_paid || !!storedSub);
      } catch (e) {
        setUser(null);
        setIsPaid(false);
      }
    }
  }, []);

  const plans = [
    {
      id: 'basic',
      name: 'Basic AIDC Agent',
      monthlyPrice: 100,
      yearlyPrice: 80,
      description: 'Modular AIDC facilities up to 5MW with baseline thermal optimization & 24/7 telemetry monitoring.',
      features: [
        'Facilities up to 5MW capacity',
        'Baseline direct-to-chip telemetry',
        'Sub-1.08 PUE target monitoring',
        'Standard email support',
        '2D Simulator canvas access',
      ],
      popular: false,
    },
    {
      id: 'pro',
      name: 'Professional AIDC & Liquid Cooling',
      monthlyPrice: 150,
      yearlyPrice: 120,
      description: 'HPC clusters up to 25MW with dynamic PUE + liquid cooling CDU optimization engine & EV VPP integration.',
      features: [
        'Facilities up to 25MW capacity',
        'NeuCool® 2-phase liquid CDU control',
        'Dynamic PUE Sub-1.05 optimizer engine',
        'EV VPP peak shaving automated dispatch',
        '24/7 Priority SLA response',
        'Multi-rack heatmap analytics',
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise Global Fleet & VPP Grid',
      monthlyPrice: 200,
      yearlyPrice: 160,
      description: 'Hyperscale fleets with unlimited MW capacity, multi-site cluster orchestration & dedicated AI Thermal Engineer.',
      features: [
        'Unlimited MW capacity & global fleet',
        'Multi-site cluster orchestration',
        'Custom RL policy model training',
        'Sub-second grid frequency regulation',
        'Dedicated 24/7 SLA AI Systems Architect',
        'Custom ERP & MongoDB cloud sync',
      ],
      popular: false,
    },
  ];

  return (
    <div style={{ background: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container-xl">
        
        {/* Paid Active Banner */}
        {user && isPaid && (
          <div
            style={{
              background: 'linear-gradient(90deg, rgba(16,185,129,0.2) 0%, rgba(0,196,238,0.2) 100%)',
              border: '1px solid rgba(16,185,129,0.5)',
              borderRadius: '12px',
              padding: '20px 28px',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              <div>
                <div style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 700 }}>
                  Active Monthly Subscription Active ({user.active_plan || 'Enterprise AI Package'})
                </div>
                <div style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
                  You have already paid for this month. You do not need to pay again to access Paid Services.
                </div>
              </div>
            </div>
            {onNavigatePaidServices && (
              <button
                onClick={onNavigatePaidServices}
                style={{
                  backgroundColor: '#10B981',
                  color: '#090C13',
                  fontWeight: '800',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Go to Paid Services Portal ★
              </button>
            )}
          </div>
        )}

        {/* Pricing Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-cyan">TRANSPARENT PRICING</span>
          <h1 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: 900 }}>
            AI Agent & Liquid Cooling Plans
          </h1>
          <p style={{ color: '#94A3B8', maxWidth: '650px', margin: '12px auto 0 auto', fontSize: '1.05rem' }}>
            Select an active deployment license for your data center facility.
          </p>

          {/* Billing Cycle Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', background: '#0F172A', border: '1px solid #1E293B', padding: '4px', borderRadius: '30px', marginTop: '28px' }}>
            <button
              onClick={() => setIsYearly(false)}
              style={{
                background: !isYearly ? '#00C4EE' : 'transparent',
                color: !isYearly ? '#000000' : '#94A3B8',
                fontWeight: !isYearly ? 700 : 500,
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                background: isYearly ? '#00C4EE' : 'transparent',
                color: isYearly ? '#000000' : '#94A3B8',
                fontWeight: isYearly ? 700 : 500,
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Yearly Billing <span style={{ background: '#FFD100', color: '#000', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 800 }}>SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isCurrentPlan = user && isPaid;

            return (
              <div
                key={plan.id}
                style={{
                  background: plan.popular ? 'linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(13,27,48,0.95) 100%)' : '#0F172A',
                  border: plan.popular ? '2px solid #00C4EE' : '1px solid #1E293B',
                  borderRadius: '16px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: plan.popular ? '0 10px 40px rgba(0, 196, 238, 0.2)' : 'none',
                }}
              >
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg, #00C4EE 0%, #0284C7 100%)', color: '#FFFFFF', padding: '4px 16px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>{plan.name}</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.88rem', minHeight: '44px', lineHeight: 1.5 }}>{plan.description}</p>

                  <div style={{ margin: '24px 0', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF', fontFamily: "'Outfit'" }}>${price}</span>
                    <span style={{ color: '#94A3B8', fontSize: '0.9rem' }}>USD / month</span>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#CBD5E1' }}>
                        <Check className="w-4 h-4 text-cyan-400" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {isCurrentPlan ? (
                  <button
                    onClick={() => onNavigatePaidServices && onNavigatePaidServices()}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#10B981',
                      color: '#090C13',
                      fontWeight: '800',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    ✓ Paid for This Month (Open Portal)
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectPlan(plan, isYearly)}
                    className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    Subscribe & Checkout <ArrowRight className="w-4 h-4" />
                  </button>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
