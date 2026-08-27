import React, { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import { CreditCard, Lock, CheckCircle2, Shield, DollarSign, AlertCircle, ArrowRight } from 'lucide-react';
import axios from 'axios';

export const CheckoutModal = ({ isOpen, onClose, selectedPlan, isYearly, onOpenAuth, onNavigatePaidServices }) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadyPaid, setAlreadyPaid] = useState(false);
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    cardholderName: '',
    email: '',
    cardNumber: '',
    expDate: '',
    cvc: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setSuccess(false);
      setAlreadyPaid(false);
      setErrors({});

      const storedUser = localStorage.getItem('ecaitm_user');
      const storedSub = localStorage.getItem('ecaitm_active_subscription');
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);
          setUser(parsed);
          setFormData(prev => ({
            ...prev,
            email: parsed.email || '',
            cardholderName: parsed.username || ''
          }));

          if (parsed.is_paid || storedSub) {
            setAlreadyPaid(true);
          }
        } catch (e) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    }
  }, [isOpen, selectedPlan]);

  if (!isOpen || !selectedPlan) return null;

  const getPrice = () => {
    if (selectedPlan.id === 'basic') return isYearly ? 80 : 100;
    if (selectedPlan.id === 'pro') return isYearly ? 120 : 150;
    if (selectedPlan.id === 'enterprise') return isYearly ? 160 : 200;
    return 100;
  };

  const amount = getPrice();

  const validate = () => {
    const errs = {};
    if (!formData.cardholderName || formData.cardholderName.trim().length < 3) {
      errs.cardholderName = 'Cardholder name must be at least 3 characters.';
    }
    if (!formData.email || !formData.email.includes('@')) {
      errs.email = 'Valid email address required.';
    }
    const cleanCard = formData.cardNumber.replace(/\s+/g, '');
    if (!/^\d{15,16}$/.test(cleanCard)) {
      errs.cardNumber = 'Card number must be 15 or 16 digits.';
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expDate)) {
      errs.expDate = 'Expiration must be MM/YY format.';
    }
    if (!/^\d{3,4}$/.test(formData.cvc)) {
      errs.cvc = 'CVC must be 3 or 4 digits.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      addToast('You must Sign Up / Sign In before purchasing a subscription plan.', 'warning');
      if (onOpenAuth) onOpenAuth();
      return;
    }

    if (!validate()) {
      addToast('Please correct validation errors on card details.', 'warning');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        plan_id: selectedPlan.id,
        plan_name: selectedPlan.name,
        amount,
        billing_cycle: isYearly ? 'yearly' : 'monthly',
        email: formData.email,
        cardholder: formData.cardholderName,
      };

      const res = await axios.post('/api/v1/checkout/subscribe/', payload);

      if (res.data && res.data.already_paid) {
        setAlreadyPaid(true);
        addToast(res.data.message, 'info');
        return;
      }

      if (res.data && res.data.success) {
        const updatedUser = {
          ...user,
          is_paid: true,
          active_plan: selectedPlan.name,
          paid_until: res.data.user?.paid_until || '30 Days Active'
        };
        localStorage.setItem('ecaitm_user', JSON.stringify(updatedUser));

        const subscription = {
          is_active: true,
          plan_tier: selectedPlan.name,
          amount,
          billing_cycle: isYearly ? 'yearly' : 'monthly',
          paid_date: new Date().toISOString(),
          email: formData.email,
        };
        localStorage.setItem('ecaitm_active_subscription', JSON.stringify(subscription));

        setSuccess(true);
        addToast(`Payment of $${amount} USD successful! Monthly subscription active.`, 'success');
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Payment processing error.';
      addToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCardFormat = (val) => {
    const v = val.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(' ') : val;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="bounded-modal" onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose} className="modal-close-btn" title="Close Modal">
          ✕
        </button>

        {/* CONDITION 1: USER IS NOT LOGGED IN */}
        {!user ? (
          <div style={{ textAlign: 'center', padding: '24px 10px' }}>
            <AlertCircle size={48} style={{ color: '#EF4444', margin: '0 auto 16px auto' }} />
            <h2 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Sign Up / Sign In Required
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '24px', lineHeight: '1.5' }}>
              You must be registered and signed in to an ECAITM account to purchase a plan and activate monthly Paid Services.
            </p>
            <button
              onClick={() => {
                onClose();
                if (onOpenAuth) onOpenAuth();
              }}
              className="btn-primary"
              style={{ padding: '12px 28px', fontSize: '0.95rem' }}
            >
              Sign Up / Sign In Now <ArrowRight size={16} />
            </button>
          </div>
        ) : alreadyPaid ? (
          /* CONDITION 2: ALREADY PAID FOR THIS MONTH */
          <div style={{ textAlign: 'center', padding: '24px 10px' }}>
            <CheckCircle2 size={56} style={{ color: '#10B981', margin: '0 auto 16px auto' }} />
            <h2 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Subscription Already Active!
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#94A3B8', marginBottom: '20px', lineHeight: '1.5' }}>
              Your account (<strong style={{ color: '#00C4EE' }}>{user.email}</strong>) has an active paid subscription for this month. You do not need to pay again.
            </p>
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#10B981',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '24px',
              fontWeight: '700',
              fontSize: '0.9rem'
            }}>
              ✓ Active Plan: {user.active_plan || 'Enterprise AI Package'}
            </div>
            <button
              onClick={() => {
                onClose();
                if (onNavigatePaidServices) onNavigatePaidServices();
              }}
              style={{
                backgroundColor: '#10B981',
                color: '#090C13',
                fontWeight: '800',
                padding: '12px 28px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              Go to Paid Services Portal ★
            </button>
          </div>
        ) : success ? (
          /* CONDITION 3: PAYMENT JUST SUCCEEDED */
          <div style={{ textAlign: 'center', padding: '24px 10px' }}>
            <CheckCircle2 size={56} style={{ color: '#10B981', margin: '0 auto 16px auto' }} />
            <h2 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Payment Successful!
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '20px' }}>
              Monthly subscription to <strong>{selectedPlan.name}</strong> activated for ${amount} USD.
            </p>
            <button
              onClick={() => {
                onClose();
                if (onNavigatePaidServices) onNavigatePaidServices();
              }}
              style={{
                backgroundColor: '#10B981',
                color: '#090C13',
                fontWeight: '800',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              Access Paid Services Portal Now →
            </button>
          </div>
        ) : (
          /* CONDITION 4: STANDARD CHECKOUT FORM */
          <>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge-cyan">SECURE MONTHLY CHECKOUT</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFD100' }}>
                  ${amount} USD <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 400 }}>/{isYearly ? 'month (billed annually)' : 'month'}</span>
                </span>
              </div>
              <h2 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginTop: '8px' }}>
                Subscribe to {selectedPlan.name}
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Logged in as <strong>{user.email}</strong>. Activates 30 days of Paid Services access.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>Cardholder Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="form-input"
                  value={formData.cardholderName}
                  onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                />
                {errors.cardholderName && <div className="form-error">{errors.cardholderName}</div>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>Account Email *</label>
                <input
                  type="email"
                  required
                  readOnly
                  className="form-input"
                  style={{ backgroundColor: '#0F172A', color: '#94A3B8', cursor: 'not-allowed' }}
                  value={formData.email}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>Card Number *</label>
                <div style={{ position: 'relative' }}>
                  <CreditCard style={{ position: 'absolute', left: '12px', top: '12px', width: '18px', height: '18px', color: '#64748B' }} />
                  <input
                    type="text"
                    required
                    placeholder="4532 •••• •••• 8892"
                    className="form-input"
                    style={{ paddingLeft: '40px' }}
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: handleCardFormat(e.target.value) })}
                    maxLength="19"
                  />
                </div>
                {errors.cardNumber && <div className="form-error">{errors.cardNumber}</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>Exp Date *</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="form-input"
                    value={formData.expDate}
                    onChange={(e) => setFormData({ ...formData, expDate: e.target.value })}
                    maxLength="5"
                  />
                  {errors.expDate && <div className="form-error">{errors.expDate}</div>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '4px' }}>CVC *</label>
                  <input
                    type="password"
                    required
                    placeholder="123"
                    className="form-input"
                    value={formData.cvc}
                    onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                    maxLength="4"
                  />
                  {errors.cvc && <div className="form-error">{errors.cvc}</div>}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', padding: '12px', marginTop: '10px' }}
              >
                {loading ? 'Processing Payment...' : `Pay $${amount} USD & Activate Subscription`}
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
