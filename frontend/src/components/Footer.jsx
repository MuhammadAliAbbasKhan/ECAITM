import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, X, Send } from 'lucide-react';

export const Footer = ({ setCurrentPage }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can ECAITM help optimize your data center liquid cooling or EV VPP energy storage today?', sender: 'bot' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const userMsg = inputMessage;
    setMessages((prev) => [...prev, { text: userMsg, sender: 'user' }]);
    setInputMessage('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for reaching out! An ECAITM Thermal & Grid Specialist will assist you shortly. You can also click 'Request Demo' for live facility evaluation.",
          sender: 'bot',
        },
      ]);
    }, 1000);
  };

  return (
    <footer
      style={{
        background: '#000000',
        color: '#94A3B8',
        borderTop: '1px solid #1E293B',
        padding: '40px 0 24px 0',
        position: 'relative',
        fontSize: '0.9rem',
      }}
    >
      <div className="container-xl">
        {/* Top Grid Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="6" r="2.5" fill="#00C4EE" />
                <circle cx="14" cy="14" r="2.5" fill="#00C4EE" />
                <circle cx="26" cy="14" r="2.5" fill="#00C4EE" />
                <circle cx="20" cy="22" r="2.5" fill="#FFD100" />
                <circle cx="28" cy="30" r="2.5" fill="#00C4EE" />
              </svg>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>ECAITM®</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>
              Direct-to-chip two-phase liquid cooling & AI Data Center Electric Vehicle Virtual Power Plant (EV VPP) optimization.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px' }}>Solutions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><button onClick={() => navigate('solutions')} style={{ background: 'none', color: '#94A3B8' }}>Direct-to-Chip 2-Phase</button></li>
              <li><button onClick={() => navigate('thermal')} style={{ background: 'none', color: '#94A3B8' }}>NeuCool Micro-Channels</button></li>
              <li><button onClick={() => navigate('evvpp')} style={{ background: 'none', color: '#94A3B8' }}>EV VPP Peak Shaving</button></li>
              <li><button onClick={() => navigate('pricing')} style={{ background: 'none', color: '#94A3B8' }}>2D Canvas Simulator</button></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><button onClick={() => navigate('ourmission')} style={{ background: 'none', color: '#94A3B8' }}>Our Mission</button></li>
              <li><button onClick={() => navigate('partners')} style={{ background: 'none', color: '#94A3B8' }}>Partners Ecosystem</button></li>
              <li><button onClick={() => navigate('services')} style={{ background: 'none', color: '#94A3B8' }}>Services & Deployment</button></li>
              <li><button onClick={() => navigate('blog')} style={{ background: 'none', color: '#94A3B8' }}>News & Research</button></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px' }}>Legal & Admin</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><button onClick={() => navigate('privacy')} style={{ background: 'none', color: '#94A3B8' }}>Privacy Policy</button></li>
              <li><button onClick={() => navigate('terms')} style={{ background: 'none', color: '#94A3B8' }}>Terms of Service</button></li>
              <li><button onClick={() => navigate('admin')} style={{ background: 'none', color: '#FFD100' }}>Admin Portal</button></li>
              <li><button onClick={() => navigate('contact')} style={{ background: 'none', color: '#00C4EE' }}>Contact Support</button></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          
          {/* Exact Copyright Bar matching user Screenshot 2 */}
          <div
            style={{
              color: '#94A3B8',
              fontSize: '0.88rem',
              textAlign: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>© 2026 ECAITM LLC</span>
            <span>•</span>
            <span>All Rights Reserved</span>
            <span>•</span>
            <button onClick={() => navigate('privacy')} style={{ background: 'none', color: '#94A3B8', textDecoration: 'underline' }}>Privacy Policy</button>
            <span>•</span>
            <button onClick={() => navigate('privacy')} style={{ background: 'none', color: '#94A3B8', textDecoration: 'underline' }}>Privacy Settings</button>
            <span>•</span>
            <button onClick={() => navigate('terms')} style={{ background: 'none', color: '#94A3B8', textDecoration: 'underline' }}>Sitemap</button>
          </div>

          {/* Sub Navigation Links */}
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem' }}>
            <button onClick={() => navigate('ourmission')} style={{ background: 'none', color: '#CBD5E1' }}>Our Mission</button>
            <span style={{ color: '#475569' }}>|</span>
            <button onClick={() => navigate('contact')} style={{ background: 'none', color: '#CBD5E1' }}>Contact Us</button>
          </div>
        </div>

        {/* Bottom Left TrustedSite Security Widget */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '0.78rem',
            color: '#10B981',
            fontWeight: 600,
          }}
        >
          <ShieldCheck style={{ width: '14px', height: '14px' }} /> TrustedSite Verified
        </div>

        {/* Bottom Right Floating Chat Bubble Widget */}
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9000 }}>
          {!chatOpen ? (
            <button
              onClick={() => setChatOpen(true)}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00C4EE 0%, #0284C7 100%)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0, 196, 238, 0.4)',
                border: '2px solid #FFFFFF',
              }}
              title="Live Chat Support"
            >
              <MessageSquare style={{ width: '24px', height: '24px' }} />
            </button>
          ) : (
            <div
              style={{
                width: '340px',
                height: '420px',
                background: '#0F172A',
                border: '1px solid #1E293B',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                overflow: 'hidden',
              }}
            >
              {/* Chat Header */}
              <div
                style={{
                  background: '#1E293B',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #334155',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                  <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem' }}>ECAITM AI Assistant</span>
                </div>
                <button onClick={() => setChatOpen(false)} style={{ background: 'none', color: '#94A3B8' }}>
                  <X style={{ width: '18px', height: '18px' }} />
                </button>
              </div>

              {/* Chat Body */}
              <div style={{ flex: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                      background: m.sender === 'user' ? '#00C4EE' : '#1E293B',
                      color: m.sender === 'user' ? '#000000' : '#F8FAFC',
                      padding: '8px 12px',
                      borderRadius: '12px',
                      maxWidth: '82%',
                      fontSize: '0.85rem',
                      lineHeight: 1.4,
                      fontWeight: m.sender === 'user' ? 600 : 400,
                    }}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} style={{ padding: '10px', background: '#090D16', display: 'flex', gap: '6px' }}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  style={{
                    flex: 1,
                    background: '#1E293B',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    color: '#FFFFFF',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />
                <button type="submit" style={{ background: '#00C4EE', border: 'none', borderRadius: '6px', padding: '8px 12px', color: '#000' }}>
                  <Send style={{ width: '16px', height: '16px' }} />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
