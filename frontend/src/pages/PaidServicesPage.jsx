import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Zap, Cpu, Server, Clock, Send, AlertTriangle, ArrowRight, RefreshCw, FileText } from 'lucide-react';
import axios from 'axios';

export default function PaidServicesPage({ onOpenAuth, onNavigatePricing }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [pastRequests, setPastRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(null);

  const [formState, setFormState] = useState({
    service_type: 'Direct-to-Chip 2-Phase Installation & Integration',
    facility_location: 'Austin AI Supercomputing Facility, Node #4',
    rack_count: '24 High-Density Racks (100kW/rack)',
    urgency: 'Immediate (24-48 Hours)',
    details: 'Custom 2-phase liquid cooling deployment required for NVIDIA GB200 NVL72 cluster installation.'
  });

  useEffect(() => {
    const fetchUserAndRequests = async () => {
      const storedUserStr = localStorage.getItem('ecaitm_user');
      const storedSubStr = localStorage.getItem('ecaitm_active_subscription');
      
      if (!storedUserStr) {
        setCurrentUser(null);
        setIsPaid(false);
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUserStr);
        setCurrentUser(parsedUser);

        const email = parsedUser.email;
        if (email) {
          // Fetch live user status from Django REST API backend
          const userRes = await axios.get(`/api/v1/auth/user/?email=${encodeURIComponent(email)}`).catch(() => null);
          let paidStatus = parsedUser.is_paid || !!storedSubStr;
          
          if (userRes && userRes.data && userRes.data.success) {
            const updatedUser = userRes.data.user;
            setCurrentUser(updatedUser);
            paidStatus = updatedUser.is_paid;
            localStorage.setItem('ecaitm_user', JSON.stringify(updatedUser));
          }

          setIsPaid(paidStatus);

          // If paid user, fetch past service requests
          if (paidStatus) {
            setLoadingRequests(true);
            const reqRes = await axios.get(`/api/v1/services/list/?email=${encodeURIComponent(email)}`).catch(() => null);
            if (reqRes && reqRes.data && reqRes.data.success) {
              setPastRequests(reqRes.data.requests || []);
            }
            setLoadingRequests(false);
          }
        }
      } catch (err) {
        console.error("PaidServicesPage init error:", err);
      }
    };

    fetchUserAndRequests();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      if (onOpenAuth) onOpenAuth();
      return;
    }

    if (!isPaid) {
      alert("Active paid subscription required to submit service requests.");
      if (onNavigatePricing) onNavigatePricing();
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        user_email: currentUser.email,
        user_name: currentUser.username || currentUser.email.split('@')[0],
        company: currentUser.company || 'Enterprise Customer',
        ...formState
      };

      const res = await axios.post('/api/v1/services/request/', payload);
      if (res.data && res.data.success) {
        setRequestSubmitted({
          id: res.data.request_id,
          status: res.data.status,
          message: res.data.message
        });

        // Refresh past requests
        const reqRes = await axios.get(`/api/v1/services/list/?email=${encodeURIComponent(currentUser.email)}`).catch(() => null);
        if (reqRes && reqRes.data && reqRes.data.success) {
          setPastRequests(reqRes.data.requests || []);
        }
      } else {
        alert(res.data.message || 'Error submitting request.');
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit service request.';
      alert(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="paid-services-page" style={{ backgroundColor: '#0B0E14', color: '#F8FAFC', minHeight: '100vh', fontFamily: 'Lato, sans-serif', paddingBottom: '100px' }}>
      
      {/* HEADER SECTION */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '60px',
        backgroundImage: 'linear-gradient(180deg, #090C13 0%, #0F172A 100%)',
        borderBottom: '1px solid rgba(30, 41, 59, 0.8)'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '50px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            color: '#10B981',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            <ShieldCheck size={16} /> VIP PAID SUBSCRIBER PORTAL
          </span>

          <h1 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'calc(32px + 1.5vw)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Dedicated Client Paid Services & Requests
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#94A3B8',
            maxWidth: '750px',
            margin: '0 auto 30px auto',
            lineHeight: '1.6'
          }}>
            Exclusive service portal for active subscribers. Submit custom technician dispatches, site liquid cooling assessments, and AI thermal feature configurations.
          </p>

          {/* SUBSCRIPTION STATUS CARD */}
          {currentUser && isPaid && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              backgroundColor: '#1E293B',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '12px',
              padding: '16px 28px',
              textAlign: 'left',
              boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <CheckCircle2 size={32} style={{ color: '#10B981', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Active Subscription Account</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF' }}>
                  {currentUser.active_plan || 'Enterprise AI Package'} ({currentUser.email})
                </div>
              </div>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                color: '#10B981',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '700'
              }}>
                ✓ Paid for This Month ({currentUser.paid_until ? `Valid until ${currentUser.paid_until}` : '30 Days Active'})
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section style={{ padding: '60px 20px 0 20px' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          {/* CASE 1: NOT LOGGED IN */}
          {!currentUser && (
            <div style={{
              backgroundColor: '#0F172A',
              border: '1px solid #1E293B',
              borderRadius: '16px',
              padding: '60px 30px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔒</div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '12px' }}>
                Account Authentication Required
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '28px' }}>
                You must be signed in with a registered user account to access the Paid Services Portal.
              </p>
              <button
                onClick={onOpenAuth}
                style={{
                  backgroundColor: '#00C4EE',
                  color: '#090C13',
                  fontWeight: '800',
                  fontSize: '1rem',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Sign Up / Sign In Now
              </button>
            </div>
          )}

          {/* CASE 2: LOGGED IN BUT NOT PAID */}
          {currentUser && !isPaid && (
            <div style={{
              backgroundColor: '#0F172A',
              border: '1px solid #1E293B',
              borderRadius: '16px',
              padding: '60px 30px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              maxWidth: '720px',
              margin: '0 auto'
            }}>
              <AlertTriangle size={48} style={{ color: '#F59E0B', margin: '0 auto 16px auto' }} />
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '12px' }}>
                Paid Subscription Required
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Logged in as <strong style={{ color: '#00C4EE' }}>{currentUser.username}</strong> ({currentUser.email}).
                Your account is currently on the <strong>Free Tier</strong>.
              </p>
              <div style={{
                backgroundColor: '#1E293B',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '28px',
                border: '1px solid #334155',
                color: '#CBD5E1',
                fontSize: '0.95rem'
              }}>
                Subscribe to an ECAITM Plan to unlock unlimited engineering dispatches, site assessments, and custom AI thermal integrations for 30 days.
              </div>
              <button
                onClick={onNavigatePricing}
                style={{
                  backgroundColor: '#FFD100',
                  color: '#090C13',
                  fontWeight: '800',
                  fontSize: '1.05rem',
                  padding: '14px 36px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                View Plans & Upgrade Account
              </button>
            </div>
          )}

          {/* CASE 3: LOGGED IN AND PAID SUBSCRIBER */}
          {currentUser && isPaid && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
              
              {/* LEFT COLUMN: SERVICE REQUEST FORM */}
              <div style={{
                backgroundColor: '#0F172A',
                border: '1px solid #1E293B',
                borderRadius: '16px',
                padding: '36px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <Zap style={{ color: '#00C4EE' }} />
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', color: '#FFFFFF', margin: 0 }}>
                    Submit Service Request
                  </h3>
                </div>

                {requestSubmitted ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '30px 20px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    borderRadius: '12px'
                  }}>
                    <CheckCircle2 size={48} style={{ color: '#10B981', margin: '0 auto 12px auto' }} />
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '8px', fontFamily: 'Montserrat' }}>
                      Request #{requestSubmitted.id} Received!
                    </h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '16px' }}>
                      {requestSubmitted.message}
                    </p>
                    <button
                      onClick={() => setRequestSubmitted(null)}
                      style={{
                        backgroundColor: '#00C4EE',
                        color: '#090C13',
                        fontWeight: '700',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Create Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>
                        Service & Functionality Category *
                      </label>
                      <select
                        value={formState.service_type}
                        onChange={(e) => setFormState({ ...formState, service_type: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          backgroundColor: '#1E293B',
                          border: '1px solid #334155',
                          color: '#FFFFFF',
                          outline: 'none'
                        }}
                      >
                        <option value="Direct-to-Chip 2-Phase Installation & Integration">Direct-to-Chip 2-Phase Installation & Integration</option>
                        <option value="NeuCool™ IVU-500 In-Rack CDU Setup">NeuCool™ IVU-500 In-Rack CDU Setup</option>
                        <option value="EV-VPP Smart Grid Energy Arbitrage Setup">EV-VPP Smart Grid Energy Arbitrage Setup</option>
                        <option value="Custom AI Thermal Telemetry & Feature Integration">Custom AI Thermal Telemetry & Feature Integration</option>
                        <option value="Dielectric Fluid & Pressure System Audit">Dielectric Fluid & Pressure System Audit</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>
                        Facility Address / Data Center Location *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formState.facility_location}
                        onChange={(e) => setFormState({ ...formState, facility_location: e.target.value })}
                        placeholder="e.g. Austin Data Hub Node 4, TX"
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          backgroundColor: '#1E293B',
                          border: '1px solid #334155',
                          color: '#FFFFFF',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>
                          Rack Count & Density *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formState.rack_count}
                          onChange={(e) => setFormState({ ...formState, rack_count: e.target.value })}
                          placeholder="24 Racks (100kW/rack)"
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            backgroundColor: '#1E293B',
                            border: '1px solid #334155',
                            color: '#FFFFFF',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>
                          Dispatch Urgency *
                        </label>
                        <select
                          value={formState.urgency}
                          onChange={(e) => setFormState({ ...formState, urgency: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            backgroundColor: '#1E293B',
                            border: '1px solid #334155',
                            color: '#FFFFFF',
                            outline: 'none'
                          }}
                        >
                          <option value="Immediate (24-48 Hours)">Immediate (24-48 Hours Emergency)</option>
                          <option value="Standard (7 Days)">Standard (7 Days)</option>
                          <option value="Scheduled Project (30 Days)">Scheduled Project (30 Days)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px' }}>
                        Detailed Engineering Requirements / Custom Website AI Feature Specs
                      </label>
                      <textarea
                        rows="4"
                        value={formState.details}
                        onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                        placeholder="Provide GPU cluster details (NVIDIA H100/H200/GB200, AMD MI300X), primary CDU pipe diameters, power feed capacities, or custom website functionality requests..."
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          backgroundColor: '#1E293B',
                          border: '1px solid #334155',
                          color: '#FFFFFF',
                          outline: 'none',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        backgroundColor: '#00C4EE',
                        color: '#090C13',
                        fontWeight: '800',
                        fontSize: '1rem',
                        padding: '14px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      {submitting ? 'Submitting to Django DB...' : 'Submit Priority Service Request'}
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>

              {/* RIGHT COLUMN: SUBMITTED REQUESTS DASHBOARD */}
              <div style={{
                backgroundColor: '#0F172A',
                border: '1px solid #1E293B',
                borderRadius: '16px',
                padding: '36px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FileText style={{ color: '#10B981' }} />
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', color: '#FFFFFF', margin: 0 }}>
                      My Active Service Dispatches
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    {pastRequests.length} Total
                  </span>
                </div>

                {loadingRequests ? (
                  <div style={{ textAlign: 'center', padding: '40px 0', color: '#94A3B8' }}>
                    Loading service dispatches from Django DB...
                  </div>
                ) : pastRequests.length === 0 ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '50px 20px',
                    backgroundColor: '#1E293B',
                    borderRadius: '12px',
                    color: '#94A3B8',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Server size={40} style={{ color: '#64748B', marginBottom: '12px' }} />
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '6px' }}>No Active Requests Found</h4>
                    <p style={{ fontSize: '0.9rem', maxWidth: '300px' }}>
                      Submit your first service request on the left form to dispatch our engineering team.
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, overflowY: 'auto' }}>
                    {pastRequests.map(req => (
                      <div 
                        key={req.id}
                        style={{
                          backgroundColor: '#1E293B',
                          borderRadius: '10px',
                          border: '1px solid #334155',
                          padding: '18px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: '700', color: '#00C4EE', fontSize: '0.95rem' }}>
                            Request #{req.id}
                          </span>
                          <span style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.2)',
                            color: '#10B981',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            padding: '3px 10px',
                            borderRadius: '12px',
                            border: '1px solid rgba(16, 185, 129, 0.4)'
                          }}>
                            {req.status}
                          </span>
                        </div>

                        <div style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF' }}>
                          {req.service_type}
                        </div>

                        <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                          📍 {req.facility_location} | ⚡ {req.rack_count}
                        </div>

                        <div style={{ fontSize: '0.8rem', color: '#64748B', display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                          <span>Urgency: {req.urgency}</span>
                          <span>{new Date(req.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export { PaidServicesPage };
